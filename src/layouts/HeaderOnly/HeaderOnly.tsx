import React from 'react';

import { Header } from '@/layouts';

function HeaderOnly({ children }: any) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
