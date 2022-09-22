import styled from 'styled-components';

const FormElement = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  background: rgba(22, 24, 35, 0.06);
  border-radius: 92px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin: 0;

  & input {
    font-family: ProximaNova, Arial, Tahoma, PingFangSC, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    width: 292px;
    color: rgba(22, 24, 35, 1);
  }

  & .splitter {
    width: 1px;
    height: 28px;
    margin: -3px 0;
    background: rgba(22, 24, 35, 0.12);
  }

  & .search-button {
    padding: 11px 16px 11px 12px;
    margin: -12px -16px;
    font-size: 0;
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    margin-left: 0;

    &:hover {
      background: rgba(22, 24, 35, 0.03);
    }
  }
`;

export { FormElement };
