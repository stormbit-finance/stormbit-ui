"use client";

import React from "react";
import { useState } from "react";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { FaShareSquare } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function App() {
  const [page, setPage] = useState(1);

  const allDataArray = [
    { name: "Luke Skywalker", height: "172", mass: "77", birth_year: "19BBY", icon: <FaShareSquare /> },
    { name: "Darth Vader", height: "202", mass: "136", birth_year: "41.9BBY", icon: <FaShareSquare /> },
    { name: "Leia Organa", height: "150", mass: "49", birth_year: "19BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
    { name: "Han Solo", height: "180", mass: "80", birth_year: "29BBY", icon: <FaShareSquare /> },
  ];

  const perPage = 4;
  const visibleDataArray = allDataArray.slice(0, perPage * page);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const hasMore = perPage * page < allDataArray.length;

  return (
    <table
      aria-label="Example table with client side sorting"
      bottomContent={
        hasMore ? (
          <div className="flex justify-center w-full bg-transparent border-t-1 border-[#374B6D] pt-5">
            <Button variant="flat" onPress={handleLoadMore} style={{ background: "transparent", color: "#FFFF" }}>
              Load More
              <IoIosArrowDown />
            </Button>
          </div>
        ) : null
      }
      classNames={{
        base: "max-h-[420px] container-total text-white base-classes",
        table: "min-h-[420px] bg-transparent table-classes ",
        thead: "thead-classes bg-transparent border-b-1 border-[#374B6D] relative",
        tbody: "tbody-classes bg-transparent",
        tr: "tr-classes bg-transparent",
        th: "th-classes bg-transparent text-white",
        td: "td-classes",
        tfoot: "tfoot-classes",
        sortIcon: "sort-icon-classes",
        emptyWrapper: "empty-wrapper-classes bg-transparent",
        loadingWrapper: "bg-transparent",
        wrapper: "bg-transparent overflow-none px-10",
      }}
    >
      <TableHeader>
        <TableColumn key="name">Action</TableColumn>
        <TableColumn key="height">Lender</TableColumn>
        <TableColumn key="mass">Amount</TableColumn>
        <TableColumn key="birth_year">Created</TableColumn>
        <TableColumn key="icon"> </TableColumn>
      </TableHeader>
      <TableBody>
        {visibleDataArray.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.height}</TableCell>
            <TableCell>{item.mass}</TableCell>
            <TableCell>{item.birth_year}</TableCell>
            <TableCell>{item.icon}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </table>
  );
}
