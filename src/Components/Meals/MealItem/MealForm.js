import React, { useRef, useState } from "react";
import classes from "./MealForm.module.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  const InputAmountRef = useRef();
  const [AmountisValid, setAmountisValid] = useState(true);

  
  const SubmitHandler = (event) => {
    event.preventDefault();
    const EnteredAmount = InputAmountRef.current.value;
    const EnteredAmountNumber = +EnteredAmount;

    if (
      EnteredAmount.trim().length === 0 ||
      EnteredAmountNumber < 1 ||
      EnteredAmountNumber > 5
    ) {
      setAmountisValid(false);
      return;
    }
    props.onAddtocart(EnteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <Input
        label="Amount"
        ref={InputAmountRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
      {!AmountisValid && <p>Enter Valid Amount(1-5)</p>}
    </form>
  );
};

export default MealForm;
