import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { TFunction } from 'i18next';
import React, { ChangeEvent, Fragment, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  Arrow,
  Clear,
  Inbox,
  Language,
  LogoTiktok,
  Logout,
  Message,
  Profile,
  SearchButton,
  Setting,
  Upload,
  VerifyBadge,
} from '@/assets/icons';
import bgUser from '@/assets/user.jpeg';
import { Avatar } from '@/components/Styled/StyledAvatar';
import { Button } from '@/components/Styled/StyledButton';
import { Locales } from '@/components/Styled/StyledLocale';
import { PopperProfile, PopperSearch } from '@/components/Styled/StyledPopper';
import {
  IconArrow,
  IconInbox,
  IconPopup,
  IconPrimary,
} from '@/components/Styled/StyleIcon';
import searchData from '@/dummy/search.json';
import { LanguagesEnum } from '@/enums';
import { i18n } from '@/locales';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();
  const [_searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();

  const [searchInput, setSearchInput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showPopperProfile, setShowPopperProfile] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<any>([1, 2, 3]);
  const [showLang, setShowLang] = useState<boolean>(false);
  const [userLogged] = useState<boolean>(false);

  const handleClickOut = () => {
    setShowPopperProfile(false);
    setShowLang(false);
  };

  const handleClear = () => {
    setSearchInput('');
    inputRef.current?.focus();
  };

  const onChangeLanguage = (lang: string | number) => {
    i18n.changeLanguage(lang as string).then((_r: TFunction) => {
      setSearchParams({ lang: i18n.language });
      handleClickOut();
    });
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
              <PopperSearch tabIndex={-1} {...attrs}>
                <ul>
                  {searchData.keywords &&
                    searchData.keywords.map((item) => (
                      <li key={item.id}>
                        <IconPopup>
                          <SearchButton />
                          <span>{item.key_name}</span>
                        </IconPopup>
                      </li>
                    ))}
                  {searchData.accounts && (
                    <div className="account-title">{t('accounts')}</div>
                  )}
                  {searchData.accounts &&
                    searchData.accounts.map((item) => (
                      <li className="account-content" key={item.id}>
                        <Avatar
                          width="40px"
                          height="40px"
                          src={item.avatar}
                          alt={item.desc_name}
                        />
                        <div className="item">
                          <h4 className="item__title">
                            {item.chanel}
                            <VerifyBadge />
                          </h4>
                          <p className="item__desc">{item.desc_name}</p>
                        </div>
                      </li>
                    ))}
                  <li className="more-text">
                    <p>{t('view_result', { result: 'stutter official' })}</p>
                  </li>
                </ul>
              </PopperSearch>
            )}
          >
            <form className={cx('search-input')}>
              <input
                data-testid="search"
                type="text"
                value={searchInput}
                placeholder={t('ph_search_input')}
                ref={inputRef}
                onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                  setSearchInput(evt.target.value)
                }
              />
              {searchInput && (
                <div
                  data-testid="clear"
                  className={cx('icon-clear')}
                  onClick={() => handleClear()}
                >
                  <Clear />
                </div>
              )}
              <span className={cx('splitter')}></span>
              <button type="submit" className={cx('search-button')}>
                <SearchButton />
              </button>
            </form>
          </Tippy>
        </div>
        <div className={cx('header-right')}>
          <div className={cx('upload-container')}>
            <Button
              icon={<Upload />}
              style={{ minWidth: '110px' }}
              onClick={() => navigate(`/upload?lang=${i18n.language}`)}
            >
              {t('upload')}
            </Button>
          </div>

          {userLogged ? (
            <Fragment>
              <div className={cx('message-container')}>
                <IconPrimary path={`/message?lang=${i18n.language}`}>
                  <Message />
                </IconPrimary>
              </div>
              <div className={cx('inbox-container')}>
                <IconInbox>
                  <Inbox />
                </IconInbox>
              </div>
            </Fragment>
          ) : (
            <Button danger ghost>
              {t('login')}
            </Button>
          )}

          <Tippy
            visible={showPopperProfile}
            interactive={true}
            onClickOutside={() => handleClickOut()}
            render={(attrs) => (
              <PopperProfile tabIndex={-1} {...attrs}>
                <IconArrow>
                  <Arrow />
                </IconArrow>

                {!showLang ? (
                  <ul>
                    <li>
                      <IconPopup path={`/@tough95?lang=${i18n.language}`}>
                        <Profile />
                        <span>{t('view_profile')}</span>
                      </IconPopup>
                    </li>
                    <li>
                      <IconPopup path={`/setting?lang=${i18n.language}`}>
                        <Setting />
                        <span>{t('setting')}</span>
                      </IconPopup>
                    </li>
                    <li role="presentation" onClick={() => setShowLang(true)}>
                      <IconPopup>
                        <Language />
                        <span>{t('language')}</span>
                      </IconPopup>
                    </li>
                    <li className="logout-entrance">
                      <IconPopup path="/logout">
                        <Logout />
                        <span>{t('log_out')}</span>
                      </IconPopup>
                    </li>
                  </ul>
                ) : (
                  <Locales
                    title={t('lang_title')}
                    lists={LanguagesEnum}
                    open={showLang}
                    onBack={(payload: boolean) => setShowLang(payload)}
                    onSwitchLanguage={(payload: string | number) =>
                      onChangeLanguage(payload)
                    }
                  />
                )}
              </PopperProfile>
            )}
          >
            {userLogged ? (
              <div
                className={cx('profile-container')}
                style={{ backgroundImage: `url(${bgUser})` }}
                onClick={() => setShowPopperProfile(!showPopperProfile)}
              />
            ) : (
              <Fragment />
            )}
          </Tippy>
        </div>
      </div>
    </header>
  );
}

export default Header;
