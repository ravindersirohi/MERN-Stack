import { GET_LIST_ITEM, ADD_LIST_ITEM, DELETE_LIST_ITEM, INIT_LIST_LOAD } from '../actions/constants';
const initState = {
    myItems: [],
    isLoading: false
}

export default (state = initState, action) => {
    switch (action.type) {
        case INIT_LIST_LOAD:
            return {
                ...state,
                isLoading: true
            }
        case GET_LIST_ITEM:
            return {
                ...state,
                myItems: action.payload,
                isLoading: false
            }
        case ADD_LIST_ITEM:
            return {
                ...state,
                myItems: [action.payload, ...state.myItems]
            }
        case DELETE_LIST_ITEM:
            return {
                ...state,
                myItems: state.myItems.filter(item => item._id !== action.payload)
            }
        default:
            return state;
    }
}