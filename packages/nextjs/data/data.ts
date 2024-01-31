export interface Data {
  id: string;
  pool: string;
  agreement: string[];
  date: string;
  amount: string;
  penalty: string;
  interest: string;
  status: string;
}

export const data: Data[] = [
  {
    id: "1",
    pool: "Cheap Local Lending",
    agreement: ["Base", "NFT", "FT"],
    date: "10-01-2024",
    amount: "$10.01",
    penalty: "11.8",
    interest: "11.8",
    status: "Pending",
  },
  {
    id: "2",
    pool: "Cheap Local Lending",
    agreement: ["NFT"],
    date: "10-01-2024",
    amount: "$10.01",
    penalty: "11.8",
    interest: "11.8",
    status: "Active",
  },
  {
    id: "3",
    pool: "Cheap Local Lending",
    agreement: ["Base", "FT"],
    date: "10-01-2024",
    amount: "$10.01",
    penalty: "11.8",
    interest: "11.8",
    status: "Rejected",
  },
];
