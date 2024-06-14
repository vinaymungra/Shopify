
const initialState=[]

const WISHLIST_ADD_ITEM='wishList/addItem'
const WISHLIST_REMOVE_ITEM='wishList/removeItem'


export const wishListAddItem=(productId)=>{
    return {type:WISHLIST_ADD_ITEM, payload:{productId}}
}
export const wishListRemoveItem=(productId)=>{
    return {type:WISHLIST_REMOVE_ITEM, payload:{productId}}
}

export default function wishListReducer(state=initialState,action)
{
    switch(action.type){
        
        case WISHLIST_ADD_ITEM:
            return [...state.wishList,action.payload]

        case WISHLIST_REMOVE_ITEM:
            return state.wishList.filter(                    
                    (wishListItem)=> wishListItem.productId!==action.payload.productId
                )
            
        default:
            return state  
    }

}


