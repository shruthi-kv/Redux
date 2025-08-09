import {ActionTypes} from '../Constants/action-types'


//Action
export const setProducts = (products) =>{
    // action always return plain js object which will have type and payload
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

//Action
export const selectedProduct = (products) =>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload:products
    }
}