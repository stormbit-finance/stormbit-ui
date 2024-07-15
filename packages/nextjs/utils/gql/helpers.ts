import { ApolloClient } from "@apollo/client";
import { ADDRESS_BY_USERNAME_QUERY } from "~~/utils/gql";
import { getGraphClient } from "~~/utils/gql";

export const getAddressByUsername = async (username: string, chainId: number): Promise<string | undefined> => {
  const client: ApolloClient<any> = getGraphClient(chainId);
  try {
    const { data } = await client.query({
      query: ADDRESS_BY_USERNAME_QUERY(username),
    });

    const users = data.users;

    if (users.length > 0) {
      return users[0].id;
    }

    return undefined;
  } catch (error) {
    console.error("Error fetching address by username:", error);
    return undefined;
  }
};
