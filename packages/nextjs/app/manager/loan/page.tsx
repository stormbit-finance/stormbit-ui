import Button from "~~/components/Button/Button";

function Page() {
  const data = [
    {
      name: "Loan Request XXX",
      value: "$ 19.52k",
      amount: "19.7877",
      date: "03 March 2024",
      button: <Button>Approved</Button>,
    },
    {
      name: "Loan Request XXX",
      value: "$ 19.52k",
      amount: "19.7877",
      date: "03 March 2024",
      button: <Button>Approved</Button>,
    },
    {
      name: "Loan Request XXX",
      value: "$ 19.52k",
      amount: "19.7877",
      date: "03 March 2024",
      button: <Button>Approved</Button>,
    },
  ];
  return (
    <div className="max-w-[1200px] w-full px-12 flex flex-col gap-9">
      <h3 className="text-3xl text-white">Loan Request</h3>
      <table className="text-xl container-total">
        <thead>
          <tr className="border-[#374B6D] border-b">
            <th className="p-10">Loan Request</th>
            <th className="p-10">Value</th>
            <th className="p-10">Amount</th>
            <th className="p-10">Submitted</th>
            <th className="p-10"></th>
          </tr>
        </thead>
        <tbody className="h-fit">
          {data.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="p-10">{row.name}</td>
              <td className="p-10">{row.value}</td>
              <td className="p-10">{row.amount}</td>
              <td className="p-10">{row.date}</td>
              <td className="p-10">{row.button}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
