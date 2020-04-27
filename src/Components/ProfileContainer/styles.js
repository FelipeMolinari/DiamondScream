import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .parent {
    position: relative;
    display: flex;

    align-items: center;
    flex-direction: column;
    align-items: center;

    .icon {
      position: absolute;
      left: 30px;
      top: 30px;
      border-radius: 50%;
      width: 130px;
      height: 130px;
    }
    .border {
      width: 190px;
      height: 190px;
      z-index: 1;
    }
    .level {
      position: absolute;
      left: 84px;
      top: 145px;
      color: #f7fbff;
      font-size: 12px;
      z-index: 2;
    }
  }

  div {
    display: flex;
    align-items: center;
    h1 {
      color: #1467b4;
      font-weight: bold;
      font-size: 30px;
      margin: 16px 0px;
    }

    svg {
      margin-left: 10px;
      color: #19af3a;
    }
  }
`;
