import 'tippy.js/dist/tippy.css';

import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import clsx from 'clsx';
import { TFunction } from 'i18next';
import React, { ChangeEvent, Fragment, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import {
  Arrow,
  Clear,
  EllipsisVertical,
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

  const onChangeLocale = (lang: string | number) => {
    i18n.changeLanguage(lang as string).then((_r: TFunction) => {
      setSearchParams({ lang: i18n.language });
      handleClickOut();
    });
  };

  return (
    <header className={clsx(styles.Header, styles.FixedTop)}>
      <div className={clsx(styles.Wrapper, 'container')}>
        <a className={clsx(styles.HeaderLeft, styles.Logo)}>
          <LogoTiktok />
        </a>
        <div className={clsx(styles.HeaderCenter)}>
          <TippyHeadless
            visible={!!searchResult.length}
            interactive
            placement="bottom-start"
            onClickOutside={() => setSearchResult([])}
            render={(attrs) => (
              <PopperSearch tabIndex={-1} {...attrs}>
                <ul>
                  {searchData.keywords &&
                    searchData.keywords.map((item) => (
                      <li key={item.id}>
                        <IconPopup>
                          <SearchButton className="icon-width mr-8" />
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
                  <li>
                    <p>{t('view_result', { result: 'stutter official' })}</p>
                  </li>
                </ul>
              </PopperSearch>
            )}
          >
            <form
              className={clsx(
                styles.SearchInput,
                'd-flex',
                'align-items-center',
                'mx-0',
                'my-0',
                'py-12',
                'px-16',
              )}
            >
              <input
                data-testid="search"
                className="px-0 py-0 fw-light fs-16"
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
                  className="d-flex align-items-center"
                  onClick={() => handleClear()}
                >
                  <Clear />
                </div>
              )}
              <span className={clsx(styles.Splitter, 'my-n3', 'mx-0')}></span>
              <button
                type="submit"
                className={clsx(
                  styles.SearchButton,
                  'py-11',
                  'pr-16',
                  'pl-12',
                  'ml-0',
                  'mr-n16',
                  'my-n12',
                )}
              >
                <SearchButton />
              </button>
            </form>
          </TippyHeadless>
        </div>
        <div className={clsx(styles.HeaderRight, 'd-flex', 'align-items-center')}>
          <Button
            icon={<Upload className="icon-width mr-8" />}
            style={{ minWidth: '110px' }}
            onClick={() => navigate(`/upload?lang=${i18n.language}`)}
          >
            {t('upload')}
          </Button>

          {userLogged ? (
            <Fragment>
              <div>
                <Tippy content={t('view_messages')} interactive>
                  <div className={clsx(styles.MessageContainer, 'ml-16', 'pt-3', 'pr-3')}>
                    <IconPrimary
                      onClick={() => navigate(`/message?lang=${i18n.language}`)}
                    >
                      <Message />
                    </IconPrimary>
                  </div>
                </Tippy>
              </div>
              <div>
                <Tippy content={t('view_inbox')} interactive>
                  <div className={clsx(styles.InboxContainer, 'ml-16')}>
                    <IconInbox>
                      <Inbox />
                    </IconInbox>
                  </div>
                </Tippy>
              </div>
            </Fragment>
          ) : (
            <Button onClick={() => navigate('/login')} danger ghost>
              {t('login')}
            </Button>
          )}

          <TippyHeadless
            visible={showPopperProfile}
            interactive={true}
            placement="bottom-start"
            onClickOutside={() => handleClickOut()}
            render={(attrs) => (
              <PopperProfile tabIndex={-1} {...attrs}>
                <IconArrow>
                  <Arrow />
                </IconArrow>

                {!showLang ? (
                  <ul>
                    {userLogged && (
                      <li>
                        <IconPopup
                          onClick={() => navigate(`/@tough95?lang=${i18n.language}`)}
                        >
                          <Profile className="icon-width mr-8" />
                          <span>{t('view_profile')}</span>
                        </IconPopup>
                      </li>
                    )}
                    {userLogged && (
                      <li>
                        <IconPopup
                          onClick={() => navigate(`/setting?lang=${i18n.language}`)}
                        >
                          <Setting className="icon-width mr-8" />
                          <span>{t('view_setting')}</span>
                        </IconPopup>
                      </li>
                    )}
                    <li role="presentation" onClick={() => setShowLang(true)}>
                      <IconPopup>
                        <Language className="icon-width mr-8" />
                        <span>{t('view_language')}</span>
                      </IconPopup>
                    </li>
                    {userLogged && (
                      <li className={clsx(styles.LogoutEntrance)}>
                        <IconPopup onClick={() => navigate('/logout')}>
                          <Logout className="icon-width mr-8" />
                          <span>{t('view_logout')}</span>
                        </IconPopup>
                      </li>
                    )}
                  </ul>
                ) : (
                  <Locales
                    title={t('lang_title')}
                    lists={LanguagesEnum}
                    open={showLang}
                    onBack={(lang: boolean) => setShowLang(lang)}
                    onChangeLocale={(locale: string | number) => onChangeLocale(locale)}
                  />
                )}
              </PopperProfile>
            )}
          >
            {userLogged ? (
              <div
                className={clsx(styles.ProfileContainer, 'ml-24')}
                style={{ backgroundImage: `url(${bgUser})` }}
                onClick={() => setShowPopperProfile(!showPopperProfile)}
              />
            ) : (
              <i
                className={clsx(styles.MoreIconWrapper, 'ml-16', 'py-0', 'px-4')}
                onClick={() => setShowPopperProfile(!showPopperProfile)}
              >
                <EllipsisVertical className="icon-width d-block" />
              </i>
            )}
          </TippyHeadless>
        </div>
      </div>
    </header>
  );
}

export default Header;
