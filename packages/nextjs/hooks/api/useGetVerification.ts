import { useQuery } from "@tanstack/react-query";
import { getVerifications } from "~~/utils/api/reclaim";
import { verifications } from "~~/utils/api/types";

const useGetVerification = (address: string) => {
  return useQuery({
    queryKey: ["getVerifications", address],
    queryFn: async (): Promise<verifications> => {
      const res = await getVerifications(address);
      return res;
    },
    enabled: true,
    staleTime: 5000,
  });
};

export default useGetVerification;
