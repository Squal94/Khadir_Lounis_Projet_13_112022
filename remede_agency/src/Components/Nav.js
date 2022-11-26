import React from "react";
import Logo from "./../Assets/argentBankLogo.png";
import IconSign from "./../Assets/IconSign.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="containerNav">
      <div className="containerNav__logo">
        <NavLink to="/">
          <img
            className="containerNav__logo--img"
            src={Logo}
            alt="Logo argent bank"
          />
        </NavLink>
      </div>
      <NavLink to="/signin">
        <div className="containerNav__btnSign">
          <img
            className="containerNav__btnSign--img"
            src={IconSign}
            alt=" Log in"
          />
          <p className="containerNav__btnSign--txt">Sign In</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Nav;
