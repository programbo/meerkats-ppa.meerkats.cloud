import React from 'react';
import Menu from './Menu';

export default ({ children }) => (
  <div className="layout">
    <Menu />
    {children}
  </div>
);
