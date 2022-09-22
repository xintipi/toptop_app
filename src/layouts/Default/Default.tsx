import React from 'react';

import { Header, Sidebar } from '@/layouts';

function Default({ children }: any) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default Default;
