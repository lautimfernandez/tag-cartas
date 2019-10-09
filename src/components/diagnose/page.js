import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import '../general-styles.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import Checkboxes from "../checkboxes";
import {cartaFondo, cartaSuperficie} from "../../cartaXY";

function Page(props) {
    
   const { cartas, updateState} = props;
 
   const undiagnosedCards = cartas.filter(c => (c.diagnose ===""));
   
    
    return (
    <Fragment>
        <CssBaseline />        
         
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '175vh'}}>
            
                <Slider className="slider">             
           
                    {undiagnosedCards.map((carta) => (
                        
                        <div align="center">
                        <div className='title'>
                        POZO {JSON.parse(carta.well)} - CARTA {JSON.parse(carta.cardNumber)} 
                        </div> 

                        <div className="sub-title-date" > 
                            <div>
                            FECHA {JSON.stringify(carta.date).slice(9,11)}/{JSON.stringify(carta.date).slice(6,8)}/{JSON.stringify(carta.date).slice(1,5)}
                            </div>
                        </div>

                        <div className="papers-container-diag">
                            <Paper elevation={0} className="paper-container"> 
                                {carta ?
                                    <Highchart options={({
                                            title: {
                                                style: {
                                                    fontSize: 15+'px',
                                                    fontFamily: 'barlow,sans-serif'
                                                },
                                                text: 'CARTA DE FONDO'
                                            },
                                            colors: ['#E78B50'],
                                            chart: {
                                                type: 'scatter',
                                                style: {
                                                    fontFamily: 'barlow,sans-serif'
                                                }
                                            },   
                                            plotOptions:
                                                { series: {lineWidth: 1.5}},                        
                                            series: 
                                                [{
                                                    data: cartaFondo(carta),
                                                    name: 'Carta'
                                                }]
                                            }
                                        )}
                                    />
                                    :
                                    <CircularProgress className='item-loader'/>
                                } 
                                
                                </Paper> 
                                <br/>

                                <Paper elevation={0} className="paper-container"> 
                                {carta ?
                                    <Highchart options={({
                                            title: {
                                                style: {
                                                    fontSize: 15+'px',
                                                    fontFamily: 'barlow,sans-serif'
                                                },
                                                text: 'CARTA DE SUPERFICIE' 
                                            },
                                            colors: ['#17726A'],
                                            chart: {
                                                type: 'scatter',
                                                style: {
                                                    fontFamily: 'barlow,sans-serif'
                                                }
                                            },   
                                            plotOptions:
                                                {series: {lineWidth: 1.5}},                        
                                            series: 
                                                [{
                                                    data: cartaSuperficie(carta),
                                                    name: 'Carta'
                                                }]
                                            }
                                        )}
                                    />
                                    : 
                                    <CircularProgress className='item-loader'/>
                                } 
                                </Paper>
                            </div>

                            <div className="checks" >
                            <Checkboxes carta={carta} updateState={updateState} />
                            </div>
                        
                            </div>           
                            )
                        )
                    }
                </Slider> 
        </div>
    </Fragment>
    );
}

export default Page;