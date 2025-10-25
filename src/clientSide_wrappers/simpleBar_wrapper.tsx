//simpleBar_wrapper.tsx
'use client';

import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

interface SimpleBarWrapperProps {
  children: React.ReactNode;
}

const SimpleBarWrapper: React.FC<SimpleBarWrapperProps> = ({ children }) => {
  return (
    <SimpleBar
      className="scrollBar_type_1"
      style={{ maxHeight: '100vh' }}
      scrollbarMaxSize={12}
    >
      {children}
    </SimpleBar>
  );
};

export default SimpleBarWrapper;
