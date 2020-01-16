import React from 'react';
import DropdownMenu from '../DropdownMenu';

const Header = () => {
  return (
    <header>
      <section className='header-container'>
        <h1>NASA Hubble Scope</h1>
      </section>
      <section className='route-container'>
        <DropdownMenu />
      </section>
    </header>
  );
}

export default Header;