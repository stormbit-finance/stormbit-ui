const lender = [
  {
    percentage: "10%",
    managed: "yixuan.stormbit",
    supply: "10%",
    deposited: "$100.00",
    borrowed: "$100.00",
    commission: "$100.00",
  },
  {
    percentage: "10%",
    managed: "yixuan.stormbit",
    supply: "10%",
    deposited: "$100.00",
    borrowed: "$100.00",
    commission: "$100.00",
  },
  {
    percentage: "10%",
    managed: "yixuan.stormbit",
    supply: "10%",
    deposited: "$100.00",
    borrowed: "$100.00",
    commission: "$100.00",
  },
  {
    percentage: "10%",
    managed: "yixuan.stormbit",
    supply: "10%",
    deposited: "$100.00",
    borrowed: "$100.00",
    commission: "$100.00",
  },
  {
    percentage: "10%",
    managed: "yixuan.stormbit",
    supply: "10%",
    deposited: "$100.00",
    borrowed: "$100.00",
    commission: "$100.00",
  },
  {
    percentage: "10%",
    managed: "yixuan.stormbit",
    supply: "10%",
    deposited: "$100.00",
    borrowed: "$100.00",
    commission: "$100.00",
  }
];
function LenderComponent() {
  return (
    <>
      {lender.map((element, index) => (
        <div
          className="bg-[#2F2F2F] border border-[#444444] flex flex-col p-5 rounded-[11px] text-white w-[400px]"
          key={index}
        >
          <div className=" border-b-1 border-[#444444] flex justify-between pb-4">
            <div className="flex flex-col">
              <span className="text-xl">{element.percentage} APR</span>
              <span className="text-sm">managed by {element.managed}</span>
            </div>
            <div>
              <button className="button-gradient py-1 px-6 rounded-[36px] text-[9px]">No hooks</button>
            </div>
          </div>
          <div className="flex flex-col my-4 gap-4">
            <div className="flex justify-between">
              <span>30 days Average Supply APY</span>
              <span>{element.supply}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Deposited</span>
              <span>{element.deposited}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Borrowed</span>
              <span>{element.borrowed}</span>
            </div>
            <div className="flex justify-between">
              <span>Lender Comission</span>
              <span>{element.commission}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default LenderComponent;
