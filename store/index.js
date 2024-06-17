// import {combineReducers, createStore} from  'redux';
import cartReducer from './slices/cartSlice';
import wishListReducer from './slices/wishListSlice';
import productsReducer from './slices/productsSlice';
import { configureStore } from '@reduxjs/toolkit';

// import { productsList } from './productsList';

// const reducer=combineReducers({
//     products:productsReducer,
//     cart:cartReducer,
//     wishList: wishListReducer

// })

// export default store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__?.());


export default store = configureStore({
    reducer:{
        products:productsReducer,
        cart:cartReducer,
        wishList: wishListReducer
    }
});

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

