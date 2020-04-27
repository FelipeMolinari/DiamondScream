export function getParticipantIdByAccountId(id, participantsIdentities) {
  return participantsIdentities.find(
    participant => participant.player.currentAccountId == id
  ).participantId;
}

export function getParticipantByParticipantId(id, participants) {
  return participants.find(participant => participant.participantId == id);
}
export function getParticipantSummonerNameBy(
  participantId,
  participantsIdentities
) {
  return participantsIdentities.find(
    participant => participant.participantId == participantId
  ).player.summonerName;
}
export function getResultsMatch(resultWin) {
  if (resultWin) {
    return "Victory";
  } else {
    return "Defeat";
  }
}

export function getQueueType(queueId) {
  if (queueId == 440) {
    return "Ranked Flex";
  } else if (queueId == 420) {
    return "Ranked Solo";
  } else if (queueId == 900) {
    return "URF";
  } else {
    return "Default";
  }
}

export function formatGameDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = (duration - minutes * 60).toFixed(0);

  return `${minutes} mins ${seconds} secs`;
}

export function csPerMinutes(cs, duration) {
  const minutes = Math.floor(duration / 60);

  return (cs / minutes).toFixed(2);
}

function teamPriority(team) {
  const teamPriority = team.map(element => {
    if (element.timeline.lane == "TOP") {
      if (
        element.timeline.role == "SOLO" ||
        element.timeline.role == "DUO_CARRY"
      ) {
        return { ...element, priority: 1 };
      } else if (element.timeline.role == "DUO_SUPPORT") {
        return { ...element, priority: 2 };
      }
      return { ...element, priority: 1 };
    } else if (element.timeline.lane == "JUNGLE") {
      return { ...element, priority: 3 };
    } else if (element.timeline.lane == "MIDDLE") {
      if (
        element.timeline.role == "SOLO" ||
        element.timeline.role == "DUO_CARRY"
      )
        return { ...element, priority: 4 };
      else if (element.timeline.role == "DUO_SUPPORT") {
        return { ...element, priority: 5 };
      }
    } else if (element.timeline.lane == "BOTTOM") {
      if (
        element.timeline.role == "SOLO" ||
        element.timeline.role == "DUO_CARRY"
      )
        return { ...element, priority: 6 };
      else if (element.timeline.role == "DUO_SUPPORT")
        return { ...element, priority: 7 };
    }
    return { ...element, priority: 7 };
  });
  return teamPriority;
}
export function matchParticipants(array) {
  const lenght = array.length;

  const team1 = teamPriority(array.slice(0, lenght / 2));
  const team2 = teamPriority(array.slice(lenght / 2, lenght));

  team1.sort((a, b) => {
    return a.priority - b.priority;
  });
  team2.sort((a, b) => {
    return a.priority - b.priority;
  });
  console.log("--------------------");
  console.log(team1, team2);
  // for (let index = 0; index < lenght / 2; index++) {
  //   console.log("time1");
  //   console.log(team1[index].timeline.role, team1[index].timeline.lane);
  //   console.log("time2");

  //   console.log(team2[index].timeline.role, team2[index].timeline.lane);
  // }

  return { team1, team2 };
}
