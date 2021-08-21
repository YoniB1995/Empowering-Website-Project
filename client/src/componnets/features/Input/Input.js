import "./Input.css";

const Input = (props) => {
const {type,name,placeholder}=props;

  return (
    <input
      class="login-form__input"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;