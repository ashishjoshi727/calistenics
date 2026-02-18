import React from "react";
import { useState } from "react";
import axios from "axios"
import "./Auth.css";

const SignUp = ({setIsSignUp}) => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/auth/signup", { name, email, password });
      alert("User registered successfully!");

      setName("");
      setEmail("");
      setPassword("");

      // ✅ Switch to Sign In form
      setIsSignUp(false);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-cont sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <input type="text" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} required/>
        <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password"   value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
