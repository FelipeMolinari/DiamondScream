export const getQueuesUnranked = queues => {
  const rankedSolo = queues.find(element => {
    return element.queueType == "RANKED_SOLO_5x5";
  });
  const rankedFlex = queues.find(element => {
    return element.queueType == "RANKED_FLEX_SR";
  });
  const result = [];
  result.push(rankedSolo);
  result.push(rankedFlex);

  return result;
};

export const winRate = (win, lose) => {
  const total = win + lose;

  return `${((win / total) * 100).toFixed(0)}%`;
};

export const colorTier = tier => {
  switch (tier) {
    case "GOLD":
      return "#E5CC45";
    case "DIAMOND":
      return "#1467B4";
    case "SILVER":
      return "#D5D5D5";
    case "MASTER":
      return "#D5D5";
    case "CHALLENGER":
      return "#7ACCC1";
    default:
      return "#999";
  }
};

export const nameQueue = name => {
  const results = name
    .toLowerCase()
    .replace(/_/g, " ")
    .split(" ");

  return `${results[0]} ${results[1]}`;
};
