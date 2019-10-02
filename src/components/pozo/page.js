import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import { cartaFondo, cartaSuperficie } from "../../cartaXY";
import { Link } from 'react-router-dom';

function Page(props) {

    const { cartasPozo, pozoId } = props;

    const pumpCard = cartasPozo.length ? cartaFondo(cartasPozo[0]) : {};
    const surfaceCard = cartasPozo.length ? cartaSuperficie(cartasPozo[0]) : {};
    const last5Cards = cartasPozo.length ? cartasPozo.slice(0, 5) : [];

    const numeroCarta = cartasPozo.length ? JSON.parse(cartasPozo[0].cardNumber) : "";

    return Object.keys(pozoId).length>0 ? (
        <Fragment>
            <CssBaseline />

            <button className="botonCartas" >
                <Link className="botonTexto" to={"/pozos/"+ pozoId + "/cartas" }>Ver Cartas</Link>
            </button>

            <div className='title' id='titlePozo'>
                POZO {pozoId} </div>


            <div className="info-container" >
                hola gon
            </div>

            <div className="papers-container">

                <Paper elevation={0} className="paper-container">

                    <Highchart options={({
                        title: {
                            style: {
                                fontSize: 15 + 'px',
                                fontFamily: 'barlow,sans-serif'
                            },
                            text: "CARTA DE FONDO " + numeroCarta,
                        },
                        colors: ['#64B5A4'],
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