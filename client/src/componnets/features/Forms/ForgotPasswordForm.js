import "./Form.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
const ForgotPasswordForm = () => {
  return (
    <form class="login-form" action="./" method="POST">
      <div class="login-form__content">
        <div class="login-form__header">Login to your account</div>
        <Input type="email" name="email" placeholder="Email" />
        <Button className="form-button" type="submit" text="Send" />
        <div class="login-form__links">
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;