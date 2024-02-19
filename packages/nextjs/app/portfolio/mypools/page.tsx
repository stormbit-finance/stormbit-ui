"use client";

import { useEffect, useState } from "react";
import { formatUnits } from "viem";
import { Address, useAccount, useContractReads } from "wagmi";
import Cheap from "~~/components/Cheap/Cheap";
import { data } from "~~/data/data";
import { useScaffoldContract, useScaffoldContractRead } from "~~/hooks/scaffold-eth";

function MyPools() {
  const [showCheap, setShowCheap] = useState(false);
  const [poolList, setPoolList] = useState([] as any[]);
  const [selectedPool, setSelectedPool] = useState("");

  const account = useAccount();
  const { data: poolAddresses, isLoading: poolAddressesLoading } = useScaffoldContractRead({
    contractName: "StormBitCore",
    functionName: "getPools",
    watch: true,
  });

  const { data: LendingContract } = useScaffoldContract({
    contractName: "StormBitLending",
  });

  const { data: pools, isLoading: poolsLoading } = useContractReads({
    contracts:
      LendingContract && poolAddresses && account
        ? [
            ...poolAddresses.map(pool => {
              return {
                address: pool,
                abi: LendingContract.abi,
                functionName: "getPoolData",
              };
            }),
            ...poolAddresses.map(pool => {
              return {
                address: pool,
                abi: LendingContract.abi,
                functionName: "getVotingPower",
                args: [account.address as Address],
              };
            }),
          ]
        : [],
  });
  useEffect(() => {
    if (pools && pools.length > 0 && poolAddresses) {
      const poolLen = pools.length / 2;
      const poolsWithoutVotingPowerWithAddress = pools.slice(0, poolLen).map((pool, index) => {
        const poolAddr = poolAddresses?.[index];
        return {
          address: poolAddr || "",
          result: pool.result,
        };
      });
      const poolsWithVotingPower = pools.slice(poolLen);

      const poolsWithVotingPowerAndAddress = poolsWithoutVotingPowerWithAddress.map((pool, index) => {
        const votingPower = poolsWithVotingPower[index].result;
        return {
          votingPower,
          ...pool,
        };
      });
      const filteredPools = poolsWithVotingPowerAndAddress.filter(pool => {
        return (pool.votingPower as bigint) > BigInt(0);
      });

      setPoolList(
        filteredPools.map(pool => {
          const poolAddr = pool.address;
          const availableLiquidity: bigint = pool.result.totalSupplied - pool.result.totalBorrowed;
          const depositValue: bigint = (pool.votingPower * BigInt(pool.result.totalSupplied)) / BigInt(100);
          return {
            address: poolAddr || "",
            name: pool.result ? pool.result.name : "",
            availableLiquidity: availableLiquidity ? formatUnits(availableLiquidity, 18) : 0,
            votingPower: pool.votingPower,
            depositValue: depositValue ? formatUnits(depositValue, 18) : 0,
            // borrowedAPY: "0%",
            // suppliedAPY: "0%",
            totalBorrowed: pool.result ? formatUnits(pool.result.totalBorrowed, 18) : "0",
            totalSupplied: pool.result ? formatUnits(pool.result.totalSupplied, 18) : "0",
          };
        }),
      );
    }
  }, [pools]);

  const handleDetailsClick = (poolAddress: string) => {
    setSelectedPool(poolAddress);
    setShowCheap(true);
  };

  if (showCheap) {
    return <Cheap address={selectedPool} setShowCheap={setShowCheap} />;
  }

  return (
    <>
      <h1 className="text-4xl text-[#4A5056] font-bold">My pools</h1>
      <div className="w-[1200px] flex flex-col">
        <div className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
          <span className="w-[160px] text-center">Pool</span>
          <span className="w-[160px] text-center">Available liquidity</span>
          <span className="w-[160px] text-center">Deposit Value</span>
          <span className="w-[160px] text-center">Voting Power</span>
          <span className="w-[160px] text-center"></span>
        </div>
        {poolList.map(pool => (
          <div key={pool.name} className="flex gap-4 h-[95px] items-center p-8 border border-solid border-[#EAEBEF]">
            <p className="w-[160px] text-center">{pool.name}</p>
            <div className="w-[160px] text-center flex gap-1 items-center justify-center">
              <span className="">{pool.availableLiquidity}</span>
            </div>
            <p className="w-[160px] text-center">{pool.depositValue}</p>
            <p className="w-[160px] text-center">{formatUnits(pool.votingPower, 0)} %</p>
            <p className="w-[160px] text-center"></p>
            <button
              onClick={() => {
                handleDetailsClick(pool.address);
              }}
              className="border border-solid border-[#4A5056] rounded-[7px] py-4 px-10"
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyPools;
