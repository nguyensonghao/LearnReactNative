import { GET_ALL_PRODUCT, GET_PRODUCT } from '../contansts/actionTypes';

const initState = {
    list: [],
    product: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return Object.assign({}, state, {
                list: action.list
            });
        case GET_PRODUCT:
            return Object.assign({}, state, {
                product: action.product
            });
        default:
            return state;
    }
}