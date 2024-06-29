import "./Button.css";

interface ButtonProps {
  children: any;
  size?: "small" | "large";
  backgroundColor?: string;
  onClick?: () => void;
}

const Button = ({ children, size = "small", backgroundColor = "#9135F5", onClick }: ButtonProps) => {
  const isSmall = size === "small";
  return (
    <button
      onClick={onClick}
      className={`text-black text-xs flex justify-center items-center gap-2 bg-[${backgroundColor}] base_button__${
        isSmall ? "small" : "large"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
