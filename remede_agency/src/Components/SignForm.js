import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/post.slice";
import userPic from "./../Assets/IconSign.png";

/**
 * Component SignForm
 * @param {userEmailRef,UserPassRef} Data  are the inputs used and captured by the useRef hook and sent to axios
 * @param {axios} Axios Receives the data and bites the post method allows sending the data to the server
 *
 * SignForm is the component allowing the form formatting as well as the capture and sending of the data to the server
 */

const SignForm = () => {
  // input capture by hook use Ref
  const userEmailRef = useRef();
  const UserPassRef = useRef();
  // useState error is used to display an error message if the email and password check are incorrect
  const [error, setError] = useState(false);
  // hook useNavigate allows the redirection of the browser according to its use
  const navigate = useNavigate();
  // hook useDispatch comes from react-redux and is used to call a post.slice.js action
  const dispatch = useDispatch();

  // HandleLogin is the function for sending inputs to the database and checking them
  const handleLogin = async (e) => {
    e.preventDefault();

    const headers = { "Content-Type": "application/json" };
    const data = {
      email: userEmailRef.current.value,
      password: UserPassRef.current.value,
    };

    axios
      .post("http://localhost:3001/api/v1/user/login", data, {
        headers: headers,
      })

      .then((res) => {
        dispatch(login([res.data.body.token, data.email]));
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div className="formContainer">
      <img className="formContainer--pic" src={userPic} alt="Icon user" />
      <h1 className="formContainer--title">Sign In</h1>
      <form
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <div className="formContainer__email">
          <label className="inputTexteForm">Username</label>
          <input
            className="inputTexte"
            type="email"
            id="email"
            placeholder="xyz@gmail.com"
            ref={userEmailRef}
            required
          />
        </div>
        <div className="formContainer__password">
          <label className="inputTexteForm">Password</label>
          <input
            className="inputTexte"
            type="password"
            id="password"
            ref={UserPassRef}
            placeholder="Mot de passe"
            required
          />
        </div>
        <div className="formContainer__remember">
          <input className="inputCheckbox" type="checkbox" id="remember-me" />
          <label className="inputCheckbox">Remember me</label>
        </div>
        <span className="formContainer--error">
          {error && "Email ou mot de passe incorrect"}
        </span>

        <input
          type="submit"
          className="formContainer__submit"
          value="Sign In"
        />
      </form>
    </div>
  );
};

export default SignForm;
