import React from "react";

interface TablaProps {
  data: Array<Array<string>>;
}

const Tabla: React.FC<TablaProps> = ({ data }) => {
  return (
    <table className="w-[1600px] border border-solid border-[#EAEBEF]">
      <thead>
        <tr>
          {Array.from({ length: 6 }, (_, index) => (
            <th key={index} className="text-base text-center text-[#4A5056] font-normal">
              Columna{" "}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((fila, rowIndex) => (
          <tr key={rowIndex} className="border border-solid border-[#EAEBEF]">
            {fila.map((dato, colIndex) => (
              <td key={colIndex} className="text-base text-center text-[#4A5056]">
                {dato}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
