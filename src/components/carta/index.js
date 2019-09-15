import React, {Component} from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import golpeFluido from "../../redux/cartas/actions/golpeFluido";
import golpeGas from "../../redux/cartas/actions/golpeGas";
import getCartas from "../../redux/cartas/actions/getCartas";

class Carta extends Component{
    
    componentDidMount(){
        const {getCartas} = this.props;
        getCartas();
    }
    
    render(){
        
       const pozoId = this.props.match.params.pozoId;
        
        const{ cartas, golpeGas, golpeFluido} = this.props;
        debugger;
        return(
            <Page golpeFluido={golpeFluido}
                golpeGas={golpeGas}
                cartas={cartas}
                pozoId={pozoId}
            />
        );
    }
}


const mapStateToProps = state => ({
    cartas : state.carta.cartas,
    cartasGolpeFluido: state.carta.cartasGolpeFluido,
    cartasGolpeGas : state.carta.cartasGolpeGas
});

const mapDispatchToProps  = dispatch =>( {
   golpeFluido: (carta) => dispatch(golpeFluido(carta)),
   golpeGas : (carta) => dispatch(golpeGas(carta)),
   getCartas : () => dispatch(getCartas())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Carta))