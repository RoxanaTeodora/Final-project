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
        <div key={product.id} className="flex justify-center">
          {/* Partea stângă pentru imagine și nume */}
          <div className="w-auto">
            <div className="flex justify-evenly pt-12 pl-20">
              <img src={product.imageURL} width={300} alt="" />
            </div>
            <div>
              <div className="font-bold justify-evenly pl-20 flex ">
                {product.name}
              </div>
            </div>
          </div>

          {/* Partea dreaptă pentru descriere */}
          <div className="w-1/2 flex flex-col justify-evenly mt-40 ">
            <div className="justify-center">{product.description}</div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Details;
