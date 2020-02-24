import React from 'react';
import { Icon } from 'antd';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <>
      <div className={styles.logo}>
        <Icon type='radius-upleft' />
        <span>Healthify</span>
      </div>
    </>
  );
};

export default Navbar;
