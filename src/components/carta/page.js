import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import Checkboxes from "../checkboxes";
import {cartaFondo} from "../../cartaXY";

function Page(props) {
    
   const { cartas, updateState,pozoId} = props;
  
   
   const cartasNoDiag = cartas.filter(c => (c.diagnose ===""));
   //const cartasXy = cartasNoDiag.map(c => JSON.parse(c.pumpCardxDots).map((dot,index)=>[dot,JSON.parse(c.pumpCardyDots)[index]]))
   const cartasXy = cartasNoDiag.map(c => cartaFondo(c))
    
    return (
    <Fragment>
        <CssBaseline />        
         

        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div style={{height:100+'%', width:50+'%'}}>
            
                <Slider className="slider">             
           
            {cartasXy.map((carta,index) => (
                
                <Paper elevation={0}
                    className="paper-container"> 

                <div className='title'>
                Pozo {JSON.parse(cartas[index].well)}  </div>

                <div className="checks" align="center">
                    <Checkboxes carta={cartas[index]} updateState={updateState} />
                </div>

                    {carta ?
                        <Highchart options={({title: {
                                         text: 'Carta dinamométrica '+JSON.parse(cartas[index].id)}                          
                                            ,series: [{data : carta}]})
                                        }
                        />
                        :
                        <CircularProgress className="item-loader" />
                    }
                    </Paper>))}


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