import React, { Component } from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import debounce from "lodash.debounce";
import getCartasByIdPozo from "../../redux/cartas/actions/getCartasByIdPozo";
import loadMoreCardsByIdPozo from "../../redux/cartas/actions/loadMoreCards";
import cleanup from "../../redux/cleanup";

class DashboardCartas extends Component {

    timesReload = 0;

    componentDidMount() {
        const pozo = this.props.match.params.pozoId;
        const { getCartasByIdPozo } = this.props;
        getCartasByIdPozo(pozo, 1, {});
        window.onscroll = debounce(() => {
            if (
                document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000
            ) {
                this.timesReload++;
                const { loadMoreCardsByIdPozo } = this.props;
                loadMoreCardsByIdPozo(pozo, this.timesReload + 1, this.props.cartas);
            }
        }, 100);
        //window.onpopstate = this.onBackButtonEvent;
    }

    componentWillUnmount() {
        const { cleanup } = this.props;
        cleanup();
    }

    onBackButtonEvent = (e) => {
        e.preventDefault();
        this.props.history.goBack()
      }
      
    render() {
        const pozo = this.props.match.params.pozoId;
        const { cartas } = this.props;
        return (
            <Page pozo={pozo} cartas={cartas} />
        );
    }
}

const mapStateToProps = state => ({
    cartas: state.cartas.cartas,
    moreCards: state.cartas.moreCards
});

const mapDispatchToProps = dispatch => ({
    getCartasByIdPozo: (pozo, page) => dispatch(getCartasByIdPozo(pozo, page)),
    loadMoreCardsByIdPozo: (pozo, page, cartas) => dispatch(loadMoreCardsByIdPozo(pozo, page, cartas)),
    cleanup: () => dispatch(cleanup())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardCartas))
