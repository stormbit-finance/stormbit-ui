import { useQuery } from "@apollo/client";
import { formatEther } from "viem";
import { USER_TERM_DEPOSIT_AGGREGATE_QUERY } from "~~/utils/gql";
import { UserAssetBalance, UserTermAssetBalance } from "~~/utils/gql/types";

interface UserTermDepositAggregateQueryData {
  userTermAssetBalances: Partial<UserTermAssetBalance>[];
  userAssetBalances: Partial<UserAssetBalance>[];
}

const useUserTermDepositAggregateAssets = (address: string | undefined) => {
  const { loading, error, data } = useQuery<UserTermDepositAggregateQueryData>(
    USER_TERM_DEPOSIT_AGGREGATE_QUERY(address || ""),
    {
      pollInterval: 3000,
      notifyOnNetworkStatusChange: true,
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

  const aggregatedDepositAsset = data ? aggregateDeposits(data.userTermAssetBalances, data.userAssetBalances) : [];
  const totalDeposit = parseFloat(
    formatEther(aggregatedDepositAsset.reduce((total, asset) => total + asset.assets, 0n)),
  ).toFixed(2);
  return {
    terms: data?.userTermAssetBalances,
    aggregatedDepositAsset,
    totalDeposit,
    loading,
    error,
  };
};

export default useUserTermDepositAggregateAssets;
