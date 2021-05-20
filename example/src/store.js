
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import allReducers from './reducers'

export default function configureStore() {
    const store = createStore(
        allReducers,
        applyMiddleware(thunk)
    );
    return store;
}
