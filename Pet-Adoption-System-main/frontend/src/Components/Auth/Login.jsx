import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"
import "./Auth.css";

const Login = () => {

   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", { email, password });
      localStorage.setItem("token", res.data.token); 
      alert("Login successful!");
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-cont sign-in-container">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>
        
        <button>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
