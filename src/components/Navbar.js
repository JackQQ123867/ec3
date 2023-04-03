import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={classes.navbar}>
      <Link to="/" className={classes.brand}>
        {props.brand}
      </Link>
      <Link to="/cart" className={classes.cart}>
        Cart
      </Link>
    </div>
  );
}

export default Navbar;
