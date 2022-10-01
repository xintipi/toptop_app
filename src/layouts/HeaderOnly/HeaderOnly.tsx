import { ReactNode, Fragment } from 'react';
import clsx from 'clsx';

import styles from '../Default/Default.module.scss';
import { Header } from '@/layouts';

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
