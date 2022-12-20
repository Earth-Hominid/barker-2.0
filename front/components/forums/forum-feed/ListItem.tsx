import { ButtonHolder } from './Styles';
import Link from 'next/link';
interface ForumInterface {
  description: string;
  owner: string;
  name: string;
}

const ListItem: React.FC<{ forum: ForumInterface }> = ({ forum }) => {
  return (
    <>
      <Link href={`/forums/${forum.name}`}>
        <ButtonHolder>
          <h2>{`b/${forum.name}`}</h2>
        </ButtonHolder>
      </Link>
    </>
  );
};

export default ListItem;
