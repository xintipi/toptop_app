import React, { ChangeEvent, MouseEvent, ReactNode, useState } from 'react';
import styled from 'styled-components';

interface IProps {
  className?: string;
  name: string;
  label?: string;
  type?: string;
  value: string;
  placeholder: string;
  icon?: ReactNode;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: (evt: MouseEvent<HTMLElement>) => void;
}

const InputComp = (props: IProps) => {
  const [value, setValue] = useState<string>(props.value || '');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    props.onChange(evt);
  };

  return (
    <div className={`${props.className} position-relative mb-9`}>
      {props.label && (
        <label htmlFor={props.name} className="fw-bold fs-14 mb-5 d-block">
          {props.label}
        </label>
      )}
      <div className="position-relative">
        <input
          className="fs-16"
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          value={value}
          onChange={handleChange}
        />
        <div className="icon-container">
          {props.icon && <i onClick={props.onIconClick}>{props.icon}</i>}
        </div>
      </div>
    </div>
  );
};

InputComp.defaultProps = {
  type: 'text',
};

const Input = styled(InputComp)`
  label {
    color: rgb(var(--primaryColor));
  }

  input {
    border-radius: 2px;
    background-color: rgba(var(--primaryColor), 0.06);
    border: 1px solid rgba(var(--primaryColor), 0.12);
    padding-inline-start: 12px;
    color: rgb(var(--primaryColor));
    line-height: 100%;
    outline: none;
    height: 44px;
    width: 100%;
    padding-inline-end: unset;

    &::placeholder {
      opacity: 0.3;
    }
  }
  .icon-container {
    right: 0;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    height: 44px;
    padding-inline-end: 16px;
    i {
      line-height: 0;
      margin-inline-start: 16px;
      cursor: pointer;
      font-size: 20px;
    }
  }
`;

export default React.memo(Input);
