import React, {Component} from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import getPozos from "../../redux/pozos/actions/getPozos";
import { withRouter } from 'react-router-dom';

class PozosTable extends Component{
    componentDidMount(){
        const {getPozos} = this.props;
        getPozos();
    }
    

    render(){
        const {pozos}= this.props;
        debugger;
        return(
            <Page pozos={pozos} />
        );
    }
}

const mapStateToProps = state => ({
    pozos : state.pozo.pozos
});

const mapDispatchToProps  = dispatch =>( {
    getPozos : () => dispatch(getPozos())
});

export default connect(mapStateToProps, mapDispatchToProps)(PozosTable)