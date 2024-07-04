import { useQuery } from "@tanstack/react-query";
import { supportedProvider } from "~~/types/Provider";
import { getSupportedProvider } from "~~/utils/api/reclaim";

const useSupportedProvider = () => {
  return useQuery({
    queryKey: ["supportedProvider"],
    queryFn: async (): Promise<supportedProvider | undefined> => {
      const res = await getSupportedProvider();
      return res;
    },
    enabled: true,
    staleTime: 5000,
  });
};

export default useSupportedProvider;
