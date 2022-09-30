import { CSSProperties, Fragment, MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';

type IProps = {
  icon?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
  disable?: boolean;
  size?: string;
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

const backgroundColor = (props: IProps) => {
  if (props.ghost) return 'rgb(254, 44, 85)';
  return 'rgba(255, 255, 255)';
};

const border = (props: Pick<IProps, 'danger'>) => {
  return !props.danger
    ? '1px solid rgba(22, 24, 35, .12)'
    : '1px solid rgba(254, 44, 85, 1)';
};

const height = (props: Pick<IProps, 'size'>) => {
  switch (props.size) {
    case 'small':
      return '28px';
    case 'large':
      return '48px';
    default:
      return '36px';
  }
};

const color = (props: Pick<IProps, 'danger' | 'ghost'>) => {
  if (props.ghost) return 'rgb(255, 255, 255)';
  else if (!props.danger) return 'rgb(22, 24, 35)';
  return 'rgb(254, 44, 85)';
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
        ? 'rgba(254, 44, 85, .06)'
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
