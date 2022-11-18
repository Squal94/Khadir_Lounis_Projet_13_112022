import React from "react";
import userPic from "./../Assets/IconSign.png";

const SignForm = () => {
  function handleConnect() {}
  return (
    <div className="formContainer">
      <img className="formContainer--pic" src={userPic} alt="Icon user" />
      <h1 className="formContainer--title">Sign In</h1>
      <form
        onSubmit={(e) => {
          handleConnect(e);
        }}
      >
        <div className="formContainer__email">
          <label className="inputTexte">Email</label>
          <input type="text" id="username" placeholder="xyz@mail.com" />
        </div>
        <div className="formContainer__password">
          <label className="inputTexte">Password</label>
          <input type="password" id="password" />
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
