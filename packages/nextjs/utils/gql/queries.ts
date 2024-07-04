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

export const USER_LOANS_AGGREGATE_QUERY = (address: string) => {
  return gql`
    query {
      loans(where: { borrower: "${address.toLowerCase()}" }) {
        id
        assets
        repayAssets
        token {
          id
        }
      }
    }
  `;
};

export const USER_TERM_DEPOSIT_AGGREGATE_QUERY = (address: string) => {
  return gql`
    query {
      userTermAssetBalances(where: { user: "${address.toLowerCase()}" }) {
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
