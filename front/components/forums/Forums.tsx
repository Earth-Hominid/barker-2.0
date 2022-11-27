import { gql, useQuery } from '@apollo/client';
import ForumInfo from './ForumInfo';
import { GET_FORUMS } from 'queries/ForumQuery';
import LoadingSpinner from '../spinner/Spinner';
type Props = {};

const Forums = (props: Props) => {
  const { loading, error, data } = useQuery(GET_FORUMS);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Oops, something went wrong</p>;

  return (
    <>
      {!loading && !error && (
        <>
          <h1>Active Forums</h1>
          {data.forums.map((forum) => (
            <ForumInfo key={forum.id} forum={forum} />
          ))}
        </>
      )}
    </>
  );
};

export default Forums;
