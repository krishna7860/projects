import React from 'react';
import icon from '../../home.png';
import { Typography } from 'antd';

const Home = () => {
  return (
    <div style={{ marginTop: '1rem', padding: '1.5rem' }}>
      <img src={icon} alt='404' height='300px' width='300px'></img>
      <Typography.Title level={2} style={{ marginTop: '1rem' }}>
        Calorie Tracker
      </Typography.Title>
      <Typography.Paragraph>
        Use Our Calorie Tracker to Track your health status and Stay Fit
      </Typography.Paragraph>
      <Typography.Paragraph>
        Use our Useful Quotes to change your life
      </Typography.Paragraph>
    </div>
  );
};

export default Home;
