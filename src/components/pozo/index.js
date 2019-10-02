import React, {Component} from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getCartasPozo from "../../redux/pozo/actions/getCartasPozo";
import getWells from "../../redux/pozo/actions/getWells"

class Pozo extends Component{
    
    componentDidMount(){
       
        const {getCartasPozo, getWells} = this.props;
        getCartasPozo(this.props.match.params.pozoId);
        getWells();
    }
    
    render(){
        
        const pozoId = this.props.match.params.pozoId;
        
        const {cartasPozo, wells} = this.props;

       
        return(
            <Page 
                cartasPozo={cartasPozo}
                pozoId={pozoId}
                wells={wells}
            />
        );
    }
}


const mapStateToProps = state => ({
    cartasPozo : state.pozo.cartasPozo,
    wells: state.pozo.wells
});

const mapDispatchToProps  = dispatch =>( {
   getCartasPozo : (pozoId) => dispatch(getCartasPozo(pozoId)),
   getWells : () => dispatch(getWells())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pozo))