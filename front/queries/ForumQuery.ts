import { gql, useQuery } from '@apollo/client';

const GET_FORUMS = gql`
  query getForums {
    forums {
      name
      description
      creator {
        username
      }
    }
  }
`;

export { GET_FORUMS };
