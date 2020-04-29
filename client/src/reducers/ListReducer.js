import { GET_LIST_ITEM, ADD_LIST_ITEM, DELETE_LIST_ITEM } from '../actions/constants';
const initState = {
    myItems: [
        { id: 3, name: 'Apple', quantity: 5 },
        { id: 1, name: 'Mango', quantity: 8 },
        { id: 2, name: 'Grapes', quantity: 2 }
    ]
}

export default (state = initState, action) => {
    switch (action.type) {
        case GET_LIST_ITEM:
            return {
                ...state
            }
        default:
            return state;
    }
}