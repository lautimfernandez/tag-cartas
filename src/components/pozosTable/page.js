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

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));


export default function Page(props) {
  const classes = useStyles();
  const {pozos} = props;

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
  );
}
