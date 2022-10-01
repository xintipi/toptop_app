import clsx from 'clsx';
import { Fragment, ReactNode } from 'react';

import { Header, Sidebar } from '@/layouts';

import styles from './Default.module.scss';

function Default({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      <div className={clsx(styles.bodyContainer, 'container')}>
        <Sidebar />
        <div className={clsx('main-container')}>
          <div>{children}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Default;
