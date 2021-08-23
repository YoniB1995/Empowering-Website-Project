import "./Input.css";

const Input = (props) => {
const {type,name,placeholder}=props;

  return (
    <input
      class="input"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default Input;