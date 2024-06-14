const initialState=[]

const CART_ADD_ITEM='cart/addItem'
const CART_REMOVE_ITEM='cart/removeItem'
const CART_ITEM_INCREASE_QUANTITY='cart/increaseItemQuantity'
const CART_ITEM_DECREASE_QUANTITY='cart/decreaseItemQuantity'


export const cartAddItem = (productId,quantity)=>{
    return {type:CART_ADD_ITEM, payload:{productId:productId,quantity:quantity}}
}
export const cartRemoveItem =(productId)=>{
    return {type:CART_REMOVE_ITEM, payload:{productId:productId}}
}
export const cartIncreaseItemQuantity=(productId)=>{
    return {type:CART_ITEM_INCREASE_QUANTITY, payload:{productId:productId}}
}
export const cartDecreaseItemQuantity=(productId)=>{
    return {type:CART_ITEM_DECREASE_QUANTITY, payload:{productId:productId}}
}


export default function cartReducer(state=initialState,action)
{
    switch(action.type){
        case CART_ADD_ITEM:
            return [...state,action.payload]

        case CART_REMOVE_ITEM:
            return state.filter(
                    (cartItem)=> cartItem.productId!=action.payload.productId
                )
            
        case CART_ITEM_INCREASE_QUANTITY:
            return  state.map((cartItem)=>{

                    if(cartItem.productId===action.payload.productId)
                    {
                        return {...cartItem,quantity:cartItem.quantity+1}   
                    }
                    return cartItem
                })
        
        case CART_ITEM_DECREASE_QUANTITY:
            return state.map((cartItem)=>{
                    if(cartItem.productId===action.payload.productId)
                    {
                        return {...cartItem,quantity:cartItem.quantity-1}
                    }
                    return cartItem
                })
                .filter((cartItem)=>cartItem.quantity>0)

                // state.filter((cartItem)=>{
                //     if(cartItem.productId==action.payload.productId)
                //     {
                //         cartItem.quantity--;
                //         if(cartItem.quantity==0)
                //         {
                //             return false;    
                //         }
                //     }
                //     return true;
                // })
            
        
        default:
            return state  
    }

}


