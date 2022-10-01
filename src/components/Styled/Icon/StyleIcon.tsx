import React, { MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

interface IProps {
  className?: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

const Icon = (props: IProps) => {
  const { className, children } = props;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    props.onClick?.(event);
  };

  return (
    <a className={className} onClick={(event) => handleClick(event)}>
      {children}
    </a>
  );
};

const IconPrimary = styled(Icon)`
  & svg {
    display: block;
    width: 26px;
    height: 26px;
    transform: none;
  }
`;

const IconInbox = styled(Icon)`
  & svg {
    cursor: pointer;
    display: block;
  }
`;

const IconArrow = styled(Icon)`
  & svg {
    display: block;
    width: 24px;
    height: 8px;
    position: absolute;
    top: -8px;
    right: 15px;
  }
`;

const IconPopup = styled(Icon)`
  display: flex;
  align-items: center;
  width: 100%;
`;

export { IconArrow, IconInbox, IconPopup, IconPrimary };
