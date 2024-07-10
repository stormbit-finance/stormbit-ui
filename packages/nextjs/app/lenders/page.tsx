"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import Button from "~~/components/Button/Button";
import LenderComponent from "~~/components/LenderComponent/LenderComponent";
import Loading from "~~/components/Loading/Loading";
import useAllTerms from "~~/hooks/gql/useAllTerms";

function Page() {
  const router = useRouter();
  const goCreateTerm = () => {
    router.push("/createTerms");
  };

  const [first, setFirst] = useState(10);
  const [skip, setSkip] = useState(0);
  const { terms, aggregatedData, loading, error, loadMore } = useAllTerms(first, skip);
  console.log(aggregatedData);
  return (
    <>
      <div className="pt-[100px] w-full p-16 bg-[#252525]">
        <div className="flex justify-between my-8">
          <span className="text-white text-2xl">Discover lenders</span>
          <Button onClick={goCreateTerm} backgroundColor="#D0C8FF">
            Create terms
          </Button>
        </div>
        <div className="rounded-[11px] w-full btn-transparent flex gap-5 my-6">
          <Image src="/coins.png" alt="coins" width={200} height={112}></Image>
          <div className="flex flex-col justify-center text-white">
            <span className="font-bold">Delegate your shares to lenders.</span>
            <span>By delegating your shares to lenders in terms, you can earn interest on your holdings.</span>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex items-center gap-4 w-full">
            <FaSearch className="absolute left-3 text-gray-400" />
            <input
              type="text"
              className="pl-10 pr-4 py-2 rounded-[8px] bg-transparent text-white focus:outline-none border border-[#B5B8C4] w-full"
              placeholder="Search lenders"
            />
          </div>
          <select className="bg-transparent text-white px-4 py-2 rounded-[8px] focus:outline-none border border-[#B5B8C4] w-[210px]">
            <option value="Latest">Latest</option>
            <option value="Popular">Popular</option>
            <option value="Total Loaned">Total Loaned</option>
            <option value="Supply APY">Supply APY</option>
          </select>
        </div>
        <div className="w-full flex flex-wrap gap-2 mt-4 justify-center items-center">
          {!aggregatedData && (
            <div className="text-white flex gap-4">
              Loading data <Loading />
            </div>
          )}
          {aggregatedData && aggregatedData.length <= 0 && <div className="text-white">No data</div>}
          {aggregatedData &&
            aggregatedData.length > 0 &&
            aggregatedData.map((item, index) => <LenderComponent term={item} key={index} />)}
        </div>
      </div>
    </>
  );
}

export default Page;
