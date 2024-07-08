"use client";

import React, { useEffect, useState } from "react";
import Borrower from "~~/components/Borrower/Borrower";
import useUserLoans from "~~/hooks/gql/useUserLoansAggregate";
import useUserTermCount from "~~/hooks/gql/useUserTermCount";
import useUserTermDepositAggregate from "~~/hooks/gql/useUserTermDepositAggregate";
import useUsername from "~~/hooks/gql/useUsername";
import useGetVerification from "~~/hooks/api/useGetVerification";
import { getAddressByUsername } from "~~/utils/gql/helpers";
import { useChainId } from 'wagmi'
import { formatEther } from 'viem'

function Page() {
  const chainId = useChainId()
  const [searchQuery, setSearchQuery] = useState("");
  const [searchAddress, setSearchAddress] = useState("")
  const [showResults, setShowResults] = useState(false);
// 0xDe3089d40F3491De794fBb1ECA109fAc36F889d0
  const { aggregatedLoans } = useUserLoans(searchAddress);
  const { aggregatedDeposits } = useUserTermDepositAggregate(searchAddress);
  const { username } = useUsername(searchAddress);
  const { termCount } = useUserTermCount(searchAddress);
  const { data: verifications } = useGetVerification(searchAddress||"0x");


  const handleSearch = () => {
    if(searchQuery.startsWith('0x')){  //if search with address
      setSearchAddress(searchQuery)
    }
    else{//if search with username
      getAddressByUsername(searchQuery, chainId).then(data => {
        setSearchAddress(data || '')
      });
    }
    setShowResults(true);
  };


  return (
    <div className="pt-[100px] flex items-center justify-center min-h-[500px]">
      {!showResults && (
        <div className="w-[900px] text-white p-16 flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold">Stormbit Explorer</h1>
          <div className="flex flex-col">
            <div className="border border-solid border-[#6C757D] rounded-[7px] w-[760px] flex justify-between h-[47px] items-center mb-6">
              <input
                type="text"
                className="bg-transparent border-none focus:outline-none w-[680px] px-4"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              <button onClick={handleSearch} disabled={!searchQuery} className={`${!searchQuery? 'cursor-not-allowed':''} bg-[#D0C8FF] px-20 h-[47px] rounded-r-[8px] text-black`} >
                Search
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col justify-center items-center px-14 py-4 bg-[#2F2F2F] border border-solid border-[#444C6A] rounded-[11px] gap-2">
              <span className="text-sm text-white text-center">Proofs Generated</span>
              <span className="text-[#AE9FFD] text-2xl">1025</span>
            </div>

            <div className="flex flex-col justify-center items-center px-14 py-4 bg-[#2F2F2F] border border-solid border-[#444C6A] rounded-[11px] gap-2">
              <span className="text-sm text-white text-center">Unique Users Verified</span>
              <span className="text-[#AE9FFD] text-2xl">103</span>
            </div>

            <div className="flex flex-col justify-center items-center px-14 py-4 bg-[#2F2F2F] border border-solid border-[#444C6A] rounded-[11px] gap-2">
              <span className="text-sm text-white">Providers</span>
              <span className="text-[#AE9FFD] text-2xl">15</span>
            </div>
          </div>
        </div>
      )}

      {showResults && (
        <div className="w-full p-6 mt-4">
          <h1 className="text-white mb-11">Discover borrowers</h1>
          <div className="border border-solid border-[#B5B8C4] rounded-[7px] w-full flex justify-between h-[47px] items-center mb-6">
            <input
              type="text"
              className="bg-transparent border-none focus:outline-none w-[680px] px-4 text-white"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  handleSearch();
                }
              }}
              
            />
          </div>
          <div className="flex flex-col items-center">
            <Borrower verifications={verifications} username={username || ''} address={searchAddress} termCount={termCount} aggregatedDeposits={formatEther(aggregatedDeposits.reduce((total, asset) => total + asset.assets, 0n))}  aggregatedLoans={formatEther(aggregatedLoans.reduce((total, asset) => total + asset.assets, 0n))}></Borrower>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
