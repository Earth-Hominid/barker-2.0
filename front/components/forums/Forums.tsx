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

type Props = {};

const Forums = (props: Props) => {
  const { loading, error, data } = useQuery(GET_FORUMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, something went wrong</p>;

  return <div>Forums</div>;
};

export default Forums;
