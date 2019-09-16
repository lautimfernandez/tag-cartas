import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import './styles.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";
import Checkboxes from "../checkboxes";

function Page(props) {
    
   
   debugger;
   const { cartas, updateState,pozoId} = props;
  
   const cartasNoDiag = cartas.filter(c => (c.diagnose ===""));
   const cartasXy = cartasNoDiag.map(c => JSON.parse(c.pumpCardxDots).map((dot,index)=>[dot,JSON.parse(c.pumpCardyDots)[index]]))

    
    return (
        <Fragment>
            
            
            <CssBaseline />
            
                
            <Typography gutterBottom variant="h5" component="h2">
                              Pozo {pozoId}
            </Typography>
            
             
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <div style={{height:100+'%', width:50+'%'}}>
             <Slider >             
           
            {cartasXy.map((carta,index) => (<Paper
                    elevation={0}
                    className="paper-container"
                > 

                      
                
                <div className="checks" align="center">
                    <Checkboxes carta={cartas[index]} updateState={updateState} />
                </div>
                

                    {carta ?
                      
                            
                            
                        <Highchart options={({title: {
                                         text: 'Carta dinamométrica '+JSON.parse(cartas[index].id)
                                         +' - Pozo '+JSON.parse(cartas[index].well)
                                                }
                                        
                                                ,series: 
                          [{data : carta}]})
                        }/>
                       
                           
                        
                      

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