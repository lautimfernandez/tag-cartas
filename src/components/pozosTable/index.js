import React, {Component} from 'react';
import Page from "./page";
import { connect } from 'react-redux';
//import { withRouter } from 'react-router-dom';

class PozosTable extends Component{
    componentDidMount(){

    }

    render(){
        const {pozos}= this.props;
        return(
            <Page pozos={pozos} />
        );
    }
}

const mapStateToProps = state => ({
    pozos : state.pozo.pozos
});

const mapDispatchToProps ={
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PozosTable)
