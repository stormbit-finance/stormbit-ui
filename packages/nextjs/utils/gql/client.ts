import { ApolloClient, InMemoryCache } from "@apollo/client";

export function getGraphClient(chainId: number) {
  if (chainId === 421614) {
    return new ApolloClient({
      uri: `https://api.studio.thegraph.com/query/22143/stormbit-arbitrum-sepolia/version/latest`,
      cache: new InMemoryCache(),
    });
  }
  return new ApolloClient({
    uri: `https://api.studio.thegraph.com/query/22143/stormbit-arbitrum-sepolia/version/latest`,
    cache: new InMemoryCache(),
  });
}
