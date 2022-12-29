import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";
const Checkout = (props) => {
    const [FormisValid,setFormisValid]=useState({name:true,street:true,postal:true,city:true})
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = (value) => value.trim() === '';
  const hasFiveChars = (value) => value.trim().length === 5;

  const ConfirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameisValid = !isEmpty(enteredName);
    const enteredStreetisValid = !isEmpty(enteredStreet);
    const enteredPostalisValid = hasFiveChars(enteredPostal);
    const enteredCityisValid = !isEmpty(enteredCity);

    setFormisValid({
        name:enteredNameisValid,
        street:enteredStreetisValid,
        postal:enteredPostalisValid,
        city:enteredCityisValid
    })

    const formIsValid =
      enteredNameisValid &&
      enteredStreetisValid &&
      enteredPostalisValid &&
      enteredCityisValid;

    if (!formIsValid) {
      return;
    }
    nameInputRef.current.value=''
    streetInputRef.current.value=''
    postalInputRef.current.value=''
    cityInputRef.current.value=''

    props.onConfirm({
        name:enteredName,
        street:enteredStreet,
        postal:enteredPostal,
        city:enteredCity
    })
  };
  const namecontrolClasses=`${classes.control} ${FormisValid.name ?'':classes.invalid}`
  const StreetcontrolClasses=`${classes.control} ${FormisValid.street ?'':classes.invalid}`
  const CitycontrolClasses=`${classes.control} ${FormisValid.city ?'':classes.invalid}`
  const PostalcontrolClasses=`${classes.control} ${FormisValid.postal ?'':classes.invalid}`

  return (
    <form className={classes.form} onSubmit={ConfirmHandler}>
      <div className={namecontrolClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!FormisValid.name && <p>Enter Valid Name</p>}
      </div>
      <div className={StreetcontrolClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!FormisValid.street && <p>Enter Valid Street</p>}

      </div>
      <div className={PostalcontrolClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!FormisValid.postal && <p>Enter Valid Postal-Code(1-5)</p>}
      </div>
      <div className={CitycontrolClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!FormisValid.city && <p>Enter Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button
          className={classes.cancel}
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
