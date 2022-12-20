import Layout from '@/components/Layout';
import Forums from '@/components/forums/Forums';

interface ForumsInterface {
  forums: {
    forum: {
      id: string;
      name: string;
      description: string;
      owner: string;
    };
  };
}

const ForumPage = () => {
  return (
    <Layout
      title="Barker Forums"
      description="Howl at the moon | Barker"
      keywords="barker, forums"
    >
      <Forums />
    </Layout>
  );
};

export default ForumPage;
