import { useQuery } from "@tanstack/react-query";
import { getSupportedProvider } from "~~/utils/api/reclaim";
import { supportedProvider } from "~~/utils/api/types";

const useGetSupportedProvider = () => {
  return useQuery({
    queryKey: ["supportedProvider"],
    queryFn: async (): Promise<supportedProvider[] | undefined> => {
      const res = await getSupportedProvider();
      return res;
    },
    enabled: true,
    staleTime: 5000,
  });
};

export default useGetSupportedProvider;
