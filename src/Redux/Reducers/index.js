//An application can have mutliple reducers, this file is to combine all reduers

import {combineReducers} from 'redux';
import {productReducer} from './productReducer'

const reducers = combineReducers({
    allProducts : productReducer
})

export default reducers;