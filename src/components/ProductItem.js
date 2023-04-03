import React from "react";
import classes from "./ProductItem.module.css";
import CartContext from "../store/cart-context";
import { useContext } from "react";

function ProductItem(props) {
  const { addCartItem } = useContext(CartContext);
  const addCartItemHandler = () => {
    addCartItem({
      id: props.id,
      name: props.name,
      price: props.price,
      image: props.image,
      author: props.author,
    });
  };

  return (
    <div className={classes.productItem}>
      <img src={props.image} alt="" />
      <div className={classes.productInfo}>
        <h1>{props.name}</h1>
        <div className={classes.infoBottom}>
          <div className={classes.infoLeft}>
            <span className={classes.author}>{props.author}</span>
            <span className={classes.price}>{props.price}</span>
          </div>
          <button onClick={addCartItemHandler}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
