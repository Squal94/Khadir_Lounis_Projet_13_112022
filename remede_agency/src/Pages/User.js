import React, { useRef, useState } from "react";
import axios from "axios";
import { infoUser } from "./../features/post.slice";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const Token = useSelector((state) => state.user.auth.Token);
  const editFirstName = useRef();
  const editLastName = useRef();
  const dispatch = useDispatch();
  const [transaction, setTransaction] = useState(true);

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

  const saveTransaction = () => {
    setTransaction(true);

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
        } else {
          console.log("Nom ou Prenom incorrect");
        }
      })
      .catch((err) => console.log(err));
  };

  const endTransaction = () => {
    setTransaction(true);
  };

  return (
    <div>
      <main></main>
    </div>
  );
};

export default User;
