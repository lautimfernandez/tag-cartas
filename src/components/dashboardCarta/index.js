import React from "react";
import "./styles.css";
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withRouter, Link} from "react-router-dom";
import '../general-styles.css';


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
      return diagnose
  }
}

const obtenerColor = (diagnose,porcentaje) =>{
  if(diagnose==="Sin problemas"){
    
      return "withoutProblemColor"
   
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
  const time = c.date ? JSON.stringify(c.date).slice(12, 17) : "";
  const porcentaje = diagnose==="Sin problemas"  || diagnose ==="Sin diagnostico" ? c.id*100/6519 : 100;
  
    
  return (
    <Link to={"/pozos/"+pozo+"/cartas/"+c.cardNumber} style={{ textDecoration: 'none' }}>
    <Card id="card-carta">
      <CardActionArea>
        <CardContent 
            className={obtenerColor(diagnose,porcentaje)}
          />

        <CardContent className="media" >

          <div className="Dashboard-titles">
            Carta {c.cardNumber}
          </div>
          
          <div className="dropdown-divider"></div>

          <div className="Dashboard-subtitles">
            Diagnóstico: {diagnose}
          </div>
          
          <div className="Dashboard-subtitles">
            Fecha: {fecha}
          </div>

          <div className="Dashboard-subtitles">
            Hora: {time}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}
export default withRouter(DashboardCarta);
