import {ADD_TO_CART, REMOVED_TO_CART, PRODUCT_DISCRIPTIONS} from '../../_constant/constant'
export const addToCart = (data) => {

    return {
        type: ADD_TO_CART,
        data: data,
    }
}

export const removeToCart = (data) => {

    return {
        type: REMOVED_TO_CART,
        data,
    }
}
