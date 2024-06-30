// import { useGraphClient } from "~~/hooks/gql";
import { useQuery } from "@apollo/client";
import { USERNAME_QUERY } from "~~/utils/gql";

const useUsername = (address: string | undefined) => {
  const { loading, error, data } = useQuery(USERNAME_QUERY(address || ""), {
    pollInterval: 3000,
  });

  return {
    username: data?.user.username,
    loading,
    error,
  };
};

export default useUsername;
