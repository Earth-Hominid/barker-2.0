import { gql, useQuery } from '@apollo/client';
import { GET_FORUMS } from 'queries/ForumQuery';
import Layout from '@/components/Layout';
import LoadingSpinner from '@/components/spinner/Spinner';

interface ForumInterface {
  description: string;
  owner: string;
  name: string;
}

const ArticlePage: React.FC<ForumInterface> = ({ forum }) => {
  if (!forum) return <LoadingSpinner />;
  return (
    <Layout
      title={`${forum.name}`}
      description={`${forum.description}`}
      keywords={`${forum.name}`}
    >
      <section className="min-h-screen">
        <ForumTemplate article={forum} />
      </section>
    </Layout>
  );
};

export default ArticlePage;
