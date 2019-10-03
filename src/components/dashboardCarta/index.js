import React from "react";
import "./styles.css";
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withRouter, Link} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';


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
    default: 
      return ""
  }
}

const obtenerColor = (diagnose,porcentaje) =>{
  if(diagnose==="Sin problemas"){
    if(porcentaje>60){
      return "withoutProblemColor"
    } else {
      return "futureProblemColor"
    }
  } else if(diagnose==="Sin diagnostico") {
    return "undiagnosedColor"
  } else {
    return "problemColor"
  }
} 

function DashboardCarta(props) {
  const {pozo, carta} = props;
  const c = carta ? carta : {};
  const diagnose = obtenerDiagnostico(c.diagnose);
  const fecha = c.date ? JSON.stringify(c.date).slice(9,11)+"/"+JSON.stringify(c.date).slice(6,8)+"/"+JSON.stringify(c.date).slice(1,5) : "";
  const porcentaje = diagnose==="Sin problemas"  || diagnose ==="Sin diagnostico" ? c.id*100/2173 : 100;
  
    
  return (
    <Link to={"/pozos/"+pozo+"/cartas/"+c.cardNumber} style={{ textDecoration: 'none' }}>
    <Card className="card">
      <CardActionArea>
      <CardContent className="header">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" id={obtenerColor(diagnose,porcentaje)}>
          </Avatar>}
        title={<Typography variant="h5"  component="p" alignContent='right' textAlign='right'>
          {"Carta " + c.cardNumber}</Typography>}
      />
      </CardContent>

      <CardContent className="media" >
        
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
