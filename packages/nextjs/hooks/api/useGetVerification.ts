import { useQuery } from "@tanstack/react-query";
import { getVerifications } from "~~/utils/api/reclaim";

const useGetVerification = (address:string) => {
  return useQuery({
    queryKey: ["getVerifications", address],
    queryFn: async (): Promise<any> => {
      const res = await getVerifications(address);
      return res;
    },
    enabled: true,
    staleTime: 5000,
  });
};

export default useGetVerification;
