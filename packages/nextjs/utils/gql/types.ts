export interface User {
  id: string;
  username: string;
  terms: { id: string }[];
}

export interface Term {
  id: string;
  lender: User;
  comission: string;
}

export interface Asset {
  id: string;
  vault: string;
  createdAt: string;
}

export interface UserAssetBalance {
  id: string;
  user: User;
  asset: Asset;
  assets: string;
  shares: string;
}

export interface UserTermAssetBalance {
  id: string;
  user: User;
  term: Term;
  asset: Asset;
  shares: string;
}

export interface Loan {
  id: string;
  borrower: User;
  token: Asset;
  assets: string;
  repayAssets: string;
  deadlineAllocate: string;
}
