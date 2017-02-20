import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import contactsReducer from './features/contacts/widgets';

const initialState = {};

export default (initialState) => {
    return createStore(contactsReducer, initialState, applyMiddleware(apiMiddleware));
}
