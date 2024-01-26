import Button from "../Button/Button";

function Supply() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
        <span className="font-bold">Amount to Supply</span>
        <input type="text"></input>
        <span>Balance 0.001 ETH</span>
      </div>
      <div className="my-8 bg-[#F3F7F9] p-5 text-[#17344F;]">
        <span className="font-bold">Order information</span>
        <div className="flex justify-between">
          <span>Supply Interest</span>
          <span>0.03 %</span>
        </div>
        <div className="flex justify-between">
          <span>Total Supply Amount</span>
          <span>0.001 ETH</span>
        </div>
      </div>
      <Button>Deposit</Button>
    </div>
  );
}

export default Supply;
