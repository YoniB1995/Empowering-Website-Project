import "./Button.css";
const Button = (props) => {
  const { type, className, text } = props;
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
};

export default Button;
