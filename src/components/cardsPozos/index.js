import React from "react";
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { withRouter, Link } from 'react-router-dom';
import './styles.css';
import '../general-styles.css'



const obtenerDiagnostico = (diagnose) =>{
  switch(diagnose){
    case("noProblem"):
      return "Sin problemas"
    case(""):
      return "Sin diagnóstico"
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
      return diagnose
  }
}

const obtenerColor = (diagnose,porcentaje) =>{
  if(diagnose==="Sin problemas"){
    if(porcentaje<35){
      return "withoutProblemColor"
    }
    else{
      return "futureProblemColor"
    }
  } else if ( diagnose==="Sin diagnostico"){
    return "undiagnosedColor"
  }
  else{
    return "problemColor"
  }
} 


function CardsPozos(props) {
  const {pozo, carta} = props;
  const c = carta ? carta : {};
  const diagnose = obtenerDiagnostico(c.diagnose);
  const fecha = c.date ? JSON.stringify(c.date).slice(9,11)+"/"+JSON.stringify(c.date).slice(6,8)+"/"+JSON.stringify(c.date).slice(1,5) : "";
  const porcentaje = diagnose==="Sin problemas"  || diagnose ==="Sin diagnostico" ? c.id*100/6519 : 100;
 
    
  return (
    <div className="container"> 
      <Link to={"/pozos/"+pozo.id} style={{ textDecoration: 'none' }}>
        
        <Card id="card-pozo">
          <CardActionArea >
            <CardHeader
              className={obtenerColor(diagnose,porcentaje)}
              
            />
            <CardContent className="media" >
              <div className="Dashboard-titles">
              POZO {pozo.id}
              </div>

              <div className="dropdown-divider"></div>

              <div className="Dashboard-subtitles">
                Diagnóstico: {diagnose}
              </div>

              <div className="Dashboard-subtitles" >
                Probabilidad de futuro problema: {porcentaje.toFixed(2)}%
              </div>
              
              <div className="Dashboard-subtitles" >
              Última actualización: {fecha}
              </div>
              
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}
export default withRouter(CardsPozos);
