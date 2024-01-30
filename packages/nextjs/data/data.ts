export interface Data {
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
    pool: "Cheap Local Lending",
    agreement: ["Base", "NFT", "FT"],
    date: "10-01-2024",
    amount: "$10.01",
    penalty: "11.8",
    interest: "11.8",
    status: "Pending",
  },
  {
    pool: "Cheap Local Lending",
    agreement: ["NFT"],
    date: "10-01-2024",
    amount: "$10.01",
    penalty: "11.8",
    interest: "11.8",
    status: "Active",
  },
  {
    pool: "Cheap Local Lending",
    agreement: ["Base", "FT"],
    date: "10-01-2024",
    amount: "$10.01",
    penalty: "11.8",
    interest: "11.8",
    status: "Rejected",
  },
];
