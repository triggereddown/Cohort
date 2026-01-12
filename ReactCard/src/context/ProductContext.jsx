import React, { useEffect } from "react";
import { createContext } from "react";

export const ProductDataContext = createContext();

const ProductContext = (props) => {
  const [productData, setProductData] = React.useState([]);
  const fetchProductData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.log("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);
  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  );
};

export default ProductContext;
