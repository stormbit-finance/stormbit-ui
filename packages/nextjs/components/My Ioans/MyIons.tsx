function MyIons() {
  return (
    <div className="w-[1450px] flex flex-col">
      <div className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
        <span className="w-[160px] text-center">Pool</span>
        <span className="w-[160px] text-center">Agreement</span>
        <span className="w-[160px] text-center">Next Due Date</span>
        <span className="w-[160px] text-center">Next Due Amount</span>
        <span className="w-[160px] text-center">Penalty</span>
        <span className="w-[160px] text-center">Cumulative Interest</span>
        <span className="w-[160px] text-center">Status</span>
      </div>
      <div className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
        <p className="w-[160px] text-center">Cheap Local Lending</p>
        <div className="w-[160px] text-center flex gap-1 items-center justify-center">
          <span className="bg-[#F1F3F4] rounded-[8px] p-2">Base</span>
          <span className="bg-[#F1F8FF] rounded-[8px] p-2">NFT</span>
          <span className="bg-[#E8F5F4] rounded-[8px] p-2">FT</span>
        </div>
        <p className="w-[160px] text-center">10-01-2024</p>
        <p className="w-[160px] text-center">$10.01</p>
        <p className="w-[160px] text-center">11.8 %</p>
        <p className="w-[160px] text-center">+ 11.8 %</p>
        <p className="w-[160px] text-center text-[#FFA876] font-bold">Pending</p>
        <button className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10">Details</button>
      </div>
    </div>
  );
}

export default MyIons;
