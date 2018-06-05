import { GET_USER_INFORMATION } from '../contansts/actionTypes';

const initState = {
    user: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case GET_USER_INFORMATION:
            return Object.assign({}, state, {
                user: action.user
            });
        default:
            return state;
    }
}