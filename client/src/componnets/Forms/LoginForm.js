import React, { useState, useEffect, useContext } from "react";
import "./Form.css";
import Input from "../features/Input/Input";
import Button from "../features/Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
  // axios.create({
  //   baseURL: "http://localhost:5000/admin",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // });

  // const userDetails = {
  //   username: "",
  //   email: "",
  //   password: "",
  // };

  const [user, setUser] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    let data = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    axios
      .post(`http://localhost:5000/admin`, data)
      .then((response) => {
        setUser({
          username: response.data.username,
          email: response.data.email,
          password: response.data.password,
        });
        setSubmitted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const AddUser = () => {
  //   console.log(extraDataToDB);
  //   axios.post(`http://localhost:5000/admin`, extraDataToDB); // body data type must match "Content-Type" header
  // };

  // const registerUser = () => {
  //   axios.post("http://localhost:5000/admin", {
  //     username,
  //     email,
  //     password,
  //   });
  // };

  // const { users } = useContext(GlobalContext);
  // console.log(users);
  return (
    <form class="login-form">
      <div class="login-form__content">
        <div class="login-form__header">Login to your account</div>
        <Input
          type="text"
          name="username"
          placeholder="username"
          value={user.username}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <Input
          type="email"
          name="email"
          placeholder="email"
          value={user.email}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <Button
          className="form-button"
          type="button"
          text="Login"
          onClick={() => console.log(user)}
        />
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
