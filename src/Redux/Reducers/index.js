//An application can have mutliple reducers, this file is to combine all reduers

import {combineReducers} from 'redux';
import {productReducer, selectedProductReducer} from './productReducer'

const reducers = combineReducers({
    allProducts : productReducer,
    product: selectedProductReducer
})

export default reducers;