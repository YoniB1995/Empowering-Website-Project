import "./Form.css";
import Input from "../features/Input/Input";
import Button from "../features/Button/Button";

const LoginForm = () => {
  return (
    <form class="login-form" action="./" method="POST">
      <div class="login-form__content">
        <div class="login-form__header">Login to your account</div>
        <Input type="email" name="email" placeholder="email" />
        <Input type="password" name="password" placeholder="Password" />
        <Button className="form-button" type="submit" text="Login" />
        <div class="login-form__links">
          <a class="login-form__link" href="./">
            Forgot your password?
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
