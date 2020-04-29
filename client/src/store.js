import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(...middleware),
        window._REDUX_DEVTOOLS_EXTENSION_ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ));

export default store;