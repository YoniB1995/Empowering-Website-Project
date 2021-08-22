/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import "./Form.css";
import '../features/Input/Input.css'
import '../features/Button/Button.css'
import Button from "../features/Button/Button";
import { Link } from "react-router-dom";
import {registerAdmin} from '../../service/admin-service'

export default function LoginForm() {
  
  const [article, setUser] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...article, [name]: value });
  };

  const editArticle = (params) => {
    params.preventDefault()
    const data = {
      title: article.title,
      description: article.description,
      markdown: article.markdown,
    };
    console.log(data)
    registerAdmin(data)


  }
  return (
    <form class="login-form" onSubmit={editArticle}>
      <div class="login-form__content">
        <div class="login-form__header">Edit your article</div>
        <input className="login-form__input"
          type="text"
          name="title"
          placeholder="title"
          value={article.title}
          required
          onChange={handleInputChange}
        />
        <input className="login-form__input"
          type="text"
          name="description"
          placeholder="email"
          value={article.description}
          required
          onChange={handleInputChange}
        />
        <input className="login-form__input"
          type="password"
          name="markdown"
          placeholder="markdown"
          value={article.markdown}
          required
          onChange={handleInputChange}
        />
        <Button
          className="form-button"
          type="submit"
          text="Login"
          func={editArticle}
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
