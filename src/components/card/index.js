import React, {Component} from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getCarta from "../../redux/carta/actions/getCarta"

class Card extends Component{

    componentDidMount(){
        debugger;
        const {getCarta} = this.props;
        getCarta(this.props.match.params.pozoId, this.props.match.params.cartaId);
    }

    render(){
        debugger;
        const {getCarta} = this.props;
        getCarta(this.props.match.params.pozoId, this.props.match.params.cartaId);
        const {carta} = this.props;
        return(
            <Page 
                carta={carta}
            />
        );
    }
}

const mapStateToProps = state => ({
    carta : state.card.carta
});

const mapDispatchToProps  = dispatch =>( {
   getCarta : (pozoId, cartaId) => dispatch(getCarta(pozoId, cartaId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card))