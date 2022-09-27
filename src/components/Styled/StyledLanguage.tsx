import React from 'react';
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
  onBack(b: boolean): void;
}

const Language: React.FC<ILanguageRecord> = (props, _context) => {
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
          <li key={lang.id}>{lang.name}</li>
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
    }
  }
`;

export { StyledLanguage };
