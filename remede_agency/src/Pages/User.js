import React from "react";
import { useSelector } from "react-redux";

const User = () => {
  const firstName = useSelector((state) => state.user.firstName);
  console.log(firstName);
  return (
    <div>
      <h1>{firstName}</h1>
    </div>
  );
};

export default User;
