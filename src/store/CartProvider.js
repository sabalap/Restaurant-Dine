import { useReducer } from "react";
import CartContext from "./cart-context";
import { ActionTypes } from "./actions/action-types";
const defaultCartState = {
    products:[],
}
const cartReducer = (state,action) => {
    if(action.type === ActionTypes.ADD_PRODUCT_TO_CART) {
        const existingCartItemIndex = state.products.findIndex(
            (product) => product.id === action.product.id
          );
          const existingCartItem = state.products[existingCartItemIndex];
          let updatedProducts;
      
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              amount: existingCartItem.amount + action.product.amount,
            };
            updatedProducts = [...state.products];
            updatedProducts[existingCartItemIndex] = updatedItem;
          } else {
            updatedProducts = state.products.concat(action.product);
          }
          return {
            products: updatedProducts,
          };
    }
    if (action.type === ActionTypes.REMOVE_PRODUCT_FROM_CART) {
        const existingCartItemIndex = state.products.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.products[existingCartItemIndex];
        let updatedproducts;
        if (existingItem.amount === 1) {
          updatedproducts = state.products.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
          updatedproducts = [...state.products];
          updatedproducts[existingCartItemIndex] = updatedItem;
        }
        return {
          products: updatedproducts,
        };
      }
      if(action.type === ActionTypes.CLEAR_CART) {
          return defaultCartState;
      }
    return defaultCartState;
}
const CartProvider = ({children}) => {
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)

    const addProductToCartHandler = (product) => {
        dispatchCartAction({type:ActionTypes.ADD_PRODUCT_TO_CART,product:product})
    }
    const removeProductHandler = (id) => {
        dispatchCartAction({type:ActionTypes.REMOVE_PRODUCT_FROM_CART,id:id});
    }
    const clearCartHandler = () => {
        dispatchCartAction({type:ActionTypes.CLEAR_CART});
    }
    const cartContext = {
        products: cartState.products,
        totalAmount: cartState.totalAmount,
        addProduct: addProductToCartHandler,
        removeProduct:removeProductHandler,
        clearCart:clearCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;