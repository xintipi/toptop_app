import clsx from 'clsx';
import React, {
  ChangeEvent,
  FocusEventHandler,
  MouseEvent,
  ReactNode,
  useState,
} from 'react';
import styled from 'styled-components';

interface IProps {
  className?: string;
  name: string;
  label?: string;
  type?: string;
  errors?: any;
  touched?: any;
  value: string;
  placeholder: string;
  icon?: ReactNode;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: (evt: MouseEvent<HTMLElement>) => void;
}

const InputComp = (props: IProps) => {
  const {
    className,
    name,
    label,
    type,
    errors,
    touched,
    value,
    placeholder,
    icon,
    onBlur,
    onIconClick,
    onChange,
  } = props;
  const [newValue, setValue] = useState<string>(value || '');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setValue(evt.target.value);
    onChange(evt);
  };

  return (
    <div className={`${className} position-relative mb-9`}>
      {label && <label className="fw-bold fs-14 mb-5 d-block">{label}</label>}
      <div className="position-relative">
        <input
          className={clsx({
            'fs-16': true,
            'input-error': errors[name] && touched[name],
          })}
          type={type}
          placeholder={placeholder}
          name={name}
          value={newValue}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <div className="icon-container">
          {icon && <i onClick={onIconClick}>{icon}</i>}
        </div>
        {errors[name] && touched[name] && (
          <div className="input-feedback">{errors[name]}</div>
        )}
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
    padding-inline-end: 12px;

    &.input-error {
      border-color: rgb(var(--redColor));
    }

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

  .input-feedback {
    color: rgb(var(--redColor));
    margin-top: 0.25rem;
  }
`;

export default React.memo(Input);
