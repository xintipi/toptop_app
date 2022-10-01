import Tippy from '@tippyjs/react/headless';
import clsx from 'clsx';
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
import { Avatar } from '@/components/Styled/Avatar/StyledAvatar';
import { Button } from '@/components/Styled/Button/StyledButton';
import {
  IconArrow,
  IconInbox,
  IconPopup,
  IconPrimary,
} from '@/components/Styled/Icon/StyleIcon';
import { Locales } from '@/components/Styled/Locale/StyledLocale';
import { PopperProfile, PopperSearch } from '@/components/Styled/Popper/StyledPopper';
import searchData from '@/dummy/search.json';
import { LanguagesEnum } from '@/enums';
import { i18n } from '@/locales';

import styles from './Header.module.scss';

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
    <header className={clsx(styles.header, styles.fixedTop)}>
      <div className={clsx('container', styles.wrapper)}>
        <a className={clsx(styles.tiktokLogo)} onClick={() => navigate('/')}>
          <LogoTiktok />
        </a>
        <div className={clsx(styles.headerCenter)}>
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
            <form className={clsx(styles.searchInput)}>
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
                  className={clsx(styles.iconClear)}
                  onClick={() => handleClear()}
                >
                  <Clear />
                </div>
              )}
              <span className={clsx(styles.splitter)}></span>
              <button type="submit" className={clsx(styles.searchButton)}>
                <SearchButton />
              </button>
            </form>
          </Tippy>
        </div>
        <div className={clsx(styles.headerRight)}>
          <Button
            icon={<Upload />}
            style={{ minWidth: '110px' }}
            onClick={() => navigate(`/upload?lang=${i18n.language}`)}
          >
            {t('upload')}
          </Button>

          {userLogged ? (
            <Fragment>
              <div className={clsx(styles.messageContainer)}>
                <IconPrimary path={`/message?lang=${i18n.language}`}>
                  <Message />
                </IconPrimary>
              </div>
              <div className={clsx(styles.inboxContainer)}>
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
                className={clsx(styles.profileContainer)}
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
