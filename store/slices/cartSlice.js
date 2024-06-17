import { createSlice } from "@reduxjs/toolkit"
import { produce } from "immer"

const initialState=[]

// action types
// const CART_ADD_ITEM='cart/addItem'
// const CART_REMOVE_ITEM='cart/removeItem'
// const CART_ITEM_INCREASE_QUANTITY='cart/increaseItemQuantity'
// const CART_ITEM_DECREASE_QUANTITY='cart/decreaseItemQuantity'

// action creators
//  export const addCartItem = (product)=>{
//     return {type:CART_ADD_ITEM, payload:product}
// }
//  export const removeCartItem =(productId)=>{
//     return {type:CART_REMOVE_ITEM, payload:{productId:productId}}
// }
//  export const increaseCartItemQuantity=(productId)=>{
//     return {type:CART_ITEM_INCREASE_QUANTITY, payload:{productId:productId}}
// }
//  export const decreaseCartItemQuantity=(productId)=>{
//     return {type:CART_ITEM_DECREASE_QUANTITY, payload:{productId:productId}}
// }

//reducer
// function cartReducer(originalstate=initialState,action)
// {
//     return produce(originalstate,(state)=>{

//         const existingItemIndex =state.findIndex(
//             (cartItem)=>cartItem.productId===action.payload.productId
//         )
//         switch(action.type){
//             case CART_ADD_ITEM:
//                 if(existingItemIndex==-1)
//                 {
//                     // action.payload.quantity=1
//                     state.push({...action.payload, quantity:1})

//                         return state;
//                 }
//                 state[existingItemIndex].quantity++
//                 return state
            
//             case CART_REMOVE_ITEM:
        
//                 state.splice(existingItemIndex,1)
//                 return state
                
//             case CART_ITEM_INCREASE_QUANTITY:
//                 state[existingItemIndex].quantity++;
//                 return  state
            
//             case CART_ITEM_DECREASE_QUANTITY:

//                 if(state[existingItemIndex].quantity==1)
//                     state.splice(existingItemIndex,1)
//                 else 
//                     state[existingItemIndex].quantity--;
//                 return state
                
//                     // state.map((cartItem)=>{
//                     //     if(cartItem.productId===action.payload.productId)
//                     //     {
//                     //         return {...cartItem,quantity:cartItem.quantity-1}
//                     //     }
//                     //     return cartItem
//                     // })
//                     // .filter((cartItem)=>cartItem.quantity>0)
    
//                     // state.filter((cartItem)=>{
//                     //     if(cartItem.productId==action.payload.productId)
//                     //     {
//                     //         cartItem.quantity--;
//                     //         if(cartItem.quantity==0)
//                     //         {
//                     //             return false;    
//                     //         }
//                     //     }
//                     //     return true;
//                     // })
                
            
//             default:
//                 return state  
//         }
    
//     })
// }

const findItemIndex=(state,action)=>{
   
    return state.findIndex( 
        (cartItem)=>cartItem.productId===action.payload.productId
    )
}


 const slice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addCartItem:(state,action)=>{
            const existingItemIndex=findItemIndex(state,action)
            if(existingItemIndex==-1)
            {
                // action.payload.quantity=1
                state.push({...action.payload, quantity:1})
                return state;
            }
            state[existingItemIndex].quantity++
        },
        removeCartItem:(state,action)=>{
            const existingItemIndex=findItemIndex(state,action)
            state.splice(existingItemIndex,1)
        },
        increaseCartItemQuantity:(state,action)=>{
            const existingItemIndex=findItemIndex(state,action)
            state[existingItemIndex].quantity++;
        },
        decreaseCartItemQuantity:(state,action)=>{
            const existingItemIndex=findItemIndex(state,action)
            if(state[existingItemIndex].quantity==1)
                state.splice(existingItemIndex,1)
            else 
                state[existingItemIndex].quantity--;
        }
    }
})


function myCreateSlice(config){
    const {name,initialState,reducers} =config
    const actions = {} 
    Object.keys(reducers).forEach((key)=>{
        actions[key]= function  (payload){
            return {
                type:name+"/"+key,
                payload
            }
        }
    }) 

    function reducer(originalState=initialState,action){
        return produce(originalState,(state)=>{
            const caseReducer = reducers[action.type.split('/')[1]]
            if(caseReducer){
                return caseReducer(state,action) 
            }
            return originalState
        })
    }
    return {actions,reducer}
}

const mySlice = myCreateSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addCartItem:(state,action)=>{
            const existingItemIndex=findItemIndex(state,action)
            if(existingItemIndex==-1)
            {
                // action.payload.quantity=1
                state.push({...action.payload, quantity:1})
                return state;
            }
            state[existingItemIndex].quantity++
        },
        removeCartItem:(state,action)=>{
            const existingItemIndex=findItemIndex(state,action)
            state.splice(existingItemIndex,1)
        },
        increaseCartItemQuantity:(state,action)=>{
            const existingItemIndex=findItemIndex(state,action)
            state[existingItemIndex].quantity++;
        },
        decreaseCartItemQuantity:(state,action)=>{
            const existingItemIndex=findItemIndex(state,action)
            if(state[existingItemIndex].quantity==1)
                state.splice(existingItemIndex,1)
            else 
                state[existingItemIndex].quantity--;
        }
    }
})
console.log(mySlice)

export default cartReducer = mySlice.reducer;
export const {addCartItem,removeCartItem,increaseCartItemQuantity,decreaseCartItemQuantity}=mySlice.actions