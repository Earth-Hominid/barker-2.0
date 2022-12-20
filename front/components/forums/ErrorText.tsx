import React from 'react';

type Props = {};

const ErrorText = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h3 className="text-lg font-montserrat font-semibold">
        Oops, something went wrong.
      </h3>
    </div>
  );
};

export default ErrorText;
