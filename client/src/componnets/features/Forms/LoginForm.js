import "./Form.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useState } from "react";


const LoginForm = () => {

  const [values,setValues] = useState({
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setValues({
      ...values,
      [e.target.name] : e.target.value
    })
   
  }

  const formHandleSubmit = (e)=>{
    e.preventDefault();
    console.log(values);
  }

  return (
    <form class="login-form" action="./"  >
      <div class="login-form__content">
        <div class="login-form__header">התחברות לאתר</div>
        <Input type="email" name="email" placeholder="אימייל"  handleChange={handleChange}/>
        <Input type="password" name="password" placeholder="סיסמא" handleChange={handleChange}/>
        <Button className="form-button" type="submit" text="התחברות" onClick={formHandleSubmit}/>
        <div class="login-form__links">
          <a class="login-form__link" href="./">
            ? שחכתה סיסמא 
          </a>
        </div>
      </div>
    </form>
  );
};

//   const [user, setUser] = useState([]);
//   const [submitted, setSubmitted] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//   };

//   const saveAdmin = (params) => {
//     params.preventDefault()
//     const data = {
//       username: user.username,
//       email: user.email,
//       password: user.password,
//     };
//     console.log(data)
//     registerAdmin(data)

//   }
//   return (
//     <form class="login-form" onSubmit={saveAdmin}>
//       <div class="login-form__content">
//         <div class="login-form__header">Login to your account</div>
//         <input className="login-form__input"
//           type="text"
//           name="username"
//           placeholder="username"
//           userValue={user.username}
//           required
//           onChange={handleInputChange}
//         />
//         <input className="login-form__input"
//           type="email"
//           name="email"
//           placeholder="email"
//           userValue={user.email}
//           required
//           onChange={handleInputChange}
//         />
//         <input className="login-form__input"
//           type="password"
//           name="password"
//           placeholder="Password"
//           userValue={user.password}
//           required
//           onChange={handleInputChange}
//         />
//         <Button
//           className="form-button"
//           type="submit"
//           text="Login"
//           func={saveAdmin}
//         />

//         <div>
//           Testing Input:
//           <form>
//           <input type="text" name='username' value={user.username} onChange={handleInputChange} />
//           <br/>
//           <input type="email" name='email' value={user.email} onChange={handleInputChange} />
//           <br/>
//           <input type="password" name='password' value={user.password} onChange={handleInputChange} />
//           <button type="button" onClick={saveAdmin}>Register!</button>
//           </form>
//         </div>
//         <div class="login-form__links">
//           <a class="login-form__link" href="./">
//             <div>
//               <Link to="/forgotpass">Forgot your password?</Link>
//             </div>
//             <div>
//               <Link to="/articles">Go to Articles?</Link>
//             </div>
//           </a>
//         </div>
//       </div>
//     </form>
//   );
// }
