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
    const card = typeof carta !== "undefined" ? carta : {};
    
    return (
        
    <Fragment>
        <CssBaseline />        
         
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '175vh'}}>
         
            <div align="center">
            <div className='title'>
            WELL  
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