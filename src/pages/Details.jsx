// import React from "react";

// const Details = () => {
//   return <div>Details</div>;
// };

// export default Details;

// ProductDetail.js
import React, { useEffect, useState } from "react";

const Details = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts"
      );
      const products = await response.json();
      // console.log(products);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return products ? (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <div className="flex items-center justify-center pt-10">
            <img src={product.imageURL} width={100} alt="" />
          </div>
          <div>
            <div className="font-bold">{product.name}</div>
            {product.description}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Details;
