import React, {Component} from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getCartasByIdPozo from "../../redux/cartas/actions/getCartasByIdPozo"

class DashboardCartas extends Component{
    
    componentDidMount(){
        const pozo = this.props.match.params.pozoId;
        const {getCartasByIdPozo} = this.props;
        getCartasByIdPozo(pozo);
    }

    render(){
        const pozo = this.props.match.params.pozoId;
        const {cartas}= this.props;
        return(
            <Page pozo={pozo} cartas={cartas} />
        );
    }
}

const mapStateToProps = state => ({
    cartas : state.cartas.cartas

});

const mapDispatchToProps  = dispatch =>( {
    getCartasByIdPozo : (pozo) => dispatch(getCartasByIdPozo(pozo))
 });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardCartas))
