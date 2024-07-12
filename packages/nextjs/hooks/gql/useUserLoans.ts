import { useQuery } from "@apollo/client";
import { USER_LOANS_AGGREGATE_QUERY } from "~~/utils/gql";
import { Loan } from "~~/utils/gql/types";

interface LoansQueryData {
  loans: Loan[];
}

const useUserLoans = (first: number, skip: number, address: string) => {
  const { loading, error, data, fetchMore } = useQuery<LoansQueryData>(USER_LOANS_AGGREGATE_QUERY(address || ""), {
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

export default useUserLoans;
