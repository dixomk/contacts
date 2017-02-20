import { CALL_API } from 'redux-api-middleware';
import { combineReducers } from 'redux';

/**
*   actions
*/
const READ_CONTACTS = 'contacts.read';
const READ_CONTACTS_SUCCESS = 'contacts.read_success';
const READ_CONTACTS_FAIL = 'contacts.read_fail'

/**
*   actions creator
*/
export const readContacts = () => {
    return {
        [CALL_API]: {
            endpoint: 'api/contacts',
            method: 'GET',
            types: [READ_CONTACTS, READ_CONTACTS_SUCCESS, READ_CONTACTS_FAIL]
        }
    };
};

/**
*   reducer
*/
const defaultState = { list: [], isFetching: false, isError: false };
const contacts = (state = defaultState, action){
    switch(action.type){
        case READ_CONTACTS:
            return {
                ...state,
                isFetching: true
            };
        case READ_CONTACTS_SUCCESS:
            return {
                ...state,
                list: [...action.payload],
                isFetching: false
            };
        case READ_CONTACTS_FAIL:
            return {
                ...state,
                isFetching: false,
                isError: true
            };
        default:
            return state;
    }
}
export default combineReducers({ contacts });
