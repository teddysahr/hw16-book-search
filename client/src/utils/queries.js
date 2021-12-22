import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    profiles {
      _id
      name
      skills
    }
  }
`;
