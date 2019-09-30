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
    return (
    <Fragment>
        <CssBaseline />        
         
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '175vh'}}>
         
            <div align="center">
            <div className='title'>
            WELL {JSON.parse(carta.well)} - CARD {JSON.parse(carta.cardNumber)} 
            </div> 

            <div className="sub-title" > 
                <h5>
                DATE {JSON.stringify(carta.date).slice(9,11)}/{JSON.stringify(carta.date).slice(6,8)}/{JSON.stringify(carta.date).slice(1,5)}
                </h5>
            </div>

            <Paper elevation={0} className="paper-container"> 
                <Highchart options={({
                        title: {
                            style: {
                                fontSize: 15+'px',
                                fontFamily: 'barlow,sans-serif'
                            },
                            text: 'PUMP CARD'
                        },
                        chart: {
                            type: 'scatter',
                            style: {
                                fontFamily: 'barlow,sans-serif'
                            }
                        },   
                        plotOptions:
                        {   series: {lineWidth: 3}},                        
                        series: [{data : cartaFondo(carta)}]
                        }
                    )}
                />
                    
            </Paper> 
            <br/>

            <Paper elevation={0} className="paper-container"> 
                <Highchart options={({
                        title: {
                            style: {
                                fontSize: 15+'px',
                                fontFamily: 'barlow,sans-serif'
                            },
                            text: 'SURFACE CARD' 
                        },
                        chart: {
                            type: 'scatter',
                            style: {
                                fontFamily: 'barlow,sans-serif'
                            }
                        },   
                        plotOptions:
                        {   series: {lineWidth: 3}},                        
                        series: [{data : cartaSuperficie(carta)}]
                        }
                    )}
                /> 
            </Paper>
           
            </div>           
           
        </div>
    </Fragment>
    );
}

export default Page;
/*
<div classname="botones" align="center">
                       
                    
                </div>*/