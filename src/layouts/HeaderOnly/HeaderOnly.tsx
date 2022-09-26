import classNames from 'classnames/bind';
import React, { Fragment } from 'react';

import styles from '../Default/Default.module.scss';

const cx = classNames.bind(styles);

import { Header } from '@/layouts';

function HeaderOnly({ children }: any) {
  return (
    <Fragment>
      <Header />
      <div className={`container ${cx('body-container')}`}>
        <div className={cx('main-container')}>{children}</div>
      </div>
    </Fragment>
  );
}

export default HeaderOnly;
