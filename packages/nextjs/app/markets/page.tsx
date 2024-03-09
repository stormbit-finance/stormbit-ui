"use client";

import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { FiSearch } from "react-icons/fi";
import Button from "~~/components/Button/Button";
import PoolContent from "~~/components/PoolContent/PoolContent";
import CreationModal from "~~/components/PoolCreationModal/CreationModal";
import Table from "~~/components/Table/table";

const BlockExplorer: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-6 bg-[#070817] w-screen h-screen p-10">
        <div className="flex justify-end">
          <div className="flex items-center justify-center gap-2">
            <div className="flex rounded-[5px] border border-solid border-[#933CF5] px-4 justify-center items-center">
              <span className="text-white pr-2 border-e border-[#3A3B4B]">%</span>
              <input
                placeholder="Search pool Usage"
                className="px-4 py-2 bg-transparent border-none focus:outline-none"
              ></input>
              <FiSearch></FiSearch>
            </div>
            <Button
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Create Pool
            </Button>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          {/* <Table></Table> */}
          <PoolContent></PoolContent>
        </div>
        {isModalOpen && <CreationModal setIsModalOpen={() => setIsModalOpen(false)}></CreationModal>}
      </div>
    </>
  );
};

export default BlockExplorer;
