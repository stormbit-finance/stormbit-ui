import { useEffect, useState } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { useChainId } from "wagmi";
import { getGraphClient } from "~~/utils/gql/client";

export const useGraphClient = () => {
  const chainId = useChainId();
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    if (chainId) {
      setClient(getGraphClient(chainId));
    }
  }, [chainId]);

  return client;
};
