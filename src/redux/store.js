import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import carta from './cartas/reducer';
import pozos from './pozos/reducer';
import pozo from "./pozo/reducer"
import card from "./carta/reducer"
import cartas from "./cartas/reducer"
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const reducer = combineReducers({
    pozos,
    carta,
    pozo,
    card,
    cartas
});

const store = compose(applyMiddleware(thunk))(createStore)(reducer, /* preloadedState, */ devToolsEnhancer(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  ));
  
export default store;
