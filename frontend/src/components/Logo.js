import React from 'react';
import LogoImage from '../assest/logo.png'; // Renamed the import

const Logo = () => {
  return (
    <div>
      <img src={LogoImage} alt="logo" style={{ width: '110px', height: 'auto', }} />
    </div>
  );
};

export default Logo;
