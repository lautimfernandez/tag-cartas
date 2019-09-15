import React from 'react';
import './styles.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

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

