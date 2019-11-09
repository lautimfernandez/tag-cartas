import React from 'react';
import CardsPozos from "../cardsPozos";
import Grid from '@material-ui/core/Grid';


export default function Page(props) {

  const {pozos, cartas} = props;

  const obtenerCarta = (p, cartas) =>{
    const aux =  cartas.filter(c => (c.well === p.id))[0];
    return aux;
  }

  return Object.keys(cartas).length>0 ? (

    <Grid container id="root-pozos" alignItems="stretch" alignContent="stretch" spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {pozos.map(p => (
            <Grid key={p.id} item>
              <CardsPozos pozo={p} carta={obtenerCarta(p, cartas)}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
  ) 
  : ( <div id="spinner">
        <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div>
    </div>);

}
