import classNames from 'classnames/bind';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import InboxIcon from '@/assets/icons/inbox.svg?component';
import MessageIcon from '@/assets/icons/message.svg?component';
import SearchButtonIcon from '@/assets/icons/search-button.svg?component';
import UploadIcon from '@/assets/icons/upload.svg?component';
import LogoTiktok from '@/assets/tiktok.svg?component';
import { StyledIcon, StyledInboxIcon } from '@/components/Icon/StyleIcon';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();

  return (
    <header className={cx('header', 'fixed-top')}>
      <div className={`container ${cx('wrapper')}`}>
        <a className={cx('tiktok-logo')} onClick={() => navigate('/')}>
          <LogoTiktok />
        </a>
        <div className={cx('header-center')}>
          <form className={cx('search-input')}>
            <input type="search" value="" placeholder="Search accounts and videos" />
            <span className={cx('splitter')}></span>
            <button type="submit" className={cx('search-button')}>
              <SearchButtonIcon />
            </button>
          </form>
        </div>
        <div className={cx('header-right')}>
          <div className={cx('upload-container')}>
            <StyledIcon path="/upload?lang=en" className={cx('upload')}>
              <UploadIcon className={cx('plus-icon')} />
              <span className={cx('upload-text')}>Upload</span>
            </StyledIcon>
          </div>
          <div className={cx('message-container')}>
            <StyledIcon path="/message?lang=en">
              <MessageIcon />
            </StyledIcon>
          </div>
          <div className={cx('inbox-container')}>
            <StyledInboxIcon>
              <InboxIcon />
            </StyledInboxIcon>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
