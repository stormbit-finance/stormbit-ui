"use client";

import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import Button from "~~/components/Button/Button";
import CreationModal from "~~/components/PoolCreationModal/CreationModal";
import Table from "~~/components/Table/table";

const BlockExplorer: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleSubmit = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <div className="flex flex-col gap-6 rounded-[5px] w-[1800px] h-[700px] bg-white p-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <Image src="/home.png" alt="home" width={24} height={24}></Image>
            </div>
            <span className="text-2xl text-[#4A5056] font-bold">/Markets</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <input placeholder="search pool name" className="px-4 py-2"></input>
            <Button
              onClick={() => {
                setIsModalOpen(true);
              }}
            >
              Create Pool
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <Table></Table>
        </div>
        {isModalOpen && <CreationModal setIsModalOpen={() => setIsModalOpen(false)}></CreationModal>}
      </div>
    </>
  );
};

export default BlockExplorer;
