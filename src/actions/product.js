import { GET_ALL_PRODUCT, GET_PRODUCT } from '../contansts/actionTypes';

export const getList = (list) => {
    return {
        type: GET_ALL_PRODUCT,
        list: list
    }
}

export const getProduct = (product) => {
    return {
        type: GET_PRODUCT,
        product: product
    }
}