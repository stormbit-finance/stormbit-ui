import { useQuery } from "@apollo/client";
import { USER_TERM_DEPOSIT_AGGREGATE_QUERY } from "~~/utils/gql";
import { UserAssetBalance, UserTermAssetBalance } from "~~/utils/gql/types";

interface UserTermDepositAggregateQueryData {
  userTermAssetBalances: Partial<UserTermAssetBalance>[];
  userAssetBalances: Partial<UserAssetBalance>[];
}

const useUserTermDepositAggregate = (address: string | undefined) => {
  const { loading, error, data } = useQuery<UserTermDepositAggregateQueryData>(
    USER_TERM_DEPOSIT_AGGREGATE_QUERY(address || ""),
    {
      pollInterval: 3000,
    },
  );

  const aggregateDeposits = (
    userTermAssetBalances: Partial<UserTermAssetBalance>[],
    userAssetBalances: Partial<UserAssetBalance>[],
  ) => {
    const assetBalanceMap = userAssetBalances.reduce((acc: any, balance: Partial<UserAssetBalance>) => {
      const token = balance.asset?.id;
      if (token) {
        acc[token] = balance;
      }
      return acc;
    }, {});

    const aggregated = userTermAssetBalances.reduce((acc: any, termDeposit: Partial<UserTermAssetBalance>) => {
      const token = termDeposit.asset?.id;
      const userAssetBalance = token ? assetBalanceMap[token] : undefined;
      if (userAssetBalance && userAssetBalance.shares && BigInt(userAssetBalance.shares) > 0) {
        const assetValue =
          (BigInt(termDeposit.shares || 0) * BigInt(userAssetBalance.assets || 0)) / BigInt(userAssetBalance.shares);
        if (token) {
          if (!acc[token]) {
            acc[token] = BigInt(0);
          }
          acc[token] += assetValue;
        }
      }
      return acc;
    }, {});

    return Object.keys(aggregated).map(token => ({
      token,
      assets: aggregated[token],
    }));
  };

  const aggregatedData = data ? aggregateDeposits(data.userTermAssetBalances, data.userAssetBalances) : [];

  return {
    aggregatedDeposits: aggregatedData,
    loading,
    error,
  };
};

export default useUserTermDepositAggregate;
