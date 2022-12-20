import Layout from '@/components/Layout';
import AboutShowcase from '@/components/about/AboutShowcase';

export default function AboutPage() {
  const background = 'bg-gray-100';
  return (
    <Layout
      title="About"
      description="Barker is a social platform to howl, woof, and bark at the world."
      keywords="About"
    >
      <AboutShowcase />
    </Layout>
  );
}
