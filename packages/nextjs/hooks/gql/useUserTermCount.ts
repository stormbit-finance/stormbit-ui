import { useQuery } from "@apollo/client";
import { USER_TERM_COUNT_QUERY } from "~~/utils/gql";
import { User } from "~~/utils/gql/types";

interface UserTermsQueryData {
  user: Partial<Pick<User, "id" | "terms">>;
}

const useUserTermCount = (address: string | undefined) => {
  const { loading, error, data } = useQuery<UserTermsQueryData>(USER_TERM_COUNT_QUERY(address || ""), {
    pollInterval: 3000,
  });

  const termCount = data ? data.user.terms?.length || 0 : 0;

  return {
    termCount,
    loading,
    error,
  };
};

export default useUserTermCount;
