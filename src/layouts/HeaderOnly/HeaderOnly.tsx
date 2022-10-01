import clsx from 'clsx';
import { Fragment, ReactNode } from 'react';

import { Header } from '@/layouts';

import styles from '../Default/Default.module.scss';

function HeaderOnly({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Header />
      <div className={clsx(styles.bodyContainer, 'container')}>
        <div className={clsx('main-container')}>{children}</div>
      </div>
    </Fragment>
  );
}

export default HeaderOnly;
