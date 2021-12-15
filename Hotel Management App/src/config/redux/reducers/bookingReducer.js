const INITIAL_STATE = {
    isLoading: true,
    cart: []


}

const reducer = (state = INITIAL_STATE, action) => {

    if (action.type === "GETUSERBOOKINGS") {
        return { ...state, ...action }
    }
    else if (action.type === "GETUSERCARTDATA") {
        if (action.cart === 'empty' || action.cart === null) {
            state.cart = []
            state.isLoading = false
            return state
        }
        else {
            let newarr = action.cart
            return { ...state, ...action, cart:newarr,isLoading:false }
        }

    }
    return state;
};





// const cart = []

// const id = 'key'

// const reducer = (state = INITIAL_STATE, action) => {
//     const product = action.product;
//     const restProducts = state.cart
//     switch (action.type) {
//         case 'GETUSERCARTDATA':
//             return { ...state, cart: [...product], isLoading: false }
//             break

//         case 'ADDITEMTOCART':
//             const exist = state.cart.find((x) => x[id] === product[id])
//             if (exist) {
//                 return state.cart.map((x) => x[id] === product[id] ? { ...state, cart: [...restProducts, { ...product, qty: +1 }] } : { ...state, cart: [...restProducts] 
//                 })
//             }

//             else {
//                 return {
//                     ...state,
//                     cart: [
//                         ...restProducts,
//                         {
//                             ...product,
//                             qty: 1
//                         }
//                     ]
//                 }
//             }

//             break

//         case 'REMOVEPRODUCT':
//             const exist2 = state.cart.find((x) => x[id] === product[id])
//             if (exist2) {
//                 let newarr = state.cart.filter((x) => x[id] !== product[id])
//                 return { ...state, cart: [...newarr] }
//             }

//             break

//         case 'DECREMENTITEM':
//             const exist3 = state.cart.find((x) => x[id] === product[id])
//             if (exist3) {
//                 if (exist3.qty > 1) {
//                     return state.cart.map((x) => x[id] === product[id] ? { ...x, qty: -1 } : x)
//                 }
//                 else {
//                     let newarr = state.cart.filter((x) => x[id] !== product[id])
//                     return { ...state, cart: [...newarr] }
//                 }
//             }
//             else {
//                 return [
//                     ...state,
//                     {
//                         ...product,
//                         qty: 1
//                     }
//                 ]
//             }
//             break



//         default:
//             return state
//     }
// }

export default reducer
