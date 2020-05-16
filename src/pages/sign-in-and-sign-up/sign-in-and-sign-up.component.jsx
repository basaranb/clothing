import React from "react";
import "./sign-in-and-sign-up.style.scss";
import Signin from "../../component/sign-in/sign-in.component";
import SignUp from "../../component/sign-up/sign-up.component";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up ">
    <Signin />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
