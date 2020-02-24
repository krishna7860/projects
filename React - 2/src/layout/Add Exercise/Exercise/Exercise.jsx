import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const Exercise = ({ title, imgURL, pathname }) => {
  return (
    <div>
      <Link to={`${pathname}/${title}`}>
        <Card hoverable style={{ width: '128px', height: '115px' }}>
          <img src={imgURL} alt='exercise' />
        </Card>
        <p style={{ marginTop: '8px', fontSize: '1.2rem' }}>{title}</p>
      </Link>
    </div>
  );
};

export default Exercise;
