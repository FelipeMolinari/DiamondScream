import React from "react";
import {
  LeaguesInfo,
  League,
  MatchesList,
  MatchItem,
  LinkProfile
} from "./styles";
import {
  getImageChampionById,
  getImageSummonerSpellById
} from "../../utils/getImages";
import differenceTimestamp from "../../utils/timestampDifference";
import {
  getParticipantIdByAccountId,
  getParticipantByParticipantId,
  getResultsMatch,
  getQueueType,
  formatGameDuration,
  csPerMinutes,
  matchParticipants,
  getParticipantSummonerNameBy
} from "../../utils/matchesFunctions";
import BoxContainer from "../../Components/BoxContainer/styles";

import {
  getQueuesUnranked,
  winRate,
  nameQueue,
  colorTier
} from "../../utils/leagueFuncs";

import GraphRoles from "../Home";
function OverView({ data }) {
  const { leagueDetails, matches, region } = data;
  let actualDate = Date.now();

  return (
    <div>
      <LeaguesInfo className="ranked_solo">
        {getQueuesUnranked(leagueDetails).map((queue, index) =>
          queue ? (
            <BoxContainer key={queue.leagueId}>
              <League colorTier={colorTier(queue.tier)}>
                <img src={`/emblemasElo/${queue.tier}.png`} size={26} alt="" />
                <div>
                  <p className="queue_type">{nameQueue(queue.queueType)}</p>
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
              <GraphRoles />
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
      <BoxContainer>
        <MatchesList>
          {matches.map(match => {
            const participantId = getParticipantIdByAccountId(
              match.details.accountId,
              match.participantIdentities
            );
            const participantDetails = getParticipantByParticipantId(
              participantId,
              match.participants
            );
            const {
              win,
              item0,
              item1,
              item2,
              item3,
              item4,
              item5,
              item6,
              kills,
              deaths,
              assists,
              largestMultiKill,
              goldEarned,
              champLevel,
              totalMinionsKilled,
              neutralMinionsKilled
            } = participantDetails.stats;

            const itens = [item0, item1, item2, item3, item4, item5];

            const { team1, team2 } = matchParticipants(match.participants);

            return (
              <MatchItem key={match.gameId} win={win}>
                <div>
                  {/* Champion played spells  */}
                  <div className="content_row">
                    <div className="content_collumn">
                      <span className="difference_time">
                        {differenceTimestamp(actualDate, match.gameCreation)}
                      </span>
                      <img
                        className="champ_played"
                        src={
                          process.env.PUBLIC_URL +
                          `/img/champion/${getImageChampionById(
                            match.details.champion
                          )}`
                        }
                      />
                    </div>

                    <div className="content_collumn">
                      <img
                        className="spell"
                        src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/spell/${getImageSummonerSpellById(
                          participantDetails.spell1Id
                        )}`}
                        alt=""
                      />
                      <img
                        className="spell"
                        src={`http://ddragon.leagueoflegends.com/cdn/10.3.1/img/spell/${getImageSummonerSpellById(
                          participantDetails.spell2Id
                        )}`}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* Victory or Defeat, queue Type, matchduration */}
                  <div className="content_collumn">
                    <span className="result_match">{getResultsMatch(win)}</span>
                    <span className="medio">{getQueueType(match.queueId)}</span>
                    <span className="weak">
                      {formatGameDuration(match.gameDuration)}
                    </span>
                  </div>

                  {/* Level, kill/death/assists, farm, gold earned  */}
                  <div className="content_collumn">
                    <span className="strong">Level {champLevel}</span>

                    <div className="content_row">
                      <span className="medio kill">{kills}</span>/
                      <span className="medio death">{deaths}</span>/
                      <span className="medio assists">{assists}</span>
                    </div>

                    <span className="medio">
                      {totalMinionsKilled + neutralMinionsKilled} cs (
                      {csPerMinutes(
                        totalMinionsKilled + neutralMinionsKilled,
                        match.gameDuration
                      )}
                      /min)
                    </span>
                    <span className="medio">Gold Earned: {goldEarned}</span>
                  </div>

                  {/* Itens */}
                  <div className="content_row">
                    <div className="items_group">
                      {itens.map((item, index) =>
                        item != 0 ? (
                          <img
                            className="item_slot"
                            key={index}
                            src={
                              process.env.PUBLIC_URL + `/img/item/${item}.png`
                            }
                          />
                        ) : (
                          <div key={index} className="item_slot"></div>
                        )
                      )}
                    </div>
                    <img
                      className="item_slot"
                      src={process.env.PUBLIC_URL + `/img/item/${item6}.png`}
                    />
                  </div>

                  {/* Participants */}
                  <div className="content_collumn">
                    {team1.map((participant, index) => {
                      const team1PlayerName = getParticipantSummonerNameBy(
                        participant.participantId,
                        match.participantIdentities
                      );
                      const team2PlayerName = getParticipantSummonerNameBy(
                        team2[index].participantId,
                        match.participantIdentities
                      );

                      return (
                        <div className="content_row">
                          <LinkProfile
                            to={`/profile/${region}/${team1PlayerName}/overview`}
                            className="medio"
                          >
                            {team1PlayerName}
                          </LinkProfile>
                          <img
                            className="champion_small_img"
                            src={
                              process.env.PUBLIC_URL +
                              `/img/champion/${getImageChampionById(
                                participant.championId
                              )}`
                            }
                          />
                          <img
                            className="champion_small_img"
                            src={
                              process.env.PUBLIC_URL +
                              `/img/champion/${getImageChampionById(
                                team2[index].championId
                              )}`
                            }
                          />
                          <LinkProfile
                            to={`/profile/${region}/${team2PlayerName}/overview`}
                            className="medio"
                          >
                            {team2PlayerName}
                          </LinkProfile>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </MatchItem>
            );
          })}
        </MatchesList>
      </BoxContainer>
    </div>
  );
}
export default OverView;
