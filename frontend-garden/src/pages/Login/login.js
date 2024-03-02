import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../assets/css/login.css"
import { useDispatch } from 'react-redux';
import { login } from '../Redux/Userslice';
import axios from 'axios';
import logimg from "../../assets/img/loginWave.jpg"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();
  const dispatch = useDispatch();
  const logincredentials = { email, password };


  const authenticateUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/user/authenticate",
        logincredentials
      );
      const token = response.data.token;
      localStorage.setItem("auth", token);
      localStorage.setItem("email", email);
      localStorage.token = token;
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return token;
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert("Invalid email or password");
      } else {

        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
        throw error;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6 || password.length > 15) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {


      const token = await authenticateUser();
      if (token == null) {
        alert("Invalid Email or Password");
        return;
      } else {
        toast.success("Login successfully");
        dispatch(login(email));
        nav("/");
      }

    }
  }


  const handleChange = (e) => {
    e.preventDefault();
    nav("/register");
  }

  return (
    <div className='login_body'>
    <span className='log_img'>
      <img src={logimg} alt='loginImage'/>
    </span>
      <div class="login_box">
        <form className="form" onSubmit={handleSubmit}>
          <span>
            <i class="fas fa-user"></i>
          </span>
          <span className='log_appli'>Welcome To</span>
          <span className='log_appli'>Little Garden</span>
          <h2 className='log_header'>Login</h2>
          <div>
            <input
              type="email"
              className='log_input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
            <h6 className="errors">{errors.email && <span>{errors.email}</span>}</h6>
          </div>
          <div>
            <input
              type="password"
              className='log_input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <h6 className="errors"> {errors.password && <span>{errors.password}</span>}</h6>
          </div>
          <button className='log_button'>Login</button>
          <span className="log_or">or</span>
          <span className='re_btn'>Don't have acccount?</span><span class="reg_btn" onClick={handleChange}>create Account</span>
        </form>
      </div>
    </div>

  );
}

export default Login;
