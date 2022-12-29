import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modals from "../UI/Modals";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [order, setOrder] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [didsubmit, setdidsubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setOrder(true);
  };

  const orderConfirmHandler = async (userData) => {
    setisSubmitting(true);
    setError(false);
    try {
      const response = await fetch(
        "https://react-api-c7ada-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            userDetails: userData,
            orderedItems: cartCtx.items,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Something went Wrong");
      }
    } catch (error) {
      isSubmitting(false)
      didsubmit(false)
      setError(error.message);
    }
    setisSubmitting(false);
    setdidsubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes.cart_items}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const OrderButtons = (
    <div className={classes.actions}>
      <button className={classes.button__alt} onClick={props.onHideCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  const isSubmuttingContent = (
    <React.Fragment>
      <div className={classes['lds-heart']}>
        <div></div>
      </div>
      <p className={classes.sending}>Sending Order Data</p>
    </React.Fragment>
  );
  const hasErrors = <p>Something Went Wrong</p>;
  const isSubmittedContent = (
    <React.Fragment>
      <p className={classes.sending}>Successfully Ordered.Sit Tight😉</p>
      <div className={classes.actions}>
        <button className={classes.tasty} onClick={props.onHideCart}>
          Tasty😋
        </button>
      </div>
    </React.Fragment>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {order && (
        <Checkout onConfirm={orderConfirmHandler} onCancel={props.onHideCart} />
      )}
      {!order && OrderButtons}
    </React.Fragment>
  );

  return (
    <Modals onClick={props.onHideCart}>
      {!isSubmitting && !didsubmit && cartModalContent}
      {isSubmitting && error && !didsubmit && hasErrors}
      {isSubmitting && isSubmuttingContent}
      {didsubmit && isSubmittedContent}
    </Modals>
  );
};

export default Cart;
