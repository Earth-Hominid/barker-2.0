import { gql } from '@apollo/client';

const DELETE_FORUM = gql`
  mutation deleteForum($id: ID!) {
    deleteForum(id: $id) {
      id
      name
      description
      creator
    }
  }
`;

export { DELETE_FORUM };
