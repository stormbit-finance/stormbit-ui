import { gql } from "@apollo/client";

export const USERNAME_QUERY = (address: string) => {
  return gql`
        query {
            user(id: "${address.toLowerCase()}") {
            id
            username
            }
        }
    `;
};
