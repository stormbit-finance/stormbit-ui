import React from "react";

// import Image from "next/image";
// import Link from "next/link";
// import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

function Table() {
  // const poolId = 1;

  // const { data } = useScaffoldContractRead({
  //   contractName: "StormBit",
  //   functionName: "getPoolData",
  //   args: [BigInt(poolId)],
  // });

  // if (!data) {
  //   return console.log("geg");
  // }

  // console.log(data, "gab");

  return (
    <div className="w-[1450px] flex flex-col">
      <div className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
        <span className="w-[160px] text-center">Pool</span>
        <span className="w-[160px] text-center">Market SIze</span>
        <span className="w-[160px] text-center">Total Supplied</span>
        <span className="w-[160px] text-center">Supply APY</span>
        <span className="w-[160px] text-center">Total Borrowed</span>
        <span className="w-[160px] text-center">Borrow APY</span>
        <span className="w-[160px] text-center"></span>
      </div>
      {/* {data.map((poolData, index) => (
        <div key={index} className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
          <p className="w-[160px] text-center">{poolData.name}</p>
          <p className="w-[160px] text-center">{poolData.minCreditScore}</p>
          <p className="w-[160px] text-center">{}</p>
          <p className="w-[160px] text-center">{}</p>
          <p className="w-[160px] text-center">{}</p>
          <p className="w-[160px] text-center">{}</p>
          <Link href="/pool">
            <button className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10">Trade</button>
          </Link>
          <Link href="/pool">
            <Image src="/chevron-right.png" alt="chevron" width={24} height={24}></Image>
          </Link>
        </div>
      ))} */}
    </div>
  );
}

export default Table;
