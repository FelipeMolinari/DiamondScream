import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import retornaMoldura from "../../utils/defineMoldura";
import { UserInfo } from "./styles";

export default function ProfileContainer({ data }) {
  const { profileIconURL, summonerLevel, userName } = data;

  return (
    <UserInfo>
      <div className="parent">
        <img src={profileIconURL} className="icon" />
        {retornaMoldura(summonerLevel)}
        <p className="level">{summonerLevel}</p>
      </div>
      <div>
        <h1>{userName}</h1>
        <FaCheckCircle size={26} />
      </div>
    </UserInfo>
  );
}
