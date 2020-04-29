import { GET_LIST_ITEM, ADD_LIST_ITEM, DELETE_LIST_ITEM } from '../actions/constants';

export const getListItems = () => {
    return {
        type: GET_LIST_ITEM
    };
};