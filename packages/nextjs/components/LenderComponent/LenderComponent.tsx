import Loading from "../Loading/Loading";
import { Term } from "~~/types/Term";

interface LenderComponentProps {
  terms?: any;
}
const LenderComponent: React.FC<LenderComponentProps> = ({ terms }) => {
  return (
    <>
      {!terms && (
        <div className="text-white">
          Loading data <Loading />
        </div>
      )}
      {terms && terms.length <= 0 && <div className="text-white">No data</div>}
      {terms &&
        terms.length > 0 &&
        terms.map((item, index) => (
          <div
            className="bg-[#2F2F2F] border border-[#444444] flex flex-col p-5 rounded-[11px] text-white w-[400px]"
            key={index}
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
          </div>
        ))}
    </>
  );
};

export default LenderComponent;
