import React from "react";
import CartItem from "../../components/CartItem.js";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context.js";
import { useContext } from "react";

function Cart() {
  const { cartState } = useContext(CartContext);

  const cartList = cartState.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      author={item.author}
      price={item.price}
      image={item.image}
    />
  ));

  return (
    <div className={classes.cart}>
      <h1>My Shopping Cart</h1>
      <ul className={classes.cartList}>{cartList}</ul>
    </div>
  );
}

export default Cart;
