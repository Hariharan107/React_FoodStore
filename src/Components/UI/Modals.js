import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modals = (props) => {
  const PortalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick}  />, PortalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </Fragment>
  );
};

export default Modals;
