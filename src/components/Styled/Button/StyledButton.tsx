import { CSSProperties, Fragment, MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

import variables from './variables';

type IProps = {
  icon?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  disable?: boolean;
  size?: 'sm' | 'md' | 'lg';
  danger?: boolean;
  ghost?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ButtonComp = (props: IProps) => {
  return (
    <button
      className={props.className}
      disabled={props.disable}
      style={props.style}
      onClick={(event) => props.onClick?.(event)}
    >
      {props.icon && <Fragment>{props.icon}</Fragment>}
      <span>{props.children}</span>
    </button>
  );
};

const backgroundColor = (props: Pick<IProps, 'ghost'>) => {
  if (props.ghost) return variables.colors.lightRed;
  return variables.colors.white;
};

const border = (props: Pick<IProps, 'danger'>) => {
  return `1px solid ${
    !props.danger ? variables.colors.lightReadOpacity_12 : variables.colors.lightRed
  }`;
};

const height = (props: Pick<IProps, 'size'>) => {
  return variables.size[props.size as keyof typeof variables.size];
};

const color = (props: Pick<IProps, 'danger' | 'ghost'>) => {
  if (props.ghost) return variables.colors.white;
  else if (!props.danger) return variables.colors.lightBlack;
  return variables.colors.lightRed;
};

const Button = styled(ButtonComp)`
  min-width: 100px;
  line-height: 22px;
  padding: 6px 8px;
  margin-left: 16px;
  border-radius: ${(props) => (!props.danger ? '2px' : '4px')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) => backgroundColor(props)};
  border: ${(props) => border(props)};
  height: ${(props) => height(props)};
  color: ${(props) => color(props)};

  &:hover {
    background: ${(props) =>
      !props.ghost
        ? variables.colors.lightReadOpacity_06
        : 'linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.06)),#FE2C55'};
  }

  & svg,
  & img {
    height: 20px;
    width: 20px;
    margin-right: 8px;
  }

  & span {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
`;

export { Button };
