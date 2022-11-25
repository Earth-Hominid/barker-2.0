import type { NextPage } from 'next';
import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <>
      <Layout
        title="Barker | Bark at the world"
        description="Barking all day, howling all night. Barker is a social platform to howl, woof, and bark at the world."
        keywords="Chris Doll, barker, full stack developer"
      ></Layout>
    </>
  );
};

export default Home;
