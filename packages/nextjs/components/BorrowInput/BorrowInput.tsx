interface BorrowInputProps {
  placeholder?: string;
}

const BorrowInput: React.FC<BorrowInputProps> = ({ placeholder = "0" }) => (
  <div className="flex flex-col justify-center gap-4">
    <input type="text" className="bg-transparent border-none focus:outline-none" placeholder={placeholder}></input>
    <span>~ $0.00</span>
  </div>
);

export default BorrowInput;
