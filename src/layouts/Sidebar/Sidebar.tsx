import classNames from 'classnames/bind';
import React from 'react';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <nav className={cx('side__nav')}>
      <div>
        <div className={cx('side__nav--mask')}>mask</div>
        <div className={cx('side__nav--container')}>container</div>
      </div>
    </nav>
  );
}

export default Sidebar;
