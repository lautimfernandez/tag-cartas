import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import './styles.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Link } from 'react-router-dom';

function Page(props){
    const {options} = props;
    return(
        <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />


    )
}

export default Page;

