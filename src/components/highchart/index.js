import React, { Component } from 'react'
import Page from "./page";
class Highchart extends Component{

    render(){ 
        const options = {
            title: {
              text: 'My chart'
            },
            series: [{
              data: [[1, 2],[3,4],[5,9]]
            }]
          }

        return(
            <Page options={options}/>
        )
    }
}

export default Highchart;
