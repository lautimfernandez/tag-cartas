import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import './styles.css';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import {cartaFondo, cartaSuperficie} from "../../cartaXY";
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';


function Page(props) {
   
    const {carta} = props;
    const c = carta ? carta : {};
    const diagnose = c.diagnose ? c.diagnose : "Sin problemas";
    const fecha = c.date ? JSON.stringify(c.date).slice(9,11)+"/"+JSON.stringify(c.date).slice(6,8)+"/"+JSON.stringify(c.date).slice(1,5) : "";
    const porcentaje = c.diagnose ? "80%" : "100%";
    
    return Object.keys(carta).length>0 ?
        
    (
                
    <Fragment>
    <CssBaseline />        
     
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: 100 + '%'}}>
     
        <div className="container">

            <div className='title'>
            <span>
            POZO  {carta.well}
                </span>
            </div> 

            <div className="info-container">
                <Card className="card">
                    <CardActionArea>
                        <CardContent className="header">
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={diagnose==="Sin problemas" ? "withoutProblemColor" : "problemColor"}>
                                    </Avatar>}
                                title={<Typography variant="h5"  component="p" alignContent='right' textAlign='right'>
                                {"Carta " + c.cardNumber}</Typography>}
                            />
                        </CardContent>

                        <CardContent className="media">
                            
                            <Typography variant="body2"  component="p">
                            {"Diagnóstico: " + diagnose }
                            </Typography>

                            <Typography variant="body2"  component="p">
                            {"Probabilidad: " + porcentaje }
                            </Typography>

                            <Typography variant="body2"  component="p">
                            {"Última actualización: "+ fecha}
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        
            <div className="papers-container" >

                <Paper elevation={0} className="paper-container">

                    <Highchart options={({
                        title: {
                            style: {
                                fontSize: 15 + 'px',
                                fontFamily: 'barlow,sans-serif'
                            },
                            text: "CARTA DE FONDO " + carta.cardNumber,
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
                            text: "CARTA DE SUPERFICIE " + carta.cardNumber,
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
: ( <div id="spinner">
        <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
        </div>
    </div>)
}

export default Page;
