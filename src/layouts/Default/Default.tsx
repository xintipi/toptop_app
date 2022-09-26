import classNames from 'classnames/bind';
import React, { Fragment } from 'react';

import { Header, Sidebar } from '@/layouts';

import styles from './Default.module.scss';

const cx = classNames.bind(styles);

function Default({ children }: any) {
  return (
    <Fragment>
      <Header />
      <div className={`container ${cx('body-container')}`}>
        <Sidebar />
        <div className={cx('main-container')}>
          <div>{children}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Default;
