import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    golpeGas: false,
    golpeFluido: false
  });

  

  const handleChange = name => event => {
   
    setState({ ...state, [name]: event.target.checked });
  /*if(event.target.checked===true){
    
        newState.push(name)
        console.log(newState)
    }
   else {
    if(event.target.checked===false)
        newState.filter(s => (s !== name))
        console.log(newState)
    }*/
  };
  
 

  const{carta,updateState} = props;


  return (
      
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.golpeGas}
            onChange={handleChange("golpeGas")}
            value="golpeGas"
            color="primary"
          />
        }
        label="Golpe de gas"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.golpeFluido}
            onChange={handleChange("golpeFluido")}
            value="golpeFluido"
            color="primary"
          />
        }
        label="Golpe de fluido"
      />
      <Button color="primary" onClick={()=> {updateState(carta,state);}}>Update</Button>    
    </FormGroup>
    
  );
}
