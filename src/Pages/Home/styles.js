import styled from "styled-components";

export const ChartContainer = styled.div`
  width: 350px;
  height: 200px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .labels {
    width: 190px;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
  }
  .lanes {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    img {
      width: 20px;
    }
  }
  .column {
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .games {
      font-size: 12px;
      font-weight: bold;
      color: #4c5a66;
      margin: 5px 0px 5px 0px;
    }
    .winrate {
      font-size: 10px;
      color: #fe8e8e;
    }
  }
`;
