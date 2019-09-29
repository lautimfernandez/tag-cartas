import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';
import { useAuth0 } from "../../react-auth0-wrapper";

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    gasInterference: false,
    fluidStroke: false,
    bombStroke : false,
    flowingWell : false,
    fishingRodRods : false,
    noProblem : false
  });
  

  const resetState = () => {
    setState({
      gasInterference: false,
      fluidStroke: false,
      bombStroke : false,
      flowingWell : false,
      fishingRodRods : false,
      noProblem : false
    })
  };


  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const{carta,updateState} = props;
 
  const {user,loading} = useAuth0();
  if (loading || !user) {
    return (
      <div id="spinner">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  
  const nombre = user.nickname;
  

  return (
      
    <FormGroup row >
    <FormControlLabel
        control={
          <Checkbox
            checked={state.noProblem}
            onChange={handleChange("noProblem")}
            value="noProblem"
            color="primary"
          />
        }
        label="Sin problemas"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.gasStroke}
            onChange={handleChange("gasInterference")}
            value="gasInterference"
            color="primary"
          />
        }
        label="Interferencia de gas"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.fluidStroke}
            onChange={handleChange("fluidStroke")}
            value="fluidStroke"
            color="primary"
          />
        }
        label="Golpe de fluido"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.bombStroke}
            onChange={handleChange("bombStroke")}
            value="bombStroke"
            color="primary"
          />
        }
        label="Golpe de bomba"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.flowingWell}
            onChange={handleChange("flowingWell")}
            value="flowingWell"
            color="primary"
          />
        }
        label="Pozo fluyente"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.fishingRodRods}
            onChange={handleChange("fishingRodRods")}
            value="fishingRodRods"
            color="primary"
          />
        }
        label="Pesca de varillas de bombeo"
      />
      <Button color="primary" onClick={()=> {updateState(carta,state,nombre); 
                                              resetState()}}>Actualizar</Button>    
    </FormGroup>
    
  );
}
