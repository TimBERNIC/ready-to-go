const Button = ({ className, title, functionOnClick }) => {
  return (
    <button onClick={functionOnClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
