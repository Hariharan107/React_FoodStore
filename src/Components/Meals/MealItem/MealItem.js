import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealForm from "./MealForm";
import CartContext from "../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const CartCtx = useContext(CartContext);

  const AddCartHandler = (amount) => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <section className={classes.meal} key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm onAddtocart={AddCartHandler} />
      </div>
    </section>
  );
};

export default MealItem;
