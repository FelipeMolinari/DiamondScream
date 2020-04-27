export default function differenceTimestamp(timestamp1, timestamp2) {
  let difference = timestamp1 - timestamp2;
  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);

  if (daysDifference + 1 == 1) {
    return `${Math.floor(difference / 1000 / 60 / 60)} horas atrás `;
  }
  if (daysDifference + 1 >= 30) {
    return "Um mês atrás";
  }
  return daysDifference + 1 + " dias atrás";
}
