import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import React, { ChangeEvent, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ArrowIcon,
  ClearIcon,
  InboxIcon,
  LanguageIcon,
  LogoTiktok,
  LogoutIcon,
  MessageIcon,
  ProFileIcon,
  SearchButtonIcon,
  SettingIcon,
  UploadIcon,
  VerifyBadgeIcon,
} from '@/assets/icons';
import bgUser from '@/assets/user.jpeg';
import { StyledAvatar } from '@/components/Styled/StyledAvatar';
import { IListItems, StyledLanguage } from '@/components/Styled/StyledLanguage';
import {
  StyledPopperProfile,
  StyledPopperSearch,
} from '@/components/Styled/StyledPopper';
import {
  StyledArrowIcon,
  StyledIcon,
  StyledInboxIcon,
  StyleIconPopup,
} from '@/components/Styled/StyleIcon';
import searchData from '@/dummy/search.json';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showPopperProfile, setShowPopperProfile] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<any>([1, 2, 3]);
  const [showLang, setShowLang] = useState<boolean>(false);

  const listLanguages = useMemo<IListItems[]>(() => {
    return [
      { id: 1, name: 'English' },
      { id: 2, name: 'Tiếng Việt (Việt Nam)' },
    ];
  }, []);

  const handleClickOut = () => {
    setShowPopperProfile(false);
    setShowLang(false);
  };

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
          <Tippy
            visible={!!searchResult.length}
            interactive
            onClickOutside={() => setSearchResult([])}
            render={(attrs) => (
              <StyledPopperSearch tabIndex={-1} {...attrs}>
                <ul>
                  {searchData.keywords &&
                    searchData.keywords.map((item) => (
                      <li key={item.id}>
                        <StyleIconPopup>
                          <SearchButtonIcon />
                          <span>{item.key_name}</span>
                        </StyleIconPopup>
                      </li>
                    ))}
                  {searchData.accounts && <div className="account-title">Accounts</div>}
                  {searchData.accounts &&
                    searchData.accounts.map((item) => (
                      <li className="account-content" key={item.id}>
                        <StyledAvatar
                          width="40px"
                          height="40px"
                          src={item.avatar}
                          alt={item.desc_name}
                        />
                        <div className="item">
                          <h4 className="item__title">
                            {item.chanel}
                            <VerifyBadgeIcon />
                          </h4>
                          <p className="item__desc">{item.desc_name}</p>
                        </div>
                      </li>
                    ))}
                  <li className="more-text">
                    <p>View all results for "stutter official"</p>
                  </li>
                </ul>
              </StyledPopperSearch>
            )}
          >
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
          </Tippy>
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
          <Tippy
            visible={showPopperProfile}
            interactive={true}
            onClickOutside={() => handleClickOut()}
            render={(attrs) => (
              <StyledPopperProfile tabIndex={-1} {...attrs}>
                <StyledArrowIcon>
                  <ArrowIcon />
                </StyledArrowIcon>

                {!showLang ? (
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
                    <li role="presentation" onClick={() => setShowLang(true)}>
                      <StyleIconPopup>
                        <LanguageIcon />
                        <span>English</span>
                      </StyleIconPopup>
                    </li>
                    <li className="logout-entrance">
                      <StyleIconPopup path="/logout">
                        <LogoutIcon />
                        <span>Log out</span>
                      </StyleIconPopup>
                    </li>
                  </ul>
                ) : (
                  <StyledLanguage
                    title="Language"
                    lists={listLanguages}
                    open={showLang}
                    onBack={(payload: boolean) => setShowLang(payload)}
                  />
                )}
              </StyledPopperProfile>
            )}
          >
            <div
              className={cx('profile-container')}
              style={{ backgroundImage: `url(${bgUser})` }}
              onClick={() => setShowPopperProfile(!showPopperProfile)}
            />
          </Tippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
