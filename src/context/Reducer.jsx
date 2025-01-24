const cartReducer = (state,action)=>{
  switch(action.type){
    case 'ADD_TO_CART':
      return {...state,cart:[...state.cart,{...action.payload, quantity:1}]}
    case 'REMOVE_FROM_CART':
      return {...state,cart:state.cart.filter(product=>product._id!==action.payload._id)}
     default:
      break; 
  }

}
export default cartReducer