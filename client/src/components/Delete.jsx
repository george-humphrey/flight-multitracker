import React from 'react';

const Delete = (props) => {
  return (
    <button
      className='delete'
      onClick={() => props.deleteFlight(props.listNumber)}>
      X
    </button>
  );
};

export default Delete;
