import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.item[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.item.concat(action.item);
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.item[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.item.filter((item) => item.id !== action.id);
    } else {
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
    
  }
  if(action.type==="CLEAR")
    {
      return defaultCartState
    }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemtoCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const RemoveItemtoCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const ClearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };
  const cartContext = {
    items: cartState.item,
    totalAmount: cartState.totalAmount,
    addItem: addItemtoCartHandler,
    removeItem: RemoveItemtoCartHandler,
    clearCart:ClearCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
