import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    golpeGas: true,
    golpeFluido: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  
  //const{carta,update} =this.props;

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
      <Button color="primary" onClick={()=> {/*update(carta);*/}}>Update</Button>    
    </FormGroup>
    
  );
}
