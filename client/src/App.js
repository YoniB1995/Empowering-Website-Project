import "./App.css";
import Card from "./componnets/features/card/Card";
import ImageSlider from "./componnets/features/Slider/imageSlider";
import LoginForm from "./componnets/Forms/LoginForm";
import ForgotPasswordForm from "./componnets/Forms/ForgotPasswordForm";

import Input from "./componnets/features/Input/Input";
function App() {
  return (
    <>
      <Input />
      <ImageSlider />
      <Card />
      <LoginForm />
      <ForgotPasswordForm />
    </>
  );
}

export default App;
