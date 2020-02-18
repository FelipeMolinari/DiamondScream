import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  width: 100%;
  height: 60px;
  border: 1px solid #eee;

  div {
    margin-left: 26px;

    display: flex;
    align-items: center;
    svg {
      cursor: pointer;
    }
  }
`;

export const Logo = styled(Link)`
  margin-left: 26px;

  text-decoration: none;
  color: #202b36;

  h1 {
    font-weight: bold;
    font-size: 20px;
  }

  strong {
    color: #297ecc;
  }
`;

export const ButtonSubmit = styled.button.attrs(() => ({
  type: "submit"
}))`
  border: none;
  border-radius: 5px;
  background: #fff;
  svg {
    margin-left: 20px;
    color: #4c5a66;
    width: 18px;
    height: 18px;
    cursor: pointer;
    background: #fff;
  }
`;
export const SearchForm = styled.form`
  display: flex;
  justify-content: left;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #98a6b3;
  background: #fff;
  align-items: center;
  width: 600px;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); */

  input {
    margin-left: 10px;
    flex: 1;
    background: #fff;
    border: none;
    font-size: 16px;
    color: #4c5a66;
  }
  span {
    padding: 5px;
    font-size: 10px;
    background: #55cec7;
    color: #ebf5ff;
    border-radius: 2px;
    margin-left: 10px;
  }
`;

export const AccountSpace = styled.div`
  display: flex;
  align-items: center;
  margin-right: 26px;

  button {
    border: none;
    color: #fff;
    padding: 10px;
    border-radius: 3px;
    width: 80px;
  }
  .login {
    margin-right: 10px;
    background: #297ecc;
  }
  .SignUp {
    border: 1px solid #297ecc;
    background: #ebf5ff;
    color: #297ecc;
  }
`;
