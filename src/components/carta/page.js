import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import './styles.css';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Highchart from "../highchart";


function Page(props) {
    
   
   debugger;
   const {golpeFluido,golpeGas, cartas} = props;
  
   const cartasXy = cartas.map(c => JSON.parse(c.pumpCardxDots).map((dot,index)=>[dot,JSON.parse(c.pumpCardyDots)[index]]))

  
    return (
        <Fragment>
            
            
            <CssBaseline />
            
                
            <Typography gutterBottom variant="h5" component="h2">
                              Pozo X
                            </Typography>
                            
            <Slider>             
           
            {cartasXy.map(carta => (<Paper
                    elevation={1}
                    className="paper-container"
                >
                    
                    {carta ?
                        <Fragment>
                            
                        <Highchart options={({title: {
                                            text: 'Pump Cards'
                                                },series: 
                          [{data : carta}]})
                        }/>
                       
                           
                        </Fragment>
                      

                        :
                        <CircularProgress className="item-loader" />
                    }
                    <div classname="botones" align="center">
                        
                        <Button color="primary" onClick={()=> {golpeGas(carta);}}>Golpe de gas</Button>
                        <Button color="primary" onClick={()=> {golpeFluido(carta);}} >Golpe de fluido</Button>
                    </div>
                   
                  

                </Paper>))}
                
          
            </Slider>   
            
                <Link to="/pozos">Pozos</Link>
        </Fragment>
    );
}

export default Page;
