import React, { useEffect, useState } from "react";
import "./poolContents.css";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

interface Data {
  name: string;
  supply: number;
  borrow: number;
  usage: number;
}

const data: Data[] = [
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 12,
  },
];

function PoolContent() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {data.map(element => (
        <>
          <div className="w-[470px] flex flex-col gap-8 container-pool text-white">
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
  );
}

}

function PaginatedItems({ itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;


  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}


ReactDOM.render(<PaginatedItems itemsPerPage={4} />, document.getElementById("container"));
export default PoolContent;
