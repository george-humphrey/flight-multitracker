import React from 'react';

const Status = (props) => {
  return (
    <div className='statusSection' id={`statusSection${props.listNumber}`}>
      <div className='status' id={`status${props.listNumber}`}>
        {props.status}
      </div>
    </div>
  );
};

export default Status;
