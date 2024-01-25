import type { NextPage } from "next";
import Tabla from "~~/components/Table/table";

const Portfolio: NextPage = () => {
  return (
    <>
      <div className="p-10 mt-8 text-center bg-secondary">
        <h1 className="my-0 text-4xl">Portfolio</h1>
        <div>
          <div>
            <button>My loans</button>
            <button>My pools</button>
            <button>Profile</button>
          </div>
          <div>
            <h1>My Pools</h1>
            <Tabla></Tabla>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
