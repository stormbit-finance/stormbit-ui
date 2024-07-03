interface Data {
  name: string;
  supply: number;
  borrow: number;
  usage: number;
}

export const data: Data[] = [
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 80,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 19,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 15,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 17,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 18,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 10,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 11,
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
    usage: 11,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 13,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 14,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 15,
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
    usage: 11,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 13,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 14,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 15,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 70,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 11,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 13,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 14,
  },
  {
    name: "Community Credit Pool",
    supply: 20,
    borrow: 2,
    usage: 15,
  },
];
export const dataExtension = [
  {
    name: "Morpho Blue",
    description: "Permissionless Lending Protocol",
    icon: "/image13.png",
  },
  {
    name: "Captain Hooks",
    description: "Custom UniswapV4 Pools",
    icon: "/image12.png",
  },
  {
    name: "Futaba",
    description: "On-chain data acquisition for all chains",
    icon: "/futaba.png",
  },
];

export const dataTechnology = [
  {
    name: "Customizable Agreements",
    description:
      "Tailor your lending experience with flexible, user-defined loan agreements to fit diverse financial needs.",
    icon: "/custom.png",
  },
  {
    name: "Dynamic Governance Allocation",
    description: "Enhance trust and transparency through community-driven, decentralized loan approval processes. ",
    icon: "/bank.png",
  },
  {
    name: "Advanced Timelock Protocols",
    description:
      "Secure transactions with a built-in delay between loan approval and execution, safeguarding all parties involved.",
    icon: "/Notifications.png",
  },
  {
    name: "Interoperable Token Vaults",
    description:
      "Optimize returns with seamlessly integrated token vaults, supporting a variety of assets and strategies for maximum capital efficiency",
    icon: "/home1.png",
  },
  {
    name: "Blockchain-Optimized Smart Contracts",
    description:
      "Utilize efficient and secure smart contracts designed for minimal gas fees and maximized transaction speed.",
    icon: "/Security.png",
  },
  {
    name: "Token-Gated Communication Hub",
    description:
      " Foster direct lender-borrower relationships with a secure, token-gated messaging platform for enhanced trust and transparency.",
    icon: "/Chat.png",
  },
];

export const dataMetrics = [
  {
    name: "Market Size",
    description: "91M",
  },
  {
    name: "Total Value Locked",
    description: "52.1M",
  },
  {
    name: "Unique Active Addresses",
    description: "249.7K",
  },
];

export const options = [
  { value: "borrow", label: "Borrow" },
  { value: "repay", label: "Repay" },
];
export const optionsType = [
  { value: "bussines", label: "Bussines" },
  { value: "personal", label: "Personal" },
];

export const optionsPayment = [
  { value: "month", label: "Month" },
  { value: "week", label: "Week" },
  { value: "day", label: "Day" },
];

interface Lender {
  avatar: string;
  address: string;
}

export const lenders: Lender[] = [
  {
    avatar: "/avatar1.png",
    address: "0x70997...c79C8",
  },
  {
    avatar: "/avatar2.png",
    address: "0x70997...c79C8",
  },
  {
    avatar: "/avatar1.png",
    address: "0x70997...c79C8",
  },
  {
    avatar: "/avatar2.png",
    address: "0x70997...c79C8",
  },
];

export const dataCharts = [
  { name: "0x70997...c79C8", avatar: "/avatar2.png", size: 200 },
  { name: "0x70997...c79C8", avatar: "/avatar1.png", size: 150 },
  { name: "0x70997...c79C8", avatar: "/avatar2.png", size: 50 },
  { name: "0x70997...c79C8", avatar: "/avatar1.png", size: 50 },
  { name: "0x70997...c79C8", avatar: "/avatar2.png", size: 50 },
  { name: "0x70997...c79C8", avatar: "/avatar1.png", size: 20 },
  { name: "0x70997...c79C8", avatar: "/avatar2.png", size: 30 },
  { name: "0x70997...c79C8", avatar: "/avatar2.png", size: 10 },
  { name: "0x70997...c79C8", avatar: "/avatar1.png", size: 30 },
  { name: "0x70997...c79C8", avatar: "/avatar2.png", size: 5 },
];

export const poolDataSummary = [
  {
    title: "EduFunds Pool",
    date: "15 March 2024 20:18PM",
    debtTotal: "$2.03K",
    repaidTotal: "$2.03K",
    toPayTotal: "$2.03K",
  },
  {
    title: "EduFunds Pool",
    date: "15 March 2024 20:18PM",
    debtTotal: "$2.03K",
    repaidTotal: "$2.03K",
    toPayTotal: "$2.03K",
  },
  {
    title: "EduFunds Pool",
    date: "15 March 2024 20:18PM",
    debtTotal: "$2.03K",
    repaidTotal: "$2.03K",
    toPayTotal: "$2.03K",
  },
];

export const messagesInbox = [
  {
    id: 1,
    profileImage: "/icon_profile.svg",
    poolName: "EduFunds Pool",
    message: "Hi how to deposit in this pool?",
    time: "Today, 9.52pm",
    unreadCount: 4,
  },
  {
    id: 1,
    profileImage: "/icon_profile.svg",
    poolName: "EduFunds Pool",
    message: "Hi how to deposit in this pool?",
    time: "Today, 9.52pm",
    unreadCount: 5,
  },
  {
    id: 1,
    profileImage: "/icon_profile.svg",
    poolName: "EduFunds Pool",
    message: "Hi how to deposit in this pool?",
    time: "Today, 9.52pm",
    unreadCount: 6,
  },
];

export const loans = [
  {
    name: "Loan Request XXX",
    time: "3 days 0 hrs",
  },
  {
    name: "Loan Request XXX",
    time: "3 days 0 hrs",
  },
];

export const borrower = [
  {
    name: "Ryan Modesto",
    addres: "0x2B7E...c79DC",
    loans: "$ 9,099.00",
    deposited: "$ 9,099.00",
    terms: "10",
    verified: "20",
    proof: "2 days",
    score: "70",
  },
  {
    name: "Gyan Modesto",
    addres: "0x2B7E...c79DC",
    loans: "$ 9,099.00",
    deposited: "$ 9,099.00",
    terms: "10",
    verified: "20",
    proof: "2 days",
    score: "70",
  },
  {
    name: "Fyan Modesto",
    addres: "0x2B7E...c79DC",
    loans: "$ 9,099.00",
    deposited: "$ 9,099.00",
    terms: "10",
    verified: "20",
    proof: "2 days",
    score: "70",
  },
];

interface Transaction {
  type: string;
  amount: string;
  description: string;
  interestRate?: string;
}

interface UserData {
  username: string;
  currentBalance: string;
  totalShares: string;
  totalDeposited: string;
  totalEarnings: string;
  earningsPercentage: string;
  transactions: Transaction[];
}

export const userData: UserData = {
  username: "yixuan.stormbit",
  currentBalance: "12,608.00",
  totalShares: "9,099.00",
  totalDeposited: "9,099.00",
  totalEarnings: "300.76",
  earningsPercentage: "10.00",
  transactions: [
    {
      type: "Requested Loans",
      amount: "1,000.00",
      description: "Requested a loan of $1,000.00",
    },
    {
      type: "Withdraw",
      amount: "1,000.00",
      description: "Withdrew $1,000.00",
    },
    {
      type: "Deposited Fund",
      amount: "1,000.00",
      interestRate: "4%",
      description: "Deposited $1,000.00 with a 4% interest rate",
    },

  ],
};
