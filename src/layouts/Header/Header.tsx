import classNames from 'classnames/bind';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowIcon,
  ClearIcon,
  InboxIcon,
  LogoTiktok,
  LogoutIcon,
  MessageIcon,
  ProFileIcon,
  SearchButtonIcon,
  SettingIcon,
  UploadIcon,
} from '@/assets/icons';
import bgUser from '@/assets/user.jpeg';
import {
  StyledArrowIcon,
  StyledIcon,
  StyledInboxIcon,
  StyleIconPopup,
} from '@/components/Icon/StyleIcon';
import { StyledPopupProfile } from '@/components/Popup/PopupProfile';
import { useComponentVisible } from '@/hooks';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const [searchInput, setSearchInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const {
    ref: profileRef,
    isComponentVisible: showPopup,
    setIsComponentVisible: setShowPopup,
  } = useComponentVisible(false);

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(evt.target.value);
  };

  const handleClear = () => {
    setSearchInput('');
    inputRef.current?.focus();
  };

  return (
    <header className={cx('header', 'fixed-top')}>
      <div className={`container ${cx('wrapper')}`}>
        <a className={cx('tiktok-logo')} onClick={() => navigate('/')}>
          <LogoTiktok />
        </a>
        <div className={cx('header-center')}>
          <form className={cx('search-input')}>
            <input
              type="text"
              value={searchInput}
              placeholder="Search accounts and videos"
              ref={inputRef}
              onChange={(evt: ChangeEvent<HTMLInputElement>) => handleSearch(evt)}
            />
            {searchInput && (
              <div className={cx('icon-clear')} onClick={() => handleClear()}>
                <ClearIcon />
              </div>
            )}
            <span className={cx('splitter')}></span>
            <button type="submit" className={cx('search-button')}>
              <SearchButtonIcon />
            </button>
          </form>
        </div>
        <div className={cx('header-right')}>
          <div className={cx('upload-container')}>
            <StyledIcon path="/upload" className={cx('upload')}>
              <UploadIcon className={cx('plus-icon')} />
              <span className={cx('upload-text')}>Upload</span>
            </StyledIcon>
          </div>
          <div className={cx('message-container')}>
            <StyledIcon path="/message">
              <MessageIcon />
            </StyledIcon>
          </div>
          <div className={cx('inbox-container')}>
            <StyledInboxIcon>
              <InboxIcon />
            </StyledInboxIcon>
          </div>
          <div
            className={cx('profile-container')}
            style={{ backgroundImage: `url(${bgUser})` }}
            onClick={() => setShowPopup(!showPopup)}
            ref={profileRef}
          >
            {showPopup && (
              <StyledPopupProfile>
                <StyledArrowIcon>
                  <ArrowIcon />
                </StyledArrowIcon>

                <ul>
                  <li>
                    <StyleIconPopup path="/@tough95">
                      <ProFileIcon />
                      <span>View profile</span>
                    </StyleIconPopup>
                  </li>
                  <li>
                    <StyleIconPopup path="/setting">
                      <SettingIcon />
                      <span>Setting</span>
                    </StyleIconPopup>
                  </li>
                  <li className="logout-entrance">
                    <StyleIconPopup path="/logout">
                      <LogoutIcon />
                      <span>Log out</span>
                    </StyleIconPopup>
                  </li>
                </ul>
              </StyledPopupProfile>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
