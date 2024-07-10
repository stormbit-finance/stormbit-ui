import { useQuery } from "@apollo/client";
import { ALL_LOANS_QUERY } from "~~/utils/gql";
import { Loan } from "~~/utils/gql/types";

interface LoansQueryData {
  loans: Loan[];
}

const useAllLoans = (first: number, skip: number) => {
  const { loading, error, data, fetchMore } = useQuery<LoansQueryData>(ALL_LOANS_QUERY, {
    variables: { first, skip },
    pollInterval: 3000, // Poll every 3 seconds
    notifyOnNetworkStatusChange: true,
  });

  const loadMore = () => {
    fetchMore({
      variables: {
        skip: data ? data.loans.length : skip,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) return previousResult;
        return {
          loans: [...previousResult.loans, ...fetchMoreResult.loans],
        };
      },
    });
  };

  return {
    loans: data ? data.loans : [],
    loading,
    error,
    loadMore,
  };
};

export default useAllLoans;
