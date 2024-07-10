import { useQuery } from "@apollo/client";
import { USER_LOANS_AGGREGATE_QUERY } from "~~/utils/gql";
import { Loan } from "~~/utils/gql/types";

interface UserLoansQueryData {
  loans: Partial<Loan>[];
}

const useUserLoansAggregate = (address: string | undefined) => {
  const { loading, error, data } = useQuery<UserLoansQueryData>(USER_LOANS_AGGREGATE_QUERY(address || ""), {
    pollInterval: 3000,
    notifyOnNetworkStatusChange: true,
  });

  const aggregateLoans = (loans: Partial<Loan>[]) => {
    const aggregated = loans.reduce((acc: any, loan: Partial<Loan>) => {
      if (loan.repayAssets && BigInt(loan.repayAssets) > 0) {
        const token = loan.token?.id;
        if (token) {
          if (!acc[token]) {
            acc[token] = BigInt(0);
          }
          acc[token] += BigInt(loan.assets || 0);
        }
      }
      return acc;
    }, {});

    return Object.keys(aggregated).map(token => ({
      token,
      assets: aggregated[token],
    }));
  };

  const aggregatedData = data ? aggregateLoans(data.loans) : [];

  return {
    aggregatedLoans: aggregatedData,
    loading,
    error,
  };
};

export default useUserLoansAggregate;
