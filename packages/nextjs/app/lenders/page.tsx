"use client";

import React from "react";
import LenderComponent from "~~/components/LenderComponent/LenderComponent";

function Page() {

  return (
    <div className="w-full p-16">
      <span className="text-white text-2xl">Discover lenders</span>
      <div className="w-full flex flex-wrap gap-4 mt-4">
      <LenderComponent></LenderComponent>
      </div>
    </div>
  );
}

export default Page;
