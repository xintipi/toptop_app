import styled from 'styled-components';

const StyledPopupProfile = styled.div`
  position: absolute;
  z-index: 1;
  background-color: rgba(var(--primaryBackground), 1);
  border-radius: 8px;
  top: calc(100% + 12px);
  right: -12px;
  box-shadow: rgb(0 0 0 / 12%) 0 4px 16px;

  & ul {
    font-family: var(--fontFamilyParagraph);
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    padding: 8px 0;
    margin: 0;
    min-width: 223px;
    list-style: none;

    li {
      padding: 10px 8px 10px 16px;
      display: flex;
      justify-content: space-between;

      &:hover {
        background-color: rgba(var(--primaryColor), 0.03);
      }

      &.logout-entrance {
        border-top: 1px solid rgba(var(--primaryColor), 0.12);
      }
    }
  }
`;

export { StyledPopupProfile };
