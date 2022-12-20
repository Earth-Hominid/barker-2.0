import { gql, useQuery } from '@apollo/client';
import { GET_FORUMS } from 'queries/ForumQuery';
import ForumInfo from './ForumInfo';
import ErrorText from './ErrorText';
import LoadingSpinner from '../spinner/Spinner';

interface ForumInterface {
  description: string;
  owner: string;
  name: string;
}

const Forums = () => {
  const { loading, error, data } = useQuery(GET_FORUMS);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorText />;

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
