import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import '../general-styles.css';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import { Link } from 'react-router-dom';
import { cartaFondo, cartaSuperficie } from "../../cartaXY";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const obtenerDiagnostico = (diagnose) => {
  switch (diagnose) {
    case ("noProblem"):
      return "Sin problemas"
    case (""):
      return "Sin diagnostico"
    default: {
      return diagnose.split(",").map(d => translate(d)).join(" | ");
    }
  }
}


const translate = (diagnose) => {
  switch (diagnose) {
    case ("gasInterference"):
      return "Interferncia de gas"
    case ("fluidStroke"):
      return "Golpe de fluido"
    case ("bombStroke"):
      return "Golpe de bomba"
    case ("flowingWell"):
      return "Pozo fluyente"
    case ("fishingRodRods"):
      return "Pesca de varillas de bombeo"
    default:
      return ""
  }
}

const obtenerColor = (diagnose, porcentaje) => {
  if (diagnose === "Sin problemas") {

    return "withoutProblemColor"

  } else if (diagnose === "Sin diagnostico") {
    return "undiagnosedColor"
  } else {
    return "problemColor"
  }
}

function Page(props) {
  const { carta } = props;
  const c = carta ? carta : {};
  let diagnose, fecha, porcentaje, time;

  if (Object.keys(carta).length > 0) {
    diagnose = obtenerDiagnostico(c.diagnose);
    fecha = c.date ? JSON.stringify(c.date).slice(9, 11) + "/" + JSON.stringify(c.date).slice(6, 8) + "/" + JSON.stringify(c.date).slice(1, 5) : "";
    porcentaje = diagnose === "Sin problemas" || diagnose === "Sin diagnostico" ? c.id * 100 / 6519 : 100;
    time = c.date ? JSON.stringify(c.date).slice(12, 17) : "";
  }

  return Object.keys(carta).length > 0 ? (

    <Fragment>
      <CssBaseline />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 + '%' }}>

        <div className="container">

          <div className='title'>
            <span>
              POZO  {carta.well}
            </span>
          </div>

          <div id="info-container-carta">
            <Card className="card">

              <CardContent
                className={obtenerColor(diagnose, porcentaje)}
              />

              <CardContent className="media">

                <div className="Dashboard-titles">
                  Carta {c.cardNumber}
                </div>

                <div class="dropdown-divider"></div>

                <div className="Dashboard-subtitles">
                  Diagnóstico: {diagnose}
                </div>

                <div className="Dashboard-subtitles">
                  Fecha: {fecha}
                </div>

                <div className="Dashboard-subtitles">
                  Hora: {time}
                </div>

              </CardContent>

            </Card>
            <br></br>

            <div className="buttons">
              <Link to={"/pozos/" + carta.well + "/cartas"}>
                <button type="button" class="btn btn-outline-info btn-space">
                  Volver a Cartas
                </button>
              </Link>

              <Link to={"/pozos/" + carta.well}>
                <button type="button" class="btn btn-outline-info btn-space">
                  Volver a Pozo
                </button>
              </Link>
            </div>

          </div>


          <div id="papers-container-carta" >

            <Paper elevation={0} className="paper-container">

              <Highchart options={({
                title: {
                  style: {
                    fontSize: 15 + 'px',
                    fontFamily: 'barlow,sans-serif'
                  },
                  text: "CARTA DE FONDO ",
                },
                colors: ['#E78B50'],
                chart: {
                  type: 'scatter',
                  style: {
                    fontFamily: 'barlow,sans-serif'
                  }
                },
                responsive: {
                  rules: [{
                    condition: {
                      callback: function () {
                        return false
                      }
                    },
                    chartOptions: {
                      legend: {
                        enabled: false
                      }
                    }
                  }]
                },
                plotOptions:
                  { series: { lineWidth: 1.5 } },
                series:
                  [{
                    data: cartaFondo(carta),
                    name: 'Carta'
                  }],
                updateArgs: [true, true, true]
              })
              } />

            </Paper>

            <br />
            <Paper elevation={0} className="paper-container">

              <Highchart oneToOne="false" options={({
                title: {
                  style: {
                    fontSize: 15 + 'px',
                    fontFamily: 'barlow,sans-serif'
                  },
                  text: "CARTA DE SUPERFICIE",
                },
                colors: ['#17726A'],
                chart: {
                  type: 'scatter',
                  style: {
                    fontFamily: 'barlow,sans-serif'
                  }
                },
                plotOptions:
                  { series: { lineWidth: 1.5 } },
                series:
                  [{
                    data: cartaSuperficie(carta),
                    name: 'Carta'
                  }]
              })
              } />

            </Paper>

          </div>

        </div>

      </div>
    </Fragment>
  )
    : (<div id="spinner">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>)
}

export default Page;
