import { GET_LIST_ITEM, ADD_LIST_ITEM, DELETE_LIST_ITEM } from '../actions/constants';

export const getListItems = () => {
    return {
        type: GET_LIST_ITEM
    };
};
export const deleteListItem = id => {
    return {
        type: DELETE_LIST_ITEM,
        payload: id
    };
};
export const addListItem = listItem => {
    return {
        type: ADD_LIST_ITEM,
        payload: listItem
    };
};