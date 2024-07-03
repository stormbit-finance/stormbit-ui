"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
function Page() {

  const router = useRouter();
  const [username, setUsername] = useState("");
  const handleRegister = () =>{
    router.push("/explorer")
  }
  const { writeAsync: register } = useScaffoldContractWrite({
    contractName: "StormbitRegistry",
    functionName: "register",
    args: [username+'.stormbit'],
    value: BigInt(0),
    onBlockConfirmation: txReceipt => {
      console.log(txReceipt)
      handleRegister()
    },
    blockConfirmations: 0,
  });
  return (
    <div className="pt-[100px] flex items-center justify-center min-h-[900px] text-white">
        <div className="w-max-[900px] text-white p-16 flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold mb-10 ">Register</h1>
        <div className="mb-20 border border-solid border-[#6C757D] rounded-[7px]  flex justify-between h-[47px] items-center">
              <input
                type="text"
                placeholder="Enter username"
                className="bg-transparent border-none focus:outline-none w-[680px] px-4"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <div className="text-white flex justify-center items-center px-20 h-[47px] border-l border-[#6C757D] rounded-r-[8px] " >
                .stormbit
              </div>
        </div>
        <button onClick={()=>register()} className="bg-[#D0C8FF] py-4 w-full text-black rounded-[7px]">Register</button>
        <button className="border border-[#D0C8FF] py-4 w-full text-[#D0C8FF] rounded-[7px]">Cancel</button>

        </div>

    </div>
  );
}

export default Page;
