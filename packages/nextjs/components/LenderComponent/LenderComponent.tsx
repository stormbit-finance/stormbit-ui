import Link from "next/link";
import { Term } from "~~/types/Term";

interface LenderComponentProps {
  term: any;
}
const LenderComponent: React.FC<LenderComponentProps> = ({ term }) => {
  return (
    <>
      <Link
        href={`/lender/${term?.args?.id || 0}`}
        className="bg-[#2F2F2F] border border-[#444444] flex flex-col p-5 rounded-[11px] text-white w-[400px]"
      >
        <div className=" border-b-1 border-[#444444] flex justify-between pb-4">
          <div className="flex flex-col">
            <span className="text-xl">10% APR</span>
            <span className="text-sm">managed by 0x000</span>
          </div>
          <div>
            <button className="button-gradient py-1 px-6 rounded-[36px] text-[9px]">No hooks</button>
          </div>
        </div>
        <div className="flex flex-col my-4 gap-4">
          <div className="flex justify-between">
            <span>30 days Average Supply APY</span>
            <span>100%</span>
          </div>
          <div className="flex justify-between">
            <span>Total Deposited</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between">
            <span>Total Borrowed</span>
            <span>$10.00</span>
          </div>
          <div className="flex justify-between">
            <span>Lender Comission</span>
            <span>$10.00</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LenderComponent;
