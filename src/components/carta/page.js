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


function Page(props) {
    
   
   debugger;
   const {golpeFluido,golpeGas, cartas, pozoId} = props;
  

   let cartasPozoId = cartas.filter(c => c.pozoid === 1);
  
    return (
        <Fragment>
            
            
            <CssBaseline />
            
                
            <Typography gutterBottom variant="h5" component="h2">
                              Pozo X
                            </Typography>
                            
            <Slider>             
           
            {cartasPozoId.map(carta => (<Paper
                    elevation={1}
                    className="paper-container"
                >
                
                    {carta ?
                        <Fragment>
                            

                            <div
                                className="item-image"
                                style={{
                                    backgroundImage: `url(${carta.image})`,
                                }}
                            />

                           
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
