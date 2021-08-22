import React, { useState, useEffect, useContext } from "react";
import "./Form.css";
<<<<<<< HEAD:client/src/componnets/Forms/LoginForm.js
import '../features/Input/Input.css'
import '../features/Button/Button.css'
import Input from "../features/Input/Input";
import Button from "../features/Button/Button";
import { Link } from "react-router-dom";
import {registerAdmin} from '../../service/admin-service'
import { ConnectionStates } from "mongoose";
=======
import Input from "../Input/Input";
import Button from "../Button/Button";
>>>>>>> 463119fc6748ba7d488dd4401ba396e2c72e8433:client/src/componnets/features/Forms/LoginForm.js

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


  }
  return (
    <form class="login-form" onSubmit={saveAdmin}>
      <div class="login-form__content">
        <div class="login-form__header">Login to your account</div>
        <input className="login-form__input"
          type="text"
          name="username"
          placeholder="username"
          userValue={user.username}
          required
          onChange={handleInputChange}
        />
        <input className="login-form__input"
          type="email"
          name="email"
          placeholder="email"
          userValue={user.email}
          required
          onChange={handleInputChange}
        />
        <input className="login-form__input"
          type="password"
          name="password"
          placeholder="Password"
          userValue={user.password}
          required
          onChange={handleInputChange}
        />
        <Button
          className="form-button"
          type="submit"
          text="Login"
          func={saveAdmin}
        />

        {/* <div>
          Testing Input:
          <form>
          <input type="text" name='username' value={user.username} onChange={handleInputChange} />
          <br/>
          <input type="email" name='email' value={user.email} onChange={handleInputChange} />
          <br/>
          <input type="password" name='password' value={user.password} onChange={handleInputChange} />
          <button type="button" onClick={saveAdmin}>Register!</button>
          </form>
        </div> */}
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
