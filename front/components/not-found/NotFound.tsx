import Link from 'next/link';
import Layout from '../Layout';
import {
  MainSection,
  MainText,
  LinkText,
  ParagraphText,
  IconHolder,
} from './Styles';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const NotFound = () => {
  const background = 'bg-[#F4F0E8]';
  return (
    <Layout
      title="404 Not Found"
      keywords="404 Not Found"
      description="404 Not Found"
    >
      <MainSection>
        <div className="flex flex-row space-x-2 items-center mb-2">
          <IconHolder>
            <ExclamationTriangleIcon />
          </IconHolder>
          <MainText>404. Not found.</MainText>
        </div>
        <ParagraphText className="not__found__paragraph">
          It looks like the page you are looking for is not on this server.
        </ParagraphText>
        <Link href="/">
          <LinkText>Click here to navigate to our homepage.</LinkText>
        </Link>
      </MainSection>
    </Layout>
  );
};

export default NotFound;
