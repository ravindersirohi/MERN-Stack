import axios from 'axios';
import { GET_LIST_ITEM, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_LIST_LOAD } from '../actions/constants';

export const getListItems = () => dispatch => {
    dispatch(initListLoad());
    axios
        .get('/api/item')
        .then(result => dispatch({
            type: GET_LIST_ITEM,
            payload: result.data
        }))
};
export const addListItem = listItem => dispatch => {
    axios
        .post('/api/item', listItem)
        .then(result => dispatch({
            type: ADD_LIST_ITEM,
            payload: result.data
        }))
};
export const deleteListItem = id => dispatch => {
    axios
        .delete(`/api/item/${id}`)
        .then(result => dispatch({
            type: DELETE_LIST_ITEM,
            payload: id
        }))
};
export const initListLoad = listItem => {
    return {
        type: INIT_LIST_LOAD
    };
};