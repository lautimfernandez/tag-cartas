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

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    textAlign: 'center',
    justify: 'center',
    alignContent: 'center',
    paddingTop: "10%" // 16:9
  },
  problemColor: {
    backgroundColor: red[400]
  },
  withoutProblemColor:{
    backgroundColor: '#84c456'
  }
}));

function CardsPozos(props) {
  const classes = useStyles();
  const {pozo, carta} = props;
  const c = carta? carta : {};
  const diagnose = c.diagnose ? c.diagnose : "No hay inconvenientes";
  const fecha = c.date ? c.date : "";
  const porcentaje = c.diagnose ? "80%" : "100%";
  //const fecha = JSON.parse(c.date).slice(9,11) ? JSON.parse(c.date).slice(9,11) : "";
    
  return (
    <Link to={"/pozos/"+pozo.id} style={{ textDecoration: 'none' }}>
    <Card className={classes.card}>
      <CardActionArea >
      <CardHeader
        className={diagnose==="No hay inconvenientes" ? classes.withoutProblemColor : classes.problemColor}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={porcentaje}
      />
      <CardContent 
      className={classes.media} >
      <CardHeader 
      textAlign= 'center'
      titleTypographyProps={{ variant:'h2' }}
      title={"Well " + pozo.id}
      />
      </CardContent>
      <CardContent 
      className={classes.media} >
        
        <Typography variant="subtitle1"  component="p">
          {"Diagnose: " + diagnose }
        </Typography>
        
        <Typography variant="subtitle1" color='textPrimary' component="p">
        Last Update: {JSON.stringify(fecha).slice(9,11)}/{JSON.stringify(fecha).slice(6,8)}/{JSON.stringify(fecha).slice(1,5)}
        </Typography>

      </CardContent>
        </CardActionArea>
    </Card>
    </Link>
  );
}
export default withRouter(CardsPozos);
