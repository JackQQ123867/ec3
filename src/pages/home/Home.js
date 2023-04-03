//import React, { useState } from "react";
import ProductItem from "../../components/ProductItem";
import CarouselFade from "../../components/CarouselFade";
import PaginationBasic from "../../components/PaginationBasic";
import classes from "./Home.module.css";
//import data from "../../productsData";

import { useState, useEffect } from "react"; //React Hook

function Home() {
  // Initialize the state indicating the active page
  const [page, setPage] = useState(1);
  // Each page contains 6 items
  const limit = 6;



  let [productList, setProductList] = useState([]);
  console.log(productList);

  useEffect(() => {
    fetch("http://219.78.81.241:8800/products")
      .then((response) => response.json())
      .then((data) => setProductList(data));

    console.log(productList);
  }, []); // <==  Dependency Array



  // Compute the number of pages from the number of items
  const pageCount = Math.ceil(productList.length / limit);

  // Compute the products should be shown in current page
  const start = 0 + (page - 1) * limit;
  const currentData = productList.slice(start, start + limit);




  const productsList = currentData.map((item) => (
    <ProductItem
      key={item.id}
      id={item.id}
      name={item.name}
      author={item.author}
      price={item.price}
      image={item.productImages[0].link}
    />
  ));

  return (
    <div className={classes.home}>
      <div className={classes.container}>
        <CarouselFade />
        <h1>Our Products</h1>
        <div className={classes.productsContainer}>{productsList}</div>
        <PaginationBasic pageCount={pageCount} page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default Home;
