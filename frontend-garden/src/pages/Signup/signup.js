import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/signup.css'
import axios from 'axios';


function Signup() {
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();

  const details = { userName, email, password }
  const userData = async () => {
    const response = await axios.post("http://localhost:8080/api/v1/auth/user/register", details);
    console.log(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!userName.trim()) {
      validationErrors.userName = "userName is required";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }
    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      userData();
      nav("/login")
    }

  };
  const handlechange = (e) => {
    e.preventDefault();
    nav("/login")
  }
  const imageStyle = {
    width: '50px',
    height: '50px',
    border: '1px solid #ccc',
    borderRadius: '50%'
  };
  return (
    <div className='sigup_body'>
      <form className='signup_form'>
        <span>
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/93/62/34/1000_F_293623430_HJ0wBHMOp6OcIixtUnSl9Y1FZ9PK3S2B.jpg"
            alt="My Image"
            style={imageStyle}
          /><span className='sig_logos'>Little Garden</span>
        </span>
        <h2 className='header'>Signup</h2>
        <div>
          <input
            type="text"
            className='input'
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            placeholder="userName"
          />
          <h5 className="error-message">{errors.userName && <span>{errors.userName}</span>}</h5>
        </div>
        <div>
          <input
            type="email"
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <h5 className="error-message">{errors.email && <span>{errors.email}</span>}</h5>
        </div>
        <div>
          <input
            type="password"
            className='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <h5 className="error-message">{errors.password && <span>{errors.password}</span>}</h5>
        </div>
        <div>
          <input
            type="password"
            className='input'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <h5 className="error-message">{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</h5>
        </div>
        <button onClick={handleSubmit} className='signup_button' >Register</button>
        <span className="sin_or">or</span>
        <span className='sign_to'>Already have account?</span><sapn onClick={handlechange} className="signin_to">sign in</sapn>
      </form>
    </div>
  );
}

export default Signup;