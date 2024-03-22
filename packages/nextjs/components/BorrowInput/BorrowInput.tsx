import Image from "next/image";

interface BorrowInputProps {
  placeholder?: string;
}

const BorrowInput: React.FC<BorrowInputProps> = ({ placeholder = "0" }) => (
  <div className="border border-[#374B6D] rounded-md flex justify-between">
    <div className="flex flex-col justify-center gap-4 p-[10px]">
      <input type="text" className="bg-transparent border-none focus:outline-none" placeholder={placeholder}></input>
      <span>~ $0.00</span>
    </div>
    <div className="flex flex-col p-[10px] gap-[10px]">
      <div className="flex gap-[5px]">
        <Image src="/USDT.png" alt="icon" width={20} height={20} />
        <span>USDT</span>
      </div>
      <div className="gap-[5px] flex">
        <button className="bg-[#25253E] px-[8px] py-[5px] rounded-md">Half</button>
        <button className="bg-[#25253E] px-[8px] py-[5px] rounded-md">Max</button>
      </div>
    </div>
  </div>
);

export default BorrowInput;
