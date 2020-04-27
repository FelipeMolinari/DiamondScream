import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 1px solid #eee;
  width: 252px;
  padding-top: 10px;
  height: 100%;
  position: fixed;
  top: 60px;
`;

export const SidebarLink = styled(NavLink)`
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #4c5a66;
  font-family: sans-serif;
  font-size: 20px;
  padding: 26px;

  span {
    margin-left: 26px;
    margin-top: 4px;
  }
  :hover {
    background: #ebf5ff;
    svg {
      color: #297ecc;
    }
    span {
      font-weight: bold;
      color: #202b36;
    }
  }
`;
