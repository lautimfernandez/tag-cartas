import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
  import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from '@material-ui/core/Button'
import { withRouter, Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250
  },
  media: {
    textAlign: 'center',
    justify: 'center',
    alignContent: 'center'//,
    //paddingTop: "5%" 
  },
  header: {
    textAlign: 'left', 
    justify: 'right',
    backgroundColor: '#E9E9E9'
  },
  problemColor: {
    backgroundColor: red[400],
    width:'25px',
    height:'25px'
  },
  withoutProblemColor:{
    backgroundColor: '#84c456',
    width:'25px',
    height:'25px'
  }
}));

function DashboardCarta(props) {
  const classes = useStyles();
  const {pozo, carta} = props;
  const c = carta ? carta : {};
  const diagnose = c.diagnose ? c.diagnose : "Sin problemas";
  const fecha = c.date ? JSON.stringify(c.date).slice(9,11)+"/"+JSON.stringify(c.date).slice(6,8)+"/"+JSON.stringify(c.date).slice(1,5) : "";
  const porcentaje = c.diagnose ? "80%" : "100%";
  
    
  return (
    <Link to={"/pozos/"+pozo+"/cartas/"+c.cardNumber} style={{ textDecoration: 'none' }}>
    <Card className={classes.card}>
      <CardActionArea>
      <CardContent className={classes.header}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={diagnose==="Sin problemas" ? classes.withoutProblemColor : classes.problemColor}>
          </Avatar>}
        title={<Typography variant="h5"  component="p" alignContent='right' textAlign='right'>
          {"Carta " + c.cardNumber}</Typography>}
      />
      </CardContent>

      <CardContent 
      className={classes.media} >
        
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
    </Link>
  );
}
export default withRouter(DashboardCarta);
