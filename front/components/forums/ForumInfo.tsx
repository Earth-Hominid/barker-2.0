import React from 'react';

type Props = {};

const ForumInfo = ({ forum }) => {
  return (
    <>
      <h2>{`b/${forum.name}`}</h2>
      <h3>{forum.description}</h3>
    </>
  );
};

export default ForumInfo;
