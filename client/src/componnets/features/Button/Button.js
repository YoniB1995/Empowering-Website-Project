import "./Button.css";
const Button = (props) => {
  const { type, className, text, onClick, disabled } = props;
  return (
    <button
      className={className}
      style={{ background: disabled ? "gray" : "#bb906d" }}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
