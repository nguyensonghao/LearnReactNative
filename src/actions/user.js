import { GET_USER_INFORMATION } from '../contansts/actionTypes';

export const getInformation = (user) => {
    return {
        type: GET_USER_INFORMATION,
        user: user
    }
}