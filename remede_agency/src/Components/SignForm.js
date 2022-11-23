import React, { useRef } from "react";
import userPic from "./../Assets/IconSign.png";

const SignForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userNameRef.current.value, UserPassRef.current.value);
  };

  const userNameRef = useRef();
  const UserPassRef = useRef();

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
            type="text"
            id="username"
            placeholder="Marc_21"
            ref={userNameRef}
            required
          />
        </div>
        <div className="formContainer__password">
          <label className="inputTexte">Password</label>
          <input type="password" id="password" ref={UserPassRef} required />
        </div>
        <div className="formContainer__remember">
          <input type="checkbox" id="remember-me" />
          <label className="inputCheckbox">Remember me</label>
        </div>

        <input
          type="submit"
          className="formContainer__submit"
          //   value="Sign-in"
        />
      </form>
    </div>
  );
};

export default SignForm;
