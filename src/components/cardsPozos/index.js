import React from "react";
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withRouter, Link } from 'react-router-dom';
import './styles.css';



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
    if(porcentaje<35){
      return "withoutProblemColor-pozo"
    }
    else{
      return "futureProblemColor-pozo"
    }
  } else if ( diagnose==="Sin diagnostico"){
    return "undiagnosedColor-pozo"
  }
  else{
    return "problemColor-pozo"
  }
} 


function CardsPozos(props) {
  const {pozo, carta} = props;
  const c = carta ? carta : {};
  const diagnose = obtenerDiagnostico(c.diagnose);
  const fecha = c.date ? JSON.stringify(c.date).slice(9,11)+"/"+JSON.stringify(c.date).slice(6,8)+"/"+JSON.stringify(c.date).slice(1,5) : "";
  const porcentaje = diagnose==="Sin problemas"  || diagnose ==="Sin diagnostico" ? c.id*100/6519 : 100;
 
    
  return (
    <Link to={"/pozos/"+pozo.id} style={{ textDecoration: 'none' }}>
    <Card id="card-pozo">
      <CardActionArea >
      <CardHeader
        id={obtenerColor(diagnose,porcentaje)}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={"Última actualización: "+ fecha}
      />
      <CardContent 
      className="media" >
      <CardHeader 
      textAlign= 'center'
      titleTypographyProps={{ variant:'h2' }}
      title={"Pozo " + pozo.id}
      />
      </CardContent>
      <CardContent 
      className="media" >
        
        <Typography variant="subtitle1"  component="p">
          {"Diagnóstico: " + diagnose }
        </Typography>

        <Typography variant="subtitle1"  component="p">
          {"Probabilidad de futuro problema: " + porcentaje.toFixed(2) + "%" }
        </Typography>
        {/*
        <Typography variant="subtitle1" color='textPrimary' component="p">
        Última actualización: {JSON.stringify(fecha).slice(9,11)}/{JSON.stringify(fecha).slice(6,8)}/{JSON.stringify(fecha).slice(1,5)}
        </Typography>
        */}
      </CardContent>
        </CardActionArea>
    </Card>
    </Link>
  );
}
export default withRouter(CardsPozos);
