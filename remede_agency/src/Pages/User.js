import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { infoUser } from "./../features/post.slice";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const User = () => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const Token = useSelector((state) => state.user.auth.Token);
  const editFirstName = useRef();
  const editLastName = useRef();
  const dispatch = useDispatch();
  const [transaction, setTransaction] = useState(true);
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
          console.log("Il faut au moins 1 caractère");
        }
      })
      .catch((err) => console.log(err));
  };

  const endTransaction = () => {
    setTransaction(true);
  };

  return (
    <div>
      <Nav />
      <main className="userContainer">
        {nameEdit === false ? (
          <div>
            <h1 className="userContainer__title">
              Welcome Back <br />
              {firstName} {lastName}
            </h1>
            <button
              className="userContainer__btnEdit"
              onClick={() => {
                setNameEdit(!nameEdit);
                console.log(nameEdit);
              }}
            >
              Edit name
            </button>
          </div>
        ) : (
          <div>
            <h1 className="userContainer__title">
              Welcome Back <br />
              <div className="userContainer__title__input">
                <input
                  className="userContainer__title__input--current"
                  type="text"
                  ref={editFirstName}
                />
                <input
                  className="userContainer__title__input--current"
                  type="text"
                  ref={editLastName}
                />
              </div>
            </h1>
            <button
              onClick={() => {
                saveEdit();
              }}
            >
              Save
            </button>
            <button
              className="userContainer__title__input--btnValid"
              onClick={() => {
                setNameEdit(!nameEdit);
                console.log(nameEdit);
              }}
            >
              Cancel
            </button>
          </div>
        )}
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

// <div>
//   <main className="main bg-dark">
//     <div className="header">
//       <h1>
//         Welcome back
//         <br />
//         {`${firstName} ${lastName}`}
//       </h1>
//       {transaction ? (
//         <button
//           className="edit-button"
//           onClick={() => {
//             setTransaction(false);
//           }}
//         >
//           Edit Name
//         </button>
//       ) : (
//         <div className="edit-area">
//           <div className="input-edit-area"></div>
//           <div className="confirm-edit-area">
//             <button
//               className="save"
//               onClick={() => {
//                 saveTransaction();
//               }}
//             >
//               Save
//             </button>
//             <button
//               className="cancel"
//               onClick={() => {
//                 endTransaction();
//               }}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//     <h2 className="sr-only">Accounts</h2>
//   </main>
// </div>;
