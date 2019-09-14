import React, { Component } from 'react'
import Page from "./page";
class Highchart extends Component{

    render(){
        
        return(
            <Page options={this.props.options}/>
        )
    }
}

export default Highchart;
