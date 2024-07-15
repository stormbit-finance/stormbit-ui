import { useQuery } from "@apollo/client";
import { USER_ASSET_BALANCE_QUERY } from "~~/utils/gql";
import { UserAssetBalance } from "~~/utils/gql/types";

interface UserAssetBalanceQueryData {
  assetBalance: Partial<UserAssetBalance>;
}

const useUserAssetBalance = (address: string | undefined) => {
  const { loading, error, data } = useQuery<UserAssetBalanceQueryData>(USER_ASSET_BALANCE_QUERY(address || ""), {
    pollInterval: 3000,
    notifyOnNetworkStatusChange: true,
  });

  return {
    assetBalance: data?.assetBalance,
    loading,
    error,
  };
};

export default useUserAssetBalance;
