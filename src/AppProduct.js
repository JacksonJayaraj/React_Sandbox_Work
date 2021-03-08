import React from "react";
import Product from "./Product";
import productList from "./vshoolProducts";

function AppProduct() {
  const productComponents = productList.map((items) => (
    <Product key={items.id} product={items} />
  ));
  return productComponents;
}

export default AppProduct;

/*

  return (
    <div>
      <Product name="Pencil" price="1" description="useful" />
    </div>
  );

  
*/
