import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../features/post.slice";
import userPic from "./../Assets/IconSign.png";

const SignForm = () => {
  const userEmailRef = useRef();
  const UserPassRef = useRef();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        // dispatch(login([console.log(res.data)]));
        dispatch(login([res.data.body.token, data.email]));
        navigate("/user");
      })
      .catch((err) => {
        console.log(err);
        console.log("je suis pas la ");
        setError(true);
      });

    // console.log(userEmailRef.current.value, UserPassRef.current.value);
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
          <label className="inputTexte">Username</label>
          <input
            type="email"
            id="email"
            placeholder="xyz@gmail.com"
            ref={userEmailRef}
            required
          />
        </div>
        <div className="formContainer__password">
          <label className="inputTexte">Password</label>
          <input
            type="password"
            id="password"
            ref={UserPassRef}
            placeholder="Mot de passe"
            required
          />
        </div>
        <div className="formContainer__remember">
          <input type="checkbox" id="remember-me" />
          <label className="inputCheckbox">Remember me</label>
        </div>
        <span className="formContainer--error">
          {error && "Email ou mot de passe incorrect"}
        </span>

        <input
          type="submit"
          className="formContainer__submit"
          value="Sign-in"
        />
      </form>
    </div>
  );
};

export default SignForm;
