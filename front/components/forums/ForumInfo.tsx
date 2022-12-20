interface ForumInterface {
  description: string;
  name: string;
}

const ForumInfo: React.FC<{ forum: ForumInterface }> = ({ forum }) => {
  return (
    <>
      <h2>{`b/${forum.name}`}</h2>
      <h3>{forum.description}</h3>
    </>
  );
};

export default ForumInfo;
