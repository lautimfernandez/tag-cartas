import { createStore, combineReducers,applyMiddleware, compose } from 'redux';
import carta from './cartas/reducer';
import pozo from './pozos/reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    pozo,
    carta
});

const store = compose(applyMiddleware(thunk))(createStore)(reducer, /* preloadedState, */ devToolsEnhancer(
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
  ));
  
export default store;
