import React from 'react';
const FollowerCard = props => {
  return (
    <div className='card rounded p-2 col-3  d-flex flex-column justify-content-center align-items-center mx-2'>
      <img
        src={props.user.avatar_url}
        style={{ height: '50px', width: '50px', borderRadius: '50%' }}
      />
      <p className='lead'>{props.user.login}</p>
    </div>
  );
};
export default FollowerCard;
