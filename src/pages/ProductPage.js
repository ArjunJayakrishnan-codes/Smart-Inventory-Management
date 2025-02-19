import React from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { productName } = useParams();  

  if (!productName) {
    return <h2>Error: Product Not Found</h2>;
  }

  return (
    <div>
      <h1>Product: {decodeURIComponent(productName)}</h1>
      <p>This is the product details page for {decodeURIComponent(productName)}.</p>
    </div>
  );
}

export default ProductPage;
