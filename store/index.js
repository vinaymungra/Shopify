import {combineReducers, createStore} from  'redux';
import cartReducer,{ cartAddItem, cartIncreaseItemQuantity, decreaseItemQuantity, cartDecreaseItemQuantity } from './cartReducer';
import wishListReducer from './wishListReducer';
import productsReducer from './productsReducer';

// import { productsList } from './productsList';

const reducer=combineReducers({
    products:productsReducer,
    cart:cartReducer,
    wishList: wishListReducer

})

export default store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());

function manualCombiningReducer(reducers){
   
    const reducerKeys= Object.keys(reducers)
    const reducerValues= Object.values(reducers)
    
    // console.log(reducerKeys)

    return function (state={},action){
        const nextState={}
        for(let i=0;i<reducerKeys.length;i++)
        {
            const key=reducerKeys[i];
            const reducer1=reducerValues[i]
            nextState[key]=reducer1(state[key],action)     
        }
        return nextState
    }
}




store.dispatch(cartAddItem(1,1))
// console.log(store.getState())
store.dispatch(cartIncreaseItemQuantity(1))
store.dispatch(cartAddItem(2,1))
// console.log(store.getState())

store.dispatch(cartIncreaseItemQuantity(2))
store.dispatch(cartDecreaseItemQuantity(1))
store.dispatch(cartDecreaseItemQuantity(1))

// console.log(store.getState())
