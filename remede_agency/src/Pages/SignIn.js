import React from "react";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import SignForm from "../Components/SignForm";

const SignIn = () => {
  return (
    <div>
      <Nav />
      <main className="mainForm">
        <SignForm />
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
