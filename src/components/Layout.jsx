import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;