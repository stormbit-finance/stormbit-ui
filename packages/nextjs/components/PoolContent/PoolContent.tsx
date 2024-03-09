import "./poolContents.css";

function PoolContent() {
  return (
    <div className="w-[470px] flex flex-col gap-8 container-pool text-white">
      <div className="flex flex-col items-center justify-center usage">
        <span className="text-2xl">12%</span>
        <span className="text-sm">usage</span>
      </div>
      <span className="text-2xl pl-14">Community Credit Pool</span>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-6 py-3 pr-20 border-e">
          <span className="text-lg">Supply APY</span>
          <span className="text-4xl">20%</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 py-3 pl-20">
          <span className="text-lg">Borrow APY</span>
          <span className="text-4xl">2%</span>
        </div>
      </div>
    </div>
  );
}

export default PoolContent;
