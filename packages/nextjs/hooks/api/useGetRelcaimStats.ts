import { useQuery } from "@tanstack/react-query";
import { getReclaimStats } from "~~/utils/api/reclaim";
import { reclaimStats } from "~~/utils/api/types";

const useGetReclaimStats = () => {
  return useQuery({
    queryKey: ["reclaimStats"],
    queryFn: async (): Promise<reclaimStats | undefined> => {
      const res = await getReclaimStats();
      return res;
    },
    enabled: true,
    staleTime: 5000,
  });
};

export default useGetReclaimStats;
