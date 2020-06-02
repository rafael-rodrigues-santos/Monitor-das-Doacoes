import React, { useState, useEffect } from "react";
import "./Graficos-indicadores.css";
import { FormattedMessage } from "react-intl";
import handMoney from "../../assets/img/graficos-indicadores/hand-money.png";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const GraficosIndicadores = (props) => {

  const [valores, setValores] = useState({
    total: 0,
    totalCampanhas: 0,
    maiorCampanha: 0,
    maiorLive: "",
    totalLives: 0,
    totalDoadores: 0,
    maiorDoador: "",
    maiorDoacao: 0,
    totalDoadoresCampanhas: 0,
    doacoesOrdenadas: [],

  });



// Atualiza os dados que serão tratados, somente quando recebe os valores das props 
  useEffect(() => {
    if (props.valor.status == "ok" && valores.maiorCampanha == 0) {
      setValores({
        maiorDoador: filtraMaiorDoador(props.valor["Doações"]),
        maiorCampanha: filtraMaiorCampanha(props.valor["Campanhas"]),
        maiorLive: maiorLive(props.valor["Lives"]),
        total: props.valor["Consolidação"][4][1],
        totalCampanhas: props.valor["Consolidação"][2][1],
        totalLives: props.valor["Consolidação"][3][1],
        totalDoadores: props.valor["Doações"].length - 2,
        totalDoadoresCampanhas: subtrai(
          props.valor["Consolidação"][6][1],
          valores.totalDoadores
        ),
        doacoesOrdenadas: ordenaDoacoes(props.valor["Doações"]),
  
      });
      
    }
  }, [props, valores.maiorCampanha]);



// Se a array com os valores para o gráfico estiver pronta, chama a atualização dele 
  useEffect(() => {
    if(valores.doacoesOrdenadas.length > 0 && valores.doacoesOrdenadas[0].doador.length > 0){
    updateSeries();
  }
}, [valores.doacoesOrdenadas]  )



  // Formata o número com arredondamento e adiciona os pontos nos milhares
  const formatNumber = (number) => {
    let formattedNumber = Math.round(number).toLocaleString("pt-BR");
    return formattedNumber;
  };

  // retorna o maior doador
  const filtraMaiorDoador = (array) => {
    let maiorDoacao = 0;
    let maiorDoador = [];

    for (let item of array) {
      if (
        item["Valor Anunciado"] > maiorDoacao &&
        item["Quem doa"] !== "Total"
      ) {
        maiorDoacao = item["Valor Anunciado"];
        maiorDoador = item;
      }
    }
    return maiorDoador;
  };


    // filtra a campanha com maior arrecadação 
  const filtraMaiorCampanha = (array) => {
    let maiorDoacao = 0;
    let maiorDoador = [];

    for (let item of array) {
      if (
        item["Valor Doado"] > maiorDoacao &&
        item["Organizador (a) / Beneficiário (a)"] !== "Total" &&
        item["Organizador (a) / Beneficiário (a)"] !== "Campanhas + lives" &&
        item["Organizador (a) / Beneficiário (a)"] !== "Campanhas"
      ) {
        maiorDoacao = item["Valor Doado"];
        maiorDoador = item;
      }
    }
    return maiorDoador;
  };

  const subtrai = (itemMaior, itemMenor) => {
    return itemMaior - itemMenor;
  };


  // filtra a live com maior arrecadação 
  const maiorLive = (array) => {
    let maiorDoacao = 0;
    let maiorLive = [];

    for (let item of array) {
      if (
        item[5] > maiorDoacao &&
        item[1] !== "Artista / Projeto" &&
        item[2] !== "Total"
      ) {
        maiorDoacao = item[5];
        maiorLive = item;
      }
    }
    return maiorLive;
  };

  // Calcula a porcentagem de uma valor sobre o outro 
  const porcentagem = (parte, total) => {
    return Math.round((parte * 100) / total);
  };


  // Ordena as doações pelo maior valor e retorna as 11 maiores 
  const ordenaDoacoes = (doacoes) => {
    let maioresDoacoes = [];

    let saida = doacoes.sort(function (a, b) {
      return b["Valor Anunciado"] - a["Valor Anunciado"];
    });

    for (let item = 2; item < 13; item++) {
      maioresDoacoes.push({
        doador: saida[item]["Quem doa"],
        valorDoado: saida[item]["Valor Anunciado"],
      });
    }
    console.log(maioresDoacoes)

    return maioresDoacoes;
    
  }


    // Opções do gráfico 
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "column",
      backgroundColor: "#F3F3F3",
    },
    colors: ["#4DB6AC"],
    title: {
      text: "",
    },
    plotOptions: {
      series: {
        groupPadding: 0,
        borderColor: "none",
      },
    },
    xAxis: {
      type: "category",
      lineWidth: 1,
      lineColor: "#707070",
      labels: {
        rotation: 0,
        style: {
          fontSize: "12px",
          fontFamily: "rubik, sans-serif",
          width: 9,
          textOverflow: "auto",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },

      gridLineDashStyle: "Dash",
      lineWidth: 2,
      lineColor: "#222222",
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      enable: false,
    },

    series: [
      {
        name: "Valor doado",
        data: [

        ],

        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#222222",
          y: 55, // 10 pixels down from the top
          style: {
            fontSize: "1.25em",
            fontFamily: "rubik, sans-serif",
            fontWeight: "400",
            textOutline: "none",
          },
        },
      },
    ],
  });


  // Atualiza as series do gráfico, é alimentado pela const doacoesOrdenadas e chamado quando essa const está pronta 
  const updateSeries = () => {
    setChartOptions({
      series: [
        {
          data: [
            [valores.doacoesOrdenadas[0]["doador"], valores.doacoesOrdenadas[0]["valorDoado"]],
            [valores.doacoesOrdenadas[1]["doador"], valores.doacoesOrdenadas[1]["valorDoado"]],
            [valores.doacoesOrdenadas[2]["doador"], valores.doacoesOrdenadas[2]["valorDoado"]],
            [valores.doacoesOrdenadas[3]["doador"], valores.doacoesOrdenadas[3]["valorDoado"]],
            [valores.doacoesOrdenadas[4]["doador"], valores.doacoesOrdenadas[4]["valorDoado"]],
            [valores.doacoesOrdenadas[5]["doador"], valores.doacoesOrdenadas[5]["valorDoado"]],
            [valores.doacoesOrdenadas[6]["doador"], valores.doacoesOrdenadas[6]["valorDoado"]],
            [valores.doacoesOrdenadas[7]["doador"], valores.doacoesOrdenadas[7]["valorDoado"]],
            [valores.doacoesOrdenadas[8]["doador"], valores.doacoesOrdenadas[8]["valorDoado"]],
            [valores.doacoesOrdenadas[9]["doador"], valores.doacoesOrdenadas[9]["valorDoado"]],
            [valores.doacoesOrdenadas[10]["doador"], valores.doacoesOrdenadas[10]["valorDoado"]],
          ],
        },
      ],
    });
  };

  return (
    <>
      <section className="section-chart-container">
        <div className="chart-indicators">
          <div className="div-chart">
            <h2 className="chart-title">
              <FormattedMessage id="chart-indicators-chart" />
            </h2>
            <div className="chart">

              {/* Import do gráfico  */}
              <HighchartsReact highcharts={Highcharts} options={chartOptions} />

            </div>

            <a
              href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=816672137"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="chart-indicators-button">
                <FormattedMessage id="chart-indicators-button" />
              </div>
            </a>
          </div>

          <div className="div-indicators">
            <h2 className="indicators-title">
              <FormattedMessage id="indicators-title" />
            </h2>

            <div className="indicators-subitem">
              <div>
                <img className="img-hand-money" src={handMoney} />
              </div>
              <div>
                <div>
                  <h3>
                    <FormattedMessage id="indicators-donations" />
                  </h3>
                  <h3>
                    <span className="span-h3">
                      R$ {formatNumber(valores.total)}{" "}
                    </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span>{formatNumber(valores.totalDoadores)}</span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="largest-donor" />:
                      {valores.maiorDoador["Quem doa"]}
                    </p>
                    <p>
                      <span className="valor-doado">
                        R${formatNumber(valores.maiorDoador["Valor Anunciado"])}
                      </span>
                      <span>
                        (
                        {porcentagem(
                          Number(valores.maiorDoador["Valor Anunciado"]),
                          Number(valores.total)
                        )}
                        )%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="linhas"></div>
            <div className="indicators-subitem">
              <div>
                <img className="img-hand-money" src={handMoney} />
              </div>
              <div>
                <div>
                  <h3>
                    <FormattedMessage id="donations-campaigns" />
                  </h3>
                  <h3>
                    <span className="span-h3">
                      R$ {formatNumber(valores.totalCampanhas)}
                    </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="total-doadores">
                      <FormattedMessage id="total-donors" />
                    </p>
                    <p>
                      <span>
                        {formatNumber(valores.totalDoadoresCampanhas)}
                      </span>
                    </p>
                  </div>

                  <div className="biggest-donor">
                    <p>
                      <FormattedMessage id="largest-campaign" />:{" "}
                      {valores.maiorCampanha["Campanhas"]}
                    </p>
                    <p>
                      <span className="valor-doado">
                        R${formatNumber(valores.maiorCampanha["Valor Doado"])}
                      </span>
                      <span>
                        (
                        {porcentagem(
                          Number(valores.maiorCampanha["Valor Doado"]),
                          Number(valores.totalCampanhas)
                        )}
                        )%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="linhas"></div>
            <div className="indicators-subitem">
              <div>
                <img className="img-hand-money" src={handMoney} />
              </div>
              <div>
                <div>
                  <h3>
                    <FormattedMessage id="donations-lives" />
                  </h3>
                  <h3>
                    <span className="span-h3">
                      R$ {formatNumber(valores.totalLives)}
                    </span>
                  </h3>
                </div>

                <div className="indicators-subitem-doadores">
                  <div>
                    <p className="biggest-donor">
                      <FormattedMessage id="biggest-live" />:{" "}
                      {valores.maiorLive[1]}
                    </p>

                    <p>
                      <span>R$ {formatNumber(valores.maiorLive[5])}</span>
                      <span>
                        (
                        {porcentagem(
                          Number(valores.maiorLive[5]),
                          Number(valores.totalLives)
                        )}
                        )%
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GraficosIndicadores;