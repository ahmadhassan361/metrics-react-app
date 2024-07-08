import React from 'react';
import Header from '../Layout/Header'
const ProtectedLayout = ({ children }) => (
  <div>
    <Header />
    <main>
      {children}
    </main>
  </div>
);

export default ProtectedLayout;