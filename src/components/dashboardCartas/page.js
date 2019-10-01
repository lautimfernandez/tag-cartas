import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardCarta from "../dashboardCarta";
import Grid from '@material-ui/core/Grid';
import "./styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0
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
const {pozo, cartas} = props;

return(
  <div>
    <div className="title"> 
    CARTAS POZO {pozo}
    </div>

    <Grid container className={classes.root} spacing={2} >
      
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {cartas.map(c => (
            <Grid key={c.id} item>
              <DashboardCarta pozo={pozo} carta={c}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
    </div>
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
