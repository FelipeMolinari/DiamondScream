import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import retornaMoldura from "../../utils/defineMoldura";
import axios from "axios";
import api from "../../services/api";
import {
  getQueuesUnranked,
  winRate,
  nameQueue,
  colorTier
} from "../../utils/leagueFuncs";
import BoxContainer from "../../Components/BoxContainer/styles";
import { FaCheckCircle } from "react-icons/fa";
import { Container, UserInfo, LeaguesInfo, League } from "./styles";

export default function() {
  const isInitialMount = useRef(true);
  const { summonerName, region } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    userName: "",
    accountId: "",
    summonerId: "",
    summonerLevel: "",
    profileIconId: "",
    region: ""
  });

  const [summonerDetails, setSummonerDetails] = useState({
    profileIconURL: "",
    leagueDetails: []
  });

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getSummoner = async () => {
      setIsLoading(true);

      try {
        const response = await api.get(
          `/https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
          {
            cancelToken: source.token
          }
        );

        if (response) {
          const {
            profileIconId,
            name,
            summonerLevel,
            accountId,
            id
          } = response.data;
          setProfileDetails({
            ...profileDetails,
            userName: name,
            accountId,
            summonerId: id,
            summonerLevel,
            profileIconId
          });
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Cancelled request");
        } else {
          throw error;
        }
      }
    };
    getSummoner();

    return () => {
      console.log("Cancelled request");
      source.cancel();
    };
  }, [summonerName]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const changeSummonerDetails = async () => {
        const responseLeague = await api.get(
          `/https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${profileDetails.summonerId}`
        );
        setIsLoading(false);
        setSummonerDetails({
          profileIconURL: `http://ddragon.leagueoflegends.com/cdn/10.3.1/img/profileicon/${profileDetails.profileIconId}.png`,
          leagueDetails: responseLeague.data
        });
      };
      changeSummonerDetails();
    }
  }, [profileDetails]);

  const { userName, summonerLevel } = profileDetails;
  const { profileIconURL } = summonerDetails;
  return (
    <Container>
      {isLoading ? (
        <img
          className="loading"
          src={process.env.PUBLIC_URL + "/loading.svg"}
        />
      ) : (
        <div className="content">
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
          <LeaguesInfo className="ranked_solo">
            {getQueuesUnranked(summonerDetails.leagueDetails).map(
              (queue, index) =>
                queue ? (
                  <BoxContainer key={queue.leagueId}>
                    <League colorTier={colorTier(queue.tier)}>
                      <img
                        src={`/emblemasElo/${queue.tier}.png`}
                        size={26}
                        alt=""
                      />
                      <div>
                        <p className="queue_type">
                          {nameQueue(queue.queueType)}
                        </p>
                        <h1 className="queue_tier">{queue.tier}</h1>
                        <span className="points">
                          <strong>{queue.leaguePoints}</strong> LP |{" "}
                          <strong>{queue.wins}</strong> Wins |{" "}
                          <strong>{queue.losses}</strong> Lose
                        </span>
                        <span>
                          Win Rate:
                          <strong> {winRate(queue.wins, queue.losses)}</strong>
                        </span>
                      </div>
                    </League>
                  </BoxContainer>
                ) : (
                  <BoxContainer key={index}>
                    <League colorTier={colorTier("UNRANKED")}>
                      <img src={`/emblemasElo/UNRANKED.png`} size={26} alt="" />
                      <div>
                        {index == 0 ? (
                          <p className="queue_type">Ranked Solo</p>
                        ) : (
                          <p className="queue_type">Ranked Flex</p>
                        )}
                        <h1 className="queue_tier">Unranked</h1>
                      </div>
                    </League>
                  </BoxContainer>
                )
            )}
          </LeaguesInfo>
        </div>
      )}
    </Container>
  );
}
