import React, { useEffect, useState } from "react";
import { Bar, defaults } from "react-chartjs-2";
import SectionContainer from "../../Components/SectionContainer/styles";
import { ChartContainer } from "./styles";
import api from "../../services/api";

// Tela de teste, pra não precisar carregar a API do lol
export default function() {
  const chartReference = React.createRef();
  // defaults.scale.gridLines.drawOnChartArea = false;

  const [LaneWinrate, setLaneWinRate] = useState({
    lanes: {
      top: { wins: "", loses: "", winrate: "" },
      jungle: { wins: "", loses: "", winrate: "" },
      middle: { wins: "", loses: "", winrate: "" },
      carry: { wins: "", loses: "", winrate: "" },
      supp: { wins: "", loses: "", winrate: "" }
    },
    geralWinrate: "",
    loses: "",
    wins: ""
  });

  const [data, setData] = useState({
    labels: [
      ["Top", "games", "winRate"],
      ["Jungle", "games", "winRate"],
      ["Middle", "games", "winRate"],
      ["Adc", "games", "winRate"],
      ["Supp", "games", "winRate"]
    ],

    datasets: [
      {
        label: "Wins",
        backgroundColor: "#7ACC9B",
        data: [3, 7, 4, 0, 2]
      },
      {
        label: "Loses",
        backgroundColor: "#CC857A",
        data: [4, 3, 5, 1, 1]
      }
    ],
    options: {
      maintainAspectRatio: false,
      legend: { display: false },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      scales: {
        xAxes: [
          {
            categoryPercentage: 0.5,
            barPercentage: 1.0,
            gridLines: {
              // drawBorder: true,
              // display: false
            },
            ticks: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              drawBorder: true,
              display: false
            },
            ticks: {
              display: false
            }
          }
        ]
      }
    }
  });

  // Atividade
  // Role Distribuition
  // MOST PLAYED WITH
  const matches = [
    {
      lane: "TOP",
      gameId: 1846363128,
      champion: 17,
      platformId: "BR1",
      timestamp: 1580072683049,
      queue: 440,
      role: "SOLO",
      season: 13
    },
    {
      lane: "TOP",
      gameId: 1846307438,
      champion: 17,
      platformId: "BR1",
      timestamp: 1580070397893,
      queue: 440,
      role: "SOLO",
      season: 13
    }
    // {
    //   lane: "NONE",
    //   gameId: 1846210270,
    //   champion: 92,
    //   platformId: "BR1",
    //   timestamp: 1580059417451,
    //   queue: 440,
    //   role: "DUO_SUPPORT",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1846190219,
    //   champion: 17,
    //   platformId: "BR1",
    //   timestamp: 1580054579029,
    //   queue: 440,
    //   role: "SOLO",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1845983162,
    //   champion: 17,
    //   platformId: "BR1",
    //   timestamp: 1580011414961,
    //   queue: 440,
    //   role: "SOLO",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1845908140,
    //   champion: 17,
    //   platformId: "BR1",
    //   timestamp: 1580008828727,
    //   queue: 440,
    //   role: "SOLO",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1845901736,
    //   champion: 17,
    //   platformId: "BR1",
    //   timestamp: 1580006140786,
    //   queue: 440,
    //   role: "SOLO",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1839687875,
    //   champion: 92,
    //   platformId: "BR1",
    //   timestamp: 1579397545518,
    //   queue: 440,
    //   role: "SOLO",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1839623735,
    //   champion: 92,
    //   platformId: "BR1",
    //   timestamp: 1579392213233,
    //   queue: 440,
    //   role: "DUO_CARRY",
    //   season: 13
    // },
    // {
    //   lane: "BOTTOM",
    //   gameId: 1839578394,
    //   champion: 89,
    //   platformId: "BR1",
    //   timestamp: 1579390210461,
    //   queue: 440,
    //   role: "DUO_SUPPORT",
    //   season: 13
    // },
    // {
    //   lane: "JUNGLE",
    //   gameId: 1839188223,
    //   champion: 32,
    //   platformId: "BR1",
    //   timestamp: 1579364281633,
    //   queue: 440,
    //   role: "NONE",
    //   season: 13
    // },
    // {
    //   lane: "JUNGLE",
    //   gameId: 1839193941,
    //   champion: 64,
    //   platformId: "BR1",
    //   timestamp: 1579362192201,
    //   queue: 440,
    //   role: "NONE",
    //   season: 13
    // },
    // {
    //   lane: "NONE",
    //   gameId: 1838985033,
    //   champion: 76,
    //   platformId: "BR1",
    //   timestamp: 1579320335303,
    //   queue: 440,
    //   role: "DUO_SUPPORT",
    //   season: 13
    // },
    // {
    //   lane: "JUNGLE",
    //   gameId: 1838432909,
    //   champion: 76,
    //   platformId: "BR1",
    //   timestamp: 1579292286720,
    //   queue: 440,
    //   role: "NONE",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1838214784,
    //   champion: 86,
    //   platformId: "BR1",
    //   timestamp: 1579271053342,
    //   queue: 440,
    //   role: "SOLO",
    //   season: 13
    // },
    // {
    //   lane: "JUNGLE",
    //   gameId: 1838221489,
    //   champion: 133,
    //   platformId: "BR1",
    //   timestamp: 1579269236581,
    //   queue: 440,
    //   role: "NONE",
    //   season: 13
    // },
    // {
    //   lane: "NONE",
    //   gameId: 1837937347,
    //   champion: 92,
    //   platformId: "BR1",
    //   timestamp: 1579227442560,
    //   queue: 440,
    //   role: "DUO_SUPPORT",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1837906538,
    //   champion: 92,
    //   platformId: "BR1",
    //   timestamp: 1579224153107,
    //   queue: 440,
    //   role: "SOLO",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1837695278,
    //   champion: 92,
    //   platformId: "BR1",
    //   timestamp: 1579212453751,
    //   queue: 440,
    //   role: "SOLO",
    //   season: 13
    // },
    // {
    //   lane: "JUNGLE",
    //   gameId: 1837382869,
    //   champion: 92,
    //   platformId: "BR1",
    //   timestamp: 1579189806101,
    //   queue: 440,
    //   role: "NONE",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1836986386,
    //   champion: 92,
    //   platformId: "BR1",
    //   timestamp: 1579145686045,
    //   queue: 440,
    //   role: "SOLO",
    //   season: 13
    // },
    // {
    //   lane: "JUNGLE",
    //   gameId: 1836537825,
    //   champion: 2,
    //   platformId: "BR1",
    //   timestamp: 1579120335610,
    //   queue: 440,
    //   role: "NONE",
    //   season: 13
    // },
    // {
    //   lane: "TOP",
    //   gameId: 1836540693,
    //   champion: 875,
    //   platformId: "BR1",
    //   timestamp: 1579117933349,
    //   queue: 440,
    //   role: "SOLO",
    //   season: 13
    // }
  ];

  // useEffect(() => {
  //   async function callApi() {
  //     let matchesPromises = matches.map(game => {
  //       return api.get(
  //         `/https://br1.api.riotgames.com/lol/match/v4/matches/${game.gameId}`
  //       );
  //     });
  //     console.log(matchesPromises);

  //     matchesPromises = [].concat.apply([], matchesPromises);

  //     const responseMatchs = await Promise.all(matchesPromises);
  //     console.log(responseMatchs);
  //   }

  //   callApi();
  // }, []);

  useEffect(() => {
    console.log(chartReference);
  }, []);

  return (
    <SectionContainer>
      <ChartContainer>
        <Bar
          ref={chartReference}
          data={data}
          options={data.options}
          width={300}
        />

        <div className="labels">
          <div className="lanes">
            <div className="column">
              <img
                src={process.env.PUBLIC_URL + "/lanes/Top_icon.png"}
                alt=""
              />
              <span className="games">20</span>
              <span className="winrate">20%</span>
            </div>
            <div className="column">
              <img
                src={process.env.PUBLIC_URL + "/lanes/Jungle_icon.png"}
                alt=""
                srcset=""
              />
              <span className="games">20</span>
              <span className="winrate">20%</span>
            </div>
            <div className="column">
              <img
                src={process.env.PUBLIC_URL + "/lanes/Middle_icon.png"}
                alt=""
                srcset=""
              />
              <span className="games">20</span>
              <span className="winrate">20%</span>
            </div>

            <div className="column">
              <img
                src={process.env.PUBLIC_URL + "/lanes/Bottom_icon.png"}
                alt=""
                srcset=""
              />
              <span className="games">20</span>
              <span className="winrate">100%</span>
            </div>
            <div className="column">
              <img
                src={process.env.PUBLIC_URL + "/lanes/Support_icon.png"}
                alt=""
                srcset=""
              />
              <span className="games">20</span>
              <span className="winrate">20%</span>
            </div>
          </div>
        </div>
      </ChartContainer>
    </SectionContainer>
  );
}
