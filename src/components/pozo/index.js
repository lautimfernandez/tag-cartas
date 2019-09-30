import React, {Component} from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getCartasPozo from "../../redux/pozo/actions/getCartasPozo";

class Pozo extends Component{
    
    componentDidMount(){
       
        const {getCartasPozo} = this.props;
        getCartasPozo(this.props.match.params.pozoId);
    }
    
    render(){
        
        const pozoId = this.props.match.params.pozoId;
        
        const {cartasPozo} = this.props;

       
        return(
            <Page 
                cartasPozo={cartasPozo}
                pozoId={pozoId}
            />
        );
    }
}


const mapStateToProps = state => ({
    cartasPozo : state.pozo.cartasPozo
});

const mapDispatchToProps  = dispatch =>( {
   getCartasPozo : (pozoId) => dispatch(getCartasPozo(pozoId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pozo))