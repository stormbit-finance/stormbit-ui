import { useQuery } from "@apollo/client";
import { ALL_TERMS_QUERY } from "~~/utils/gql";
import { Term, TermAssetBalance, TermLoanBalance } from "~~/utils/gql/types";

interface TermsQueryData {
  terms: Term[];
}

interface TermsQueryVars {
  first: number;
  skip: number;
}

const useAllTerms = (first: number, skip: number) => {
  const { loading, error, data, fetchMore } = useQuery<TermsQueryData, TermsQueryVars>(ALL_TERMS_QUERY, {
    variables: { first, skip },
    pollInterval: 3000, // Poll every 3 seconds
    notifyOnNetworkStatusChange: true,
  });

  const aggregateData = (terms: Term[]) => {
    return terms.map(term => {
      const totalDeposit = term.assetBalances.reduce((acc: bigint, balance: TermAssetBalance) => {
        const totalShares = BigInt(balance.asset.totalShares || 0);
        if (totalShares > 0) {
          const assetValue = (BigInt(balance.shares || 0) * BigInt(balance.asset.totalShares || 0)) / totalShares;
          return acc + assetValue;
        }
        return acc;
      }, BigInt(0));

      const totalLoaned = term.loanBalances.reduce((acc: bigint, balance: TermLoanBalance) => {
        return acc + BigInt(balance.assets);
      }, BigInt(0));

      return {
        id: term.id,
        comission: term.comission,
        total_deposit: totalDeposit,
        total_loaned: totalLoaned,
        owner: term.lender.username,
      };
    });
  };

  const aggregatedData = data ? aggregateData(data.terms) : [];

  const loadMore = () => {
    fetchMore({
      variables: {
        skip: data ? data.terms.length : skip,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        return {
          terms: [...previousResult.terms, ...fetchMoreResult.terms],
        };
      },
    });
  };

  return {
    terms: data ? data.terms : [],
    aggregatedData,
    loading,
    error,
    loadMore,
  };
};

export default useAllTerms;
