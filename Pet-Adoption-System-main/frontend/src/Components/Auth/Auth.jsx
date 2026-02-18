import React, { useState } from "react";
import "./Auth.css";
import SignUn from "./SignUp";
import Login from "./Login";
import Overlay from "./Overlay"
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="auth-wrapper">
      <div className={`auth-container ${isSignUp ? "right-panel-active" : ""}`}>
        <Login />
        <SignUn setIsSignUp={setIsSignUp}/>
        <Overlay setIsSignUp={setIsSignUp} />
      </div>
    </div>
  );
};

export default Auth;
