import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";

import {
  Container,
  SearchForm,
  ButtonSubmit,
  Logo,
  AccountSpace
} from "./styles";
import { GoSearch, GoThreeBars } from "react-icons/go";

import { FaBars } from "react-icons/fa";

function Header(props) {
  const [summonerSearch, setSummonerSearch] = useState({
    region: "br1",
    summonerName: ""
  });

  const onHandleChangeSummonerName = e => {
    const { value } = e.target;
    setSummonerSearch({ ...summonerSearch, summonerName: value });
  };

  const onHandleSubmit = async e => {
    e.preventDefault();
    const { summonerName, region } = summonerSearch;

    props.history.push({
      pathname: `/profile/${region}/${summonerName}/overview`
    });
  };
  return (
    <Container>
      <div>
        <FaBars size={20} color="#4D5A66" />
        <Logo to="/" style={{ textDecoration: "none" }}>
          <h1>
            Diamond<strong>Scream</strong>
          </h1>
        </Logo>
      </div>

      <SearchForm onSubmit={e => onHandleSubmit(e)}>
        <span>BR</span>
        <ButtonSubmit>
          <GoSearch />
        </ButtonSubmit>
        <input
          value={summonerSearch.summonerName}
          onChange={e => onHandleChangeSummonerName(e)}
          type="text"
          placeholder="Procurar jogador pelo nome de invocador"
        />
      </SearchForm>

      <AccountSpace>
        <button className="login">Login</button>
        <button className="SignUp">Sign Up</button>
      </AccountSpace>
    </Container>
  );
}
export default withRouter(Header);
