import React, {Component} from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getLastCards from "../../redux/pozos/actions/getLastCards"


class PozosTable extends Component{
    
    componentDidMount(){
        const {getLastCards} = this.props;
        getLastCards();
    }

    render(){
        const {pozos, cartas}= this.props;
        return(
            <Page pozos={pozos} cartas={cartas} />
        );
    }
}

const mapStateToProps = state => ({
    pozos : state.pozos.pozos,
    cartas : state.pozos.cartas

});

const mapDispatchToProps  = dispatch =>( {
    getLastCards : () => dispatch(getLastCards())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PozosTable))
