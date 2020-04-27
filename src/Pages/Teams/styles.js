import styled from "styled-components";
import { Link } from "react-router-dom";

export const LeaguesInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;
export const League = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 13px;
  border-top: 1px solid #eee;
  img {
    margin-right: 13px;
    width: 100px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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

export const MatchesList = styled.ul`
  width: 850px;
`;

export const MatchItem = styled.li`
  text-decoration: none;
  list-style: none;
  padding: 13px;
  border-bottom: 1px solid #b8c2cc;

  .content_collumn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .champ_played {
    width: 80px;
  }

  .result_match {
    color: ${props => (props.win ? "#8ED982" : "#FE8E8E")};
    font-weight: bold;
    font-size: 20px;
  }
  .spell {
    margin-left: 3px;

    width: 20px;
  }
  .difference_time {
    color: #98a6b2;
    font-size: 14px;
    margin-bottom: 6px;
    font-weight: bold;
  }
  .medio {
    font-weight: bold;
    font-size: 14px;
    color: #98a6b2;
  }
  .kill {
    color: #64995c;
  }
  .death {
    color: #c35138;
  }
  .assist {
    color: #94995c;
  }
  .weak {
    font-weight: bold;
    font-size: 14px;
    color: #bac6cf;
  }
  .content_row {
    display: flex;
    align-items: center;
  }

  .strong {
    font-weight: bold;
    font-size: 14px;
    color: #4c5a66;
  }

  .items_group {
    display: grid;
    grid-template-columns: 26px 26px 26px;
    grid-gap: 2px;
    align-items: center;
    justify-content: center;

    div {
      background: #bac6cf;
      border: none;
    }
  }

  .item_slot {
    width: 26px;
    height: 26px;

    border-radius: 4px;
  }

  .champion_small_img {
    width: 20px;
    margin: 1px;
  }
`;

export const LinkProfile = styled(Link)`
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 70px;
  height: 1.2em;
  white-space: nowrap;
  align-self: center;
  &:hover {
    color: #297ecc;
  }
`;
