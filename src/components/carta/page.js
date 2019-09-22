import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import Checkboxes from "../checkboxes";
import {cartaFondo, cartaSuperficie} from "../../cartaXY";
import { charts } from 'highcharts';

function Page(props) {
    
   const { cartas, updateState,pozoId} = props;
  
   
   const undiagnosedCards = cartas.filter(c => (c.diagnose ===""));
   //const pumpCards = cartasNoDiag.map(c => JSON.parse(c.pumpCardxDots).map((dot,index)=>[dot,JSON.parse(c.pumpCardyDots)[index]]))
   const pumpCards = undiagnosedCards.map(c => cartaFondo(c))
   const surfaceCards = undiagnosedCards.map(c => cartaSuperficie(c))
    
    return (
    <Fragment>
        <CssBaseline />        
         

        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '175vh'}}>
            <div style={{height:100+'%', width:50+'%'}}>
            
                <Slider className="slider">             
           
                    {undiagnosedCards.map((carta,index) => (
                        <div>
                        <div className='title'>
                        WELL {JSON.parse(cartas[index].well)} - CARD {JSON.parse(cartas[index].cardNumber)} 
                        </div> 

                        <div className="sub-title" > 
                            DATE
                        </div>

                        <Paper elevation={0} className="paper-container"> 
                            {carta ?
                                <Highchart options={({
                                        title: {
                                            style: {
                                                fontSize: 15+'px',
                                                fontFamily: 'barlow,sans-serif'
                                            },
                                            text: 'PUMP CARD'
                                        },
                                        chart: {
                                            style: {
                                                fontFamily: 'barlow,sans-serif'
                                            }
                                        },                         
                                        series: [{data : cartaFondo(carta)}]
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
                                            text: 'SURFACE CARD' 
                                        },
                                        chart: {
                                            style: {
                                                fontFamily: 'barlow,sans-serif'
                                            }
                                        },                         
                                        series: [{data : cartaSuperficie(carta)}]
                                        }
                                    )}
                                />
                                : 
                                <CircularProgress className='item-loader'/>
                            } 
                            </Paper>

                            <div className="checks" align="center">
                            <Checkboxes carta={cartas[index]} updateState={updateState} />
                            </div>
                        
                            </div>           
                            )
                        )
                    }
                </Slider>   
            </div>
        </div>
    </Fragment>
    );
}

export default Page;
/*
<div classname="botones" align="center">
                       
                    
                </div>*/