//reducer always take the initial state and action and will have switch-cases


const intialState = {
    products : [
        
    ]
}

//Reducer
export const productReducer = (state=intialState, {type, payload}) =>{
    switch(type){
        case "SET_PRODUCTS": 
            return {...state, products:payload};
        default:
            return state;
    }
}