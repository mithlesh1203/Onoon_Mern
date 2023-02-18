import { ADD_TO_CART, REMOVED_TO_CART } from "../../_constant/constant";

export const cartData = (data = [], action) => {
    switch (action.type) {

        case ADD_TO_CART:
            return [
                action.data, ...data
            ]
        case REMOVED_TO_CART:
            data.pop();
            return [
                ...data,
            ]
            break;
        default:
            return data;
    }

}