import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import {cartaFondo, cartaSuperficie} from "../../cartaXY";


function Page(props) {
   
    const {carta} = props;
    debugger;
    const card = carta? carta : {};
    
    return (
        
    <Fragment>
        <CssBaseline />        
         
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '175vh'}}>
         
            <div align="center">
            <div className='title'>
            WELL  {card.well}
            </div> 
            
            <div style={
                {
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    height: 100 + '%',
                    width: 50 + '%'
                }}>


                <Paper elevation={0} className="paper-container">

                    <Highchart options={({
                        title: {
                            style: {
                                fontSize: 15 + 'px',
                                fontFamily: 'barlow,sans-serif'
                            },
                            text: "PUMP CARD " + card.cardNumber,
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
                                data: cartaFondo(card),
                                name: 'Card'
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
                            text: "SURFACE CARD " + card.cardNumber,
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
                                data: cartaSuperficie(card),
                                name: 'Card'
                            }]
                    })
                    } />

                </Paper>

            </div>
           
            </div>           
           
        </div>
    </Fragment>
    );
}

export default Page;
/*
<div classname="botones" align="center">
                       
                    
                </div>*/