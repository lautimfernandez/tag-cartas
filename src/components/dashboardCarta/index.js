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
import { red , yellow, green} from "@material-ui/core/colors";
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
    backgroundColor: green[400],
    width:'25px',
    height:'25px'
  },
  futureProblemColor:{
    backgroundColor : yellow[400],
    width:'25px',
    height:'25px'
  }
}));


const obtenerDiagnostico = (diagnose) =>{
  switch(diagnose){
    case("noProblem"):
      return "Sin problemas"
    case(""):
      return "Sin diagnostico"
    default:{
      return diagnose.split(",").map(d => translate(d)).join(" | ");
    }
  }
}

const translate = (diagnose) =>{
  switch(diagnose){
    case("gasInterference"):
      return "Interferncia de gas"
    case("fluidStroke"):
      return "Golpe de fluido"
    case("bombStroke"):
      return "Golpe de bomba"
    case("flowingWell"):
      return "Pozo fluyente"
    case("fishingRodRods"):
      return "Pesca de varillas de bombeo"
  }
}

const obtenerColor = (diagnose,porcentaje,classes) =>{
  if(diagnose==="Sin problemas" || diagnose==="Sin diagnostico"){
    if(porcentaje<30){
      return classes.withoutProblemColor
    }
    else{
      return classes.futureProblemColor
    }
  }
  else{
    return classes.problemColor
  }
} 

function DashboardCarta(props) {
  const classes = useStyles();
  const {pozo, carta} = props;
  const c = carta ? carta : {};
  const diagnose = obtenerDiagnostico(c.diagnose);
  const fecha = c.date ? JSON.stringify(c.date).slice(9,11)+"/"+JSON.stringify(c.date).slice(6,8)+"/"+JSON.stringify(c.date).slice(1,5) : "";
  const porcentaje = diagnose==="Sin problemas"  || diagnose ==="Sin diagnostico" ? c.id*100/2173 : 100;
  
    
  return (
    <Link to={"/pozos/"+pozo+"/cartas/"+c.cardNumber} style={{ textDecoration: 'none' }}>
    <Card className={classes.card}>
      <CardActionArea>
      <CardContent className={classes.header}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={obtenerColor(diagnose,porcentaje,classes)}>
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
          {"Probabilidad: " + porcentaje.toFixed(2) + "%"}
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
