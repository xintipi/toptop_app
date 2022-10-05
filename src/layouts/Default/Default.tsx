import clsx from 'clsx';
import { Fragment, ReactNode } from 'react';

import { Header, Sidebar } from '@/layouts';

import styles from './Default.module.scss';

function Default(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      <div
        className={clsx(
          styles.BodyContainer,
          'd-flex',
          'align-self-center',
          'justify-content-between',
          'mt-60',
          'container',
        )}
      >
        <Sidebar />
        <div className={clsx('main-container')}>
          <div>{children}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Default;
