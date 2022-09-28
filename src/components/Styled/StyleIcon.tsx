import React from 'react';
import { To, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Icon = ({
  className,
  path,
  children,
}: {
  className?: string;
  path?: string;
  children: React.ReactNode;
}) => {
  const navigate = useNavigate();

  const switchPage = (path: To) => {
    if (path !== '/logout') return navigate(path);
    // call api logout in here
    console.log('User was signed out!!!');
    // and then navigate to home page
    return navigate('/');
  };

  return path ? (
    <a className={className} onClick={() => switchPage(path)}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
};

const StyledIcon = styled(Icon)`
  & svg {
    display: block;
    width: 26px;
    height: 26px;
    transform: none;
  }
`;

const StyledInboxIcon = styled(Icon)`
  & svg {
    cursor: pointer;
    display: block;
  }
`;

const StyledArrowIcon = styled(Icon)`
  & svg {
    display: block;
    width: 24px;
    height: 8px;
    position: absolute;
    top: -8px;
    right: 15px;
  }
`;

const StyleIconPopup = styled(Icon)`
  display: flex;
  align-items: center;
  width: 100%;

  & svg {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
`;

export { StyledArrowIcon, StyledIcon, StyledInboxIcon, StyleIconPopup };
