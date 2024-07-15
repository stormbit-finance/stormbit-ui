import { gql } from "@apollo/client";

export const USERNAME_QUERY = (address: string) => {
  return gql`
    query {
      user(id: "${address.toLowerCase()}") {
        id
        username
      }
    }
  `;
};
export const USER_ASSET_BALANCE_QUERY = (address: string) => {
  return gql`
  query {
    userAssetBalances( where:{user: "${address.toLowerCase()}"}) {
      asset{
        id
      }
      assets
      shares
    }
  }
`;
};
export const USER_LOANS_AGGREGATE_QUERY = (address: string) => {
  return gql`
    query {
      loans(where: { borrower: "${address.toLowerCase()}" }) {
        id
        borrower {
          id
          username
        }
        token {
          id
        }
        assets
        repayAssets
        deadlineAllocate
       
      }
    }
  `;
};
export const USER_LOANS_QUERY = (address: string) => {
  return gql`
  query {
    loans(where: { borrower: "${address.toLowerCase()}" }) {
      assets
      repayAssets
      deadlineAllocate
     
    }
  }
`;
};
export const TERM_QUERY = (id: string, address: string) => {
  return gql`
    query {
      term(id: "${id}"){
        id
        lender {
          id
          username
        }
        comission
        assetBalances {
          id
          asset {
            id
            vault
            createdAt
            totalShares
          }
          shares
        }
        loanBalances {
          assets
        }
      }

      userTermAssetBalances(where:{ term: "${id}"}) {
        user {
          id
          username
        }
        shares
        asset {
          id
        }
      }
      userAssetBalances(where: { user:"${address.toLowerCase()}" }) {
        user {
          username
        }
        shares
        assets
        asset {
          id
          totalShares
        }
      }
    }
  `;
};

export const USER_TERM_DEPOSIT_AGGREGATE_QUERY = (address: string) => {
  return gql`
    query {
      userTermAssetBalances(where: { user: "${address.toLowerCase()}" }) {
        term{
          id
          lender{
            id
          }
        }
        shares
        asset {
          id
        }
      }
      userAssetBalances(where: { user: "${address.toLowerCase()}" }) {
        shares
        assets
        asset {
          id
        }
      }
    }
  `;
};

export const USER_TERM_COUNT_QUERY = (address: string) => {
  return gql`
      query {
        user(id: "${address.toLowerCase()}") {
          id
          terms {
            id
          }
        }
      }
    `;
};

export const ADDRESS_BY_USERNAME_QUERY = (username: string) => {
  return gql`
      query {
        users(where: { username: "${username}" }) {
          id
        }
      }
    `;
};

export const ALL_LOANS_QUERY = gql`
  query GetLoans($first: Int!, $skip: Int!) {
    loans(first: $first, skip: $skip) {
      id
      borrower {
        id
        username
      }
      token {
        id
        vault
        createdAt
      }
      assets
      repayAssets
      deadlineAllocate
    }
  }
`;

export const ALL_TERMS_QUERY = gql`
  query GetTerms($first: Int!, $skip: Int!) {
    terms(first: $first, skip: $skip) {
      id
      lender {
        id
        username
      }
      comission
      assetBalances {
        id
        asset {
          id
          vault
          createdAt
          totalShares
        }
        shares
      }
      loanBalances {
        id
        loan {
          id
          token {
            id
            vault
            createdAt
          }
          assets
        }
        assets
      }
    }
  }
`;
