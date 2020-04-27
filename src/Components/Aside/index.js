import React from "react";
import { Container, SidebarLink } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { GiThreeFriends, GiTrophy } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";

export default function Aside() {
  return (
    <Container>
      <SidebarLink to="/">
        <AiFillHome size={26} />
        <span>Home</span>
      </SidebarLink>
      <SidebarLink to="/teams">
        <GiThreeFriends size={26} />
        <span>Teams</span>
      </SidebarLink>
      <SidebarLink to="/">
        <FaSearch size={26} />
        <span>Buscar Scrims</span>
      </SidebarLink>
      <SidebarLink to="/">
        <GiTrophy size={26} />
        <span>Tournaments</span>
      </SidebarLink>
    </Container>
  );
}
