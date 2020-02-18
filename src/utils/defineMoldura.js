import React from "react";

function retornaMoldura(nivel) {
  const molduraLevel = Math.floor(nivel / 25);

  return (
    <img
      src={`/MoldurasLevel/${molduraLevel}.png`}
      alt="Moldura"
      className="border"
    />
  );
}

export default retornaMoldura;
