import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 36px;
  .loading {
    display: block;
    margin: auto;
    margin-top: 300px;
    height: 200px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    svg {
      cursor: pointer;
    }
  }
`;

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

export const LeaguesInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const League = styled.div`
  display: flex;
  width: 400px;
  padding: 20px;
  border-top: 1px solid #eee;
  img {
    width: 106px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 12px;
    font-size: 20px;
    span {
      margin-top: 12px;
      color: #b8c2cc;
    }
    strong {
      font-weight: bold;
      color: #4c5a66;
    }
    .queue_type {
      text-transform: capitalize;
      font-size: 16px;
      font-weight: bolder;
    }

    .queue_tier {
      color: ${props => props.colorTier};
      text-transform: capitalize;
      font-size: 26px;
      font-weight: bolder;
      margin-top: 12px;
    }
  }
`;
