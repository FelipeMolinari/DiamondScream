import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import api from "../../services/api";
import { Container } from "./styles";
import OverView from "../OverView";
import SectionContainer from "../../Components/SectionContainer/styles";

import ProfileContainer from "../../Components/ProfileContainer";

export default function() {
  const isInitialMount = useRef(true);
  const { summonerName, region } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [profileDetails, setProfileDetails] = useState({
    userName: "",
    accountId: "",
    summonerId: "",
    summonerLevel: "",
    region: "",
    profileIconURL: ""
  });

  const [summonerDetails, setSummonerDetails] = useState({
    leagueDetails: [],
    matches: []
  });

  useEffect(() => {
    setIsLoading(true);
    const source = axios.CancelToken.source();
    const getSummoner = async () => {
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
            profileIconURL: `http://ddragon.leagueoflegends.com/cdn/10.3.1/img/profileicon/${profileIconId}.png`
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
        const [responseLeague, responseMatchs] = await Promise.all([
          api.get(
            `/https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${profileDetails.summonerId}`
          ),
          api.get(
            `/https://${region}.api.riotgames.com/lol/match/v4/matchlists/by-account/${profileDetails.accountId}`,
            {
              params: {
                endIndex: 10
              }
            }
          )
        ]);

        let matchDetails = [];
        matchDetails = responseMatchs.data.matches.map(match => {
          return {
            id: match.gameId,
            lane: match.lane,
            champion: match.champion,
            queue: match.queue,
            role: match.role,
            season: match.season
          };
        });

        let matchesPromises = matchDetails.map(game => {
          return api.get(
            `/https://${region}.api.riotgames.com/lol/match/v4/matches/${game.id}`
          );
        });

        matchesPromises = [].concat.apply([], matchesPromises);

        let matches = await Promise.all(matchesPromises);

        // const size = 2;

        // let matchesArrayOfArray = [];
        // for (let i = 0; i < matches.length; i += size) {
        //   matchesArrayOfArray.push(matches.slice(i, i + size));
        // }
        // console.log(matchesArrayOfArray);

        const matchResponse = matches.map(match => {
          return {
            ...match.data,
            details: {
              ...matchDetails.find(item => match.data.gameId == item.id),
              accountId: profileDetails.accountId
            }
          };
        });

        setIsLoading(false);
        setSummonerDetails({
          leagueDetails: responseLeague.data,
          matches: matchResponse
        });
      };
      changeSummonerDetails();
    }
  }, [profileDetails]);

  return (
    <SectionContainer>
      <Container>
        {isLoading ? (
          <img
            className="loading"
            src={process.env.PUBLIC_URL + "/loading.svg"}
          />
        ) : (
          <div className="content">
            <ProfileContainer data={profileDetails} />

            <OverView data={{ ...summonerDetails, region }} />
          </div>
        )}
      </Container>
    </SectionContainer>
  );
}
