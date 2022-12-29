import React from "react";
// import MealsImg from "../../Assets/res.jpg"
import classes from "./Header.module.css";
import HeaderCartbutton from "./HeaderCartbutton";
const Header = (props) => {
  let MealsImg =
    "https://img.mensxp.com/media/content/2022/Dec/Header-Image-Credit-Twitter-FIFA-1400_639feac656718.jpeg?w=656&h=432&cc=1";
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Messi_Meals</h1>
        <HeaderCartbutton onClick={props.onShowcart} />
      </header>
      <div className={classes.main_image}>
        <img className={classes.messi} src={MealsImg} height="400px" alt="GG" />
      </div>
    </React.Fragment>
  );
};

export default Header;
