import "./Input.css";

const Input = (props) => {
const {type,name,placeholder,handleChange}=props;

  return (
    <input
      class="login-form__input"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;