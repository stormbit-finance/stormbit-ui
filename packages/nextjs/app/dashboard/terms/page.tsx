"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import TermBox from "~~/components/TermBox/TermBox";
import useUserTermDepositAggregateAssets from "~~/hooks/gql/useUserTermDepositAggregateAssets";

const Page = () => {
  const account = useAccount();
  const { terms } = useUserTermDepositAggregateAssets(account.address);
  const router = useRouter();
  const pathname = usePathname();
  const goCreateTerm = () => {
    router.push("/createTerms");
  };
  const isManagePage = pathname.includes("manage");
  const filteredTerms = terms?.filter(item => {
    return item.term?.lender.id === account.address;
  });
  return (
    <div className="">
      {!terms ||
        (terms.length === 0 && (
          <div className="pt-[10%] flex justify-center items-center  flex-col">
            <p className="text-xl">No Terms Here</p>
            <button onClick={goCreateTerm} className="bg-[#D0C8FF] text-black px-12 py-2">
              Create Terms
            </button>
          </div>
        ))}
      {isManagePage && (
        <div className="pt-10 flex flex-col items-center">
          {filteredTerms &&
            filteredTerms.length > 0 &&
            filteredTerms.map((item, index) => {
              return <TermBox key={index} termId={item?.term?.id || ""}></TermBox>;
            })}
        </div>
      )}
      {terms && terms.length > 0 && isManagePage && (!filteredTerms || filteredTerms.length <= 0) && (
        <div className="pt-[10%]  text-[#A8B1C8] text-center">No data here</div>
      )}
      {terms && terms.length > 0 && !isManagePage && (
        <div className="pt-10 flex flex-col items-center">
          {terms &&
            terms.length > 0 &&
            terms.map((item, index) => {
              return <TermBox key={index} termId={item?.term?.id || ""}></TermBox>;
            })}
        </div>
      )}
      {terms && terms.length > 0 && !isManagePage && (!terms || terms.length <= 0) && (
        <div className="pt-[10%]  text-[#A8B1C8] text-center">No data here</div>
      )}
    </div>
  );
};

export default Page;
