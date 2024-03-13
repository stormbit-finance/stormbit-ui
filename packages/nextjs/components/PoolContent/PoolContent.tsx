import React from "react";
import { useState } from "react";
import "./poolContents.css";
import { Button, Pagination } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";
import { data } from "~~/data/data";

export default function PoolContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const currentPageData = data.slice(startIndex, endIndex);
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {currentPageData.map((element, index) => (
          <>
            <div key={index} className="w-[470px] flex flex-col gap-8 container-pool text-white">
              <CircularProgress size="lg" value={element.usage} color="secondary" showValueLabel={true} />
              <div className="flex flex-col items-center justify-center usage">
                <span className="text-2xl">{element.usage}%</span>
                <span className="text-sm">usage</span>
              </div>
              <span className="text-2xl pl-14">{element.name}</span>
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center justify-center gap-6 py-3 pr-20 border-e">
                  <span className="text-lg">Supply APY</span>
                  <span className="text-4xl">{element.supply}%</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-6 py-3 pl-20">
                  <span className="text-lg">Borrow APY</span>
                  <span className="text-4xl">{element.borrow}%</span>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="flex gap-2 text-lg text-white">
        <Button
          size="md"
          variant="light"
          color="secondary"
          onPress={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))}
        >
          Prev
        </Button>
        <Pagination
          total={Math.ceil(data.length / itemsPerPage)}
          color="secondary"
          page={currentPage}
          onChange={setCurrentPage}
        />
        <Button
          size="md"
          variant="flat"
          color="secondary"
          onPress={() => setCurrentPage(prev => (prev < Math.ceil(data.length / itemsPerPage) ? prev + 1 : prev))}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
