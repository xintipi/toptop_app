import styled from 'styled-components';

const Popper = styled.div`
  z-index: 1;
  background-color: rgba(var(--primaryBackground), 1);
  border-radius: 8px;
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
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      &:hover {
        background-color: rgba(var(--primaryColor), 0.03);
      }

      &.logout-entrance {
        border-top: 1px solid rgba(var(--primaryColor), 0.12);
      }
    }
  }
`;

const PopperSearch = styled(Popper)`
  width: 361px;
  max-height: min((100vh - 96px) - 60px, 734px);
  overflow: hidden auto;
  & ul {
    .account-title {
      height: 30px;
      padding: 5px 12px;
      font-size: 14px;
      line-height: 20px;
      font-weight: 600;
      color: rgba(var(--primaryColor), 0.5);
    }

    .account-content {
      padding: 9px 16px;
      justify-content: flex-start;

      .item {
        flex: 0 1 auto;
        min-width: 0;

        &__title {
          font-size: 16px;
          line-height: 22px;
          font-weight: 600;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          svg {
            margin-left: 4px;
          }
        }

        &__desc {
          font-size: 14px;
          line-height: 20px;
          color: rgba(var(--primaryColor), 0.5);
          font-weight: 400;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
`;

const PopperProfile = styled(Popper)`
  position: absolute;
  top: calc(100%);
  right: -28px;
`;

export { Popper, PopperProfile, PopperSearch };
