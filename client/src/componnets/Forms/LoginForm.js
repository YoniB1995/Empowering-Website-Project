import React, { useState, useEffect, useContext } from "react";
import "./Form.css";
import Input from "../features/Input/Input";
import Button from "../features/Button/Button";
import { Link } from "react-router-dom";
import {registerAdmin} from '../../service/admin-service'
import { ConnectionStates } from "mongoose";

export default function LoginForm() {
  

  const [user, setUser] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const saveAdmin = (params) => {
    params.preventDefault()
    const data = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    console.log(data)
    registerAdmin(data)
    .then((res)=>{alert(res.message)})


  }
  return (
    <form class="login-form" onSubmit={saveAdmin}>
      <div class="login-form__content">
        <div class="login-form__header">Login to your account</div>
        <Input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleInputChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <Button
          className="form-button"
          type="submit"
          text="Login"
        />

        <div>
          Testing Input:
          <form>
          <input type="text" name='username' value={user.username} onChange={handleInputChange} />
          <br/>
          <input type="email" name='email' value={user.email} onChange={handleInputChange} />
          <br/>
          <input type="password" name='password' value={user.password} onChange={handleInputChange} />
          <button type="button" onClick={saveAdmin}>Register!</button>
          </form>
        </div>
        <div class="login-form__links">
          <a class="login-form__link" href="./">
            <div>
              <Link to="/forgotpass">Forgot your password?</Link>
            </div>
            <div>
              <Link to="/articles">Go to Articles?</Link>
            </div>
          </a>
        </div>
      </div>
    </form>
  );
}
