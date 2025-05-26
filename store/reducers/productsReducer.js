const defaultProductState = {
    products:[],
}

export const productsReducer = (state={...defaultProductState} , action) => {
    const email = action.payload?.email;
    const product_id = action.payload?.product_id;
    switch (action.type){
        case "LOAD_PRODUCTS":
            return {...state,products:[...action.payload]}
        case "RESERVE_PRODUCT":
            return {...state,products:[...state.products.map(item=>item.id===product_id?{...item,ordered:true,orders_email:email}:item)]}
        case "UNRESERVE_PRODUCT":
            return {...state,products: [...state.products.map(item=>item.id===product_id?{...item,ordered:false,orders_email:""}:item)]}
        default:
            return state
    }
}