import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-dark'>
      <div>
        <a
          href='#'
          className='navbar-brand text-info lead'
          style={{ fontSize: '1.8rem' }}
        >
          <i className='fab fa-github mr-2'></i> Github Finder
        </a>
      </div>
    </div>
  );
};

export default Navbar;
