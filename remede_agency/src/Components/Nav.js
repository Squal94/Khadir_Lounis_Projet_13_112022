import React from "react";
import Logo from "./../Assets/argentBankLogo.png";
import IconSign from "./../Assets/IconSign.png";
import IconLogout from "./../Assets/logout-icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/post.slice";

const Nav = () => {
  const logged = useSelector((state) => state.user.auth.Logged);
  const firstName = useSelector((state) => state.user.firstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [loggedAffichage, setloggedAffichage] = useState(false);

  // useEffect(() => {
  //   setloggedAffichage(logged);
  // }, [logged]);

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
      {logged === false ? (
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
      ) : (
        <div className="containerNav__btnSign">
          <img
            className="containerNav__btnSign--img"
            src={IconSign}
            alt=" Log in"
          />
          <p className="containerNav__btnSign--txt">{firstName}</p>
          {/* <NavLink
            to="/"
            onClick={() => {
              console.log(logged);
              dispatch(logout);
            }}
          > */}
          <div
            className="containerNav__btnLogout"
            onClick={() => {
              console.log(logged);
              dispatch(logout());
              navigate("/");
            }}
          >
            <img
              className="containerNav__btnSign--img"
              src={IconLogout}
              alt=" Logout"
            />
            <p className="containerNav__btnSign--txt">Sign Out</p>
          </div>
          {/* </NavLink> */}
        </div>
      )}
    </div>
  );
};

export default Nav;
