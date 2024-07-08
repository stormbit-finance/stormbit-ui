import "./Button.css";

interface ButtonProps {
  children: any;
  size?: "small" | "large";
  backgroundColor?: string;
  textColor?:string;
  onClick?: () => void;
  disabled?: false;
}

const Button = ({ children, disabled, size = "small", backgroundColor = "#D0C8FF", textColor='black', onClick }: ButtonProps) => {
  const isSmall = size === "small";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ backgroundColor: backgroundColor, color:textColor }}
      className={`text-sm flex justify-center items-center gap-2 base_button__${
        isSmall ? "small" : "large"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
