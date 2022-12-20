import { gql, useQuery } from '@apollo/client';
import { GET_FORUMS } from 'queries/ForumQuery';
import LoadingSpinner from '../../spinner/Spinner';
import ListItem from './ListItem';

function ForumFeed() {
  const { loading, error, data } = useQuery(GET_FORUMS);

  if (loading) return <LoadingSpinner />;

  if (error) return <p>Oops, something went wrong.</p>;

  return (
    <>
      {!loading && !error && (
        <>
          {data.forums.map((forum) => (
            <ListItem key={forum.id} forum={forum} />
          ))}
        </>
      )}
    </>
  );
}

export default ForumFeed;
