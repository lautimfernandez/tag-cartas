import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import pozos from '../../data/pozos';
import { Link } from 'react-router-dom';
import CardsPozos from "../cardsPozos";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 40
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));



export default function Page(props) {
  const classes = useStyles();

  const {pozos, cartas} = props;

  const obtenerCarta = (p, cartas) =>{
    console.log(cartas);
    const aux =  cartas.filter(c => (c.well === p.id))[0];
    return aux;
  }

  return(

    <Grid container className={classes.root} spacing={2}>
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
  );



  /*
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id Pozo</TableCell>
            <TableCell align="left">Nombre Pozo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pozos.map(p => (
            <TableRow key={p.id}>
              <TableCell component="th" scope="row">
                <Link to={"/pozos/"+p.id}>
                {p.id}
                </Link>
              </TableCell>
              <TableCell align="left">{p.nombre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );*/
}
