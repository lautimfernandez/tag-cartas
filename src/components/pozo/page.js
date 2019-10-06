import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import { cartaFondo, cartaSuperficie } from "../../cartaXY";
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import '../general-styles.css';

const obtenerDiagnostico = (diagnose) =>{
    switch(diagnose){
      case("noProblem"):
        return "Sin problemas"
      case(""):
        return "Sin diagnostico"
      default:{
        return diagnose.split(",").map(d => translate(d)).join(" | ");
      }
    }
  }
  
    
  const translate = (diagnose) =>{
    switch(diagnose){
      case("gasInterference"):
        return "Interferncia de gas"
      case("fluidStroke"):
        return "Golpe de fluido"
      case("bombStroke"):
        return "Golpe de bomba"
      case("flowingWell"):
        return "Pozo fluyente"
      case("fishingRodRods"):
        return "Pesca de varillas de bombeo"
      default:
        return ""
    }
  }
    
  const obtenerColor = (diagnose,porcentaje) =>{
    if(diagnose==="Sin problemas"){
      if(porcentaje>60){
        return "withoutProblemColor"
      } else {
        return "futureProblemColor"
      }
    } else if(diagnose==="Sin diagnostico") {
      return "undiagnosedColor"
    } else {
      return "problemColor"
    }
  }
  

function Page(props) {

    const { cartasPozo, pozoId, wells } = props;
    const aWell = wells.find(w => w.number == pozoId);
    const well = aWell ? aWell : {};
    const pumpCard = cartasPozo.length ? cartaFondo(cartasPozo[0]) : {};
    const surfaceCard = cartasPozo.length ? cartaSuperficie(cartasPozo[0]) : {};
    const last5Cards = cartasPozo.length ? cartasPozo.slice(0, 5) : [];

    const numeroCarta = cartasPozo.length ? JSON.parse(cartasPozo[0].cardNumber) : "";

    const race = well ? well.race : "";
    const {carta} = props;
    const c = carta ? carta : {};
    
    let diagnose, porcentaje;

    if(Object.keys(pumpCard).length>0) {
      diagnose = obtenerDiagnostico(cartasPozo[0].diagnose);
      porcentaje = diagnose==="Sin problemas"  || diagnose ==="Sin diagnostico" ? c.id*100/2173 : 100;
    }
    
    return (Object.keys(well).length>0 & Object.keys(pumpCard).length>0) ? (
        <Fragment>
            <CssBaseline />


            <div className='title' id='titlePozo'>
                POZO {pozoId} </div>

            <div id="info-container-pozo">
                <Card id="card">
                   
                        <CardContent 
                        className={obtenerColor(diagnose,porcentaje)}
                            />

                        <CardContent className="media">
                            <div className="Dashboard-titles">
                            Información
                            </div>

                            <div class="dropdown-divider"></div>

                            <div className="Dashboard-subtitles">
                            Longitudes de tramos: 
                            </div>
                          
                            {well.wellLengthInFile.map(x =>
                             <div className="Dashboard-subtitles">
                             {"⇒ " + x +" m"}
                             </div>)}
                             
                             <br></br>

                            <div className="Dashboard-subtitles">
                            Diámetros de tramos:
                            </div>

                            {well.wellDiameters.map(x =>
                             <div className="Dashboard-subtitles">
                             {"⇒ " + x +" m"}
                             </div>)}

                             <br></br>

                            <div className="Dashboard-subtitles">
                            Carrera: {race}
                            </div>
                            
                            <br></br>

                            <div className="Dashboard-subtitles">
                            Diagnóstico: {diagnose}
                            </div>

                            <br></br>

                            <div className="Dashboard-subtitles">
                            Porcentaje: {porcentaje}%
                            </div>

                        </CardContent>
                  
                </Card>

            <br></br>

            <Link to={"/pozos/"+ pozoId + "/cartas" }>
                <button type="button" class="btn btn-outline-info">
                    Ver Cartas
                </button>
            </Link>
            

            </div>

            <div id="papers-container-pozo">

                <Paper elevation={0} className="paper-container">

                    <Highchart options={({
                        title: {
                            style: {
                                fontSize: 15 + 'px',
                                fontFamily: 'barlow,sans-serif'
                            },
                            text: "CARTA DE FONDO " + numeroCarta,
                        },
                        colors: ['#E78B50'],
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
                                data: pumpCard,
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
                            text: "CARTA DE SUPERFICIE " + numeroCarta,
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
                                data: surfaceCard,
                                name: 'Carta'
                            }]
                    })
                    } />

                </Paper>

                <br />

                <div className='title' id='titlePozo'>
                    ULTIMAS 5 CARTAS </div>

                <Paper elevation={0} className="paper-container">

                    <Highchart options={({
                        title: {
                            style: {
                                fontSize: 15 + 'px',
                                fontFamily: 'barlow,sans-serif'
                            },
                            text: "PUMP CARDS",
                        },
                        colors: ['#E9B65B', '#E78B50', '#17726A', '#A7D3C4', '#64B5A4'],
                        chart: {
                            type: 'scatter',
                            parallelCoordinates: true,
                            style: {
                                fontFamily: 'barlow,sans-serif'
                            }
                        },
                        plotOptions:
                            { series: { lineWidth: 2.5 } },
                        series:
                            last5Cards.map((card) => (
                                {
                                    name: 'Carta ' + card.cardNumber,
                                    data: cartaFondo(card),
                                    shadow: false
                                })
                            )
                    })
                    } />

                </Paper>
            </div>
        </Fragment>
    ) 
    : 
    ( 
    <div id="spinner">
        <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    );
}

export default Page;