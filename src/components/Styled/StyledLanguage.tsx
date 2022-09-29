import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { BackIcon } from '@/assets/icons';

export interface IListItems {
  id: string | number;
  name: string;
}

interface ILanguageRecord {
  className?: string;
  title: string;
  open: boolean;
  lists: IListItems[];
  onBack: (b: boolean) => void;
  onSwitchLanguage: (b: string | number) => void;
}

const Language: React.FC<ILanguageRecord> = (props: ILanguageRecord, _context) => {
  const [searchParams] = useSearchParams();

  return (
    <div className={props.className}>
      <div
        className={`${props.className} div__header`}
        onClick={() => props.onBack(!props.open)}
      >
        <i>
          <BackIcon />
        </i>
        <p>{props.title}</p>
      </div>
      <ul>
        {props.lists.map((lang: IListItems) => (
          <li
            role="presentation"
            key={lang.id}
            className={`${searchParams.get('lang') === lang.id ? 'active' : null}`}
            onClick={() => props.onSwitchLanguage(lang.id)}
          >
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

const StyledLanguage = styled(Language)`
  & .div__header {
    display: flex;
    align-items: center;
    position: relative;
    height: 50px;
    cursor: pointer;
    i svg {
      margin-left: 28px;
      width: 20px;
      height: 20px;
    }
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  & ul {
    padding: 0;
    li {
      padding: 10px 24px;
      font-family: var(--fontFamilyHeading);
      &.active {
        background-color: rgba(var(--primaryColor), 0.03);
      }
    }
  }
`;

export { StyledLanguage };
