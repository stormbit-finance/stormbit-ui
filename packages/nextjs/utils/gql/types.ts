export interface User {
  id: string;
  username: string;
  terms: { id: string }[];
}

export interface Term {
  id: string;
  lender: User;
  comission: string;
  assetBalances: TermAssetBalance[];
  loanBalances: TermLoanBalance[];
}

export interface Asset {
  id: string;
  vault: string;
  createdAt: string;
  totalShares: string;
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

export interface TermAssetBalance {
  id: string;
  term: Term;
  asset: Asset;
  shares: string;
}

export interface TermLoanBalance {
  id: string;
  term: Term;
  loan: Loan;
  assets: string;
}

export interface Loan {
  id: string;
  borrower: User;
  token: Asset;
  assets: string;
  repayAssets: string;
  deadlineAllocate: string;
}
