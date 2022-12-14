import Head from 'next/head';
import Header from './header/Header';
import Footer from './footer/Footer';
import { useContext } from 'react';
import { DarkContext } from '@/context/dark-context';
import Forums from './forums/Forums';
import { ChildProcess } from 'child_process';

interface Props {
  title: string;
  keywords: string;
  description: string;
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({
  title,
  description,
  keywords,
  children,
}) => {
  const { darkMode, handleToggleThemeClick } = useContext(DarkContext);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="dark:bg-[#0E141B] min-w-[400px]">
        <header id="header">
          <Header
            handleToggleThemeClick={handleToggleThemeClick}
            darkMode={darkMode}
          />
        </header>
        <main className="min-h-screen">{children}</main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: 'Barker | Bark at the world',
  description:
    'Barking all day, howling all night. Barker is a social platform to howl, woof, and bark at the world.',
  keywords: `Chris Doll, barker, full stack developer
  `,
};
