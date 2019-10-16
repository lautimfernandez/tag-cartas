import React, { Component } from 'react';
import Page from "./page";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import getLastCards from "../../redux/pozos/actions/getLastCards";
import cleanup from "../../redux/cleanup"


class PozosTable extends Component {

    componentDidMount() {
        const { getLastCards } = this.props;
        getLastCards();
    }

    componentWillUnmount() {
        cleanup();
    }

    render() {
        const { pozos, cartas } = this.props;
        return (
            <Page pozos={pozos} cartas={cartas} />
        );
    }
}

const mapStateToProps = state => ({
    pozos: state.pozos.pozos,
    cartas: state.pozos.cartas

});

const mapDispatchToProps = dispatch => ({
    getLastCards: () => dispatch(getLastCards()),
    cleanup: () => dispatch(cleanup())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PozosTable))
