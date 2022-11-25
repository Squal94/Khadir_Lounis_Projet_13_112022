import React, { useRef, useState } from "react";
import axios from "axios";
import { infoUser } from "./../features/post.slice";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Transaction from "../Components/Transaction";

const User = () => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const Token = useSelector((state) => state.user.auth.Token);
  const editFirstName = useRef();
  const editLastName = useRef();
  const dispatch = useDispatch();
  // const [transaction, setTransaction] = useState(true);
  const [error, setError] = useState(false);
  const [nameEdit, setNameEdit] = useState(false);

  const infoProfile = () => {
    const headers = {
      Authorization: `Bearer ${Token}`,
    };
    axios
      .post(
        "http://localhost:3001/api/v1/user/profile",
        {},
        {
          headers: headers,
        }
      )
      .then((res) =>
        dispatch(infoUser([res.data.body.firstName, res.data.body.lastName]))
      )
      .catch((err) => console.log(err));
  };

  infoProfile();

  const saveEdit = () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Token}`,
    };

    const data = {
      firstName: editFirstName.current.value,
      lastName: editLastName.current.value,
    };

    axios
      .put("http://localhost:3001/api/v1/user/profile", data, {
        headers: headers,
      })
      .then(() => {
        if (data.firstName.length > 0 && data.lastName.length > 0) {
          dispatch(infoUser([data.firstName, data.lastName]));
          setNameEdit(!nameEdit);
        } else {
          setError(true);
        }
      })
      .catch((err) => console.log(err));
  };

  // const endTransaction = () => {
  //   setTransaction(true);
  // };

  return (
    <div>
      <Nav />
      <main className="user">
        {nameEdit === false ? (
          <div className="user__Container">
            <h1 className="user__Container__title">
              Welcome Back <br />
              {firstName} {lastName} !
            </h1>
            <button
              className="user__Container__btnEdit"
              onClick={() => {
                setNameEdit(!nameEdit);
                // console.log(nameEdit);
              }}
            >
              Edit name
            </button>
          </div>
        ) : (
          <div className="user__Container">
            <h1 className="user__Container__title">
              Welcome Back <br />
            </h1>
            <div className="user__Container__title__input">
              <input
                className="user__Container__title__input--current"
                type="text"
                placeholder={firstName}
                ref={editFirstName}
              />
              <input
                className="user__Container__title__input--current"
                type="text"
                placeholder={lastName}
                ref={editLastName}
              />
            </div>
            <div className="user__Container__title__input--btn">
              <button
                onClick={() => {
                  saveEdit();
                }}
              >
                Save
              </button>
              <button
                className="user__Container__title__input--btnValid"
                onClick={() => {
                  setNameEdit(!nameEdit);
                  setError(false);
                  // console.log(nameEdit);
                }}
              >
                Cancel
              </button>
            </div>
            <span className="formContainer--error">
              {error && "Il faut au moins 1 caractère"}
            </span>
          </div>
        )}
        <div className="user__transaction">
          <Transaction
            reference="Argent Bank Checking (x8349)"
            money="$2,082.79"
            balance="Available Balance"
          />
          <Transaction
            reference="Argent Bank Savings (x6712)"
            money="$10,928.42"
            balance="Available Balance"
          />
          <Transaction
            reference="Argent Bank Credit Card (x8349)"
            money="$184.30"
            balance="Current Balance"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default User;

// const name = (e) => {
//   if (edit === false) {
//     return <span>je marche false</span>;
//   } else {
//     return <span>je marche true</span>;
//   }
// };

//  axios
//       .put("http://localhost:3001/api/v1/user/profile", data, {
//         headers: headers,
//       })
//       .then(() => {
//         if (data.firstName.length > 0 && data.lastName.length > 0) {
//           dispatch(infoUser([data.firstName, data.lastName]));
//         } else {
//           console.log("Nom ou Prenom incorrect");
//         }
//       })
//       .catch((err) => console.log(err));
//   };
