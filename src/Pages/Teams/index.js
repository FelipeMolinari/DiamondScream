import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import SectionContainer from "../../Components/SectionContainer/styles";
import api from "../../services/api";
import * as d3 from "d3";

// Tela de teste, pra não precisar carregar a API do lol
export default function() {
  var data = [1, 1, 2, 3, 5, 8, 13, 21];
  var arcs = d3.pie()(data);

  console.log(arcs);
  return (
    <SectionContainer>
      <h2>Bar Example (custom size)</h2>
      <div className="chart"></div>
    </SectionContainer>
  );
}
