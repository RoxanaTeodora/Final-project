import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState(null);
  //valoarea initiala lui productsInCart este ce se afla in localStorage
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );

  //se face un request api in ambele pg home and cart
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts"
      );
      const products = await response.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);
  // lista de dependențe, iar dacă aceasta este goală, efectul se va rula doar o singură dată return
  //useEffect se ruleaza doar la incarcare in pg sau cand se schimba mai multe state-uri, ex. seara se schimba preturile cu alt api

  const getProductById = (id) => {
    const product = products.find((product) => product.id === id);
    return product;
  };

  const handleProductQuantity = (productsInCart, productId, action) => {
    const currentProduct = productsInCart.find(
      (product) => product.id === productId
    );
    const indexOfProductToBeDeleted = productsInCart.indexOf(currentProduct);

    console.log("current product = ", currentProduct);

    switch (action) {
      case "decrease":
        if (currentProduct.qt > 1) currentProduct.qt = currentProduct.qt - 1;
        break;
      case "increase":
        currentProduct.qt = currentProduct.qt + 1;
        break;
      case "delete":
        //prin splice stergem un element din array
        productsInCart.splice(indexOfProductToBeDeleted, 1);
        break;
    }
    //daca array-ul nu mai are niciun element atunci este scos din localStorage din browser
    if (productsInCart.length === 0) {
      localStorage.removeItem("cart");
      setProductsInCart(null);
    } else {
      localStorage.setItem("cart", JSON.stringify(productsInCart));
      setProductsInCart(productsInCart);
    }
  };

  //const productsInCart este o variabila cu acelas nume cu state-ul
  //nu schimbam starea

  const decreaseQuantity = (e) => {
    const productsInCart =
      JSON.parse(window.localStorage.getItem("cart")) ?? [];
    handleProductQuantity(productsInCart, e.target.id, "decrease");
  };
  // cazul "decrease" din swith

  const increaseQuantity = (e) => {
    const productsInCart =
      JSON.parse(window.localStorage.getItem("cart")) ?? [];
    handleProductQuantity(productsInCart, e.target.id, "increase");
  };

  const deleteProductFromCart = (e) => {
    const productsInCart =
      JSON.parse(window.localStorage.getItem("cart")) ?? [];
    handleProductQuantity(productsInCart, e.target.id, "delete");
  };
  //intoarce un div doar daca exista produse in cart, nu sunt null

  //daca exista produce in card
  return products && productsInCart ? (
    <div className="p-10 gap-10 flex flex-col justify-center items-center">
      {productsInCart.map((productInCart) => {
        const product = getProductById(productInCart.id);

        return (
          <div
            className="flex gap-10 justify-between items-center"
            key={productInCart.id}
          >
            <p>{product.name}</p>
            <img width={80} src={product.imageURL} />
            <p>{product.price}</p>
            <div className="flex gap-5 items-center">
              <button
                id={productInCart.id}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <p>{productInCart.qt}</p>
              <button
                id={productInCart.id}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={increaseQuantity}
              >
                +
              </button>
              <button
                id={productInCart.id}
                className="bg-red-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={deleteProductFromCart}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div>
      Cosul este momentan gol, va rugam sa adaugati produse din{" "}
      <Link className="underline text-blue-500" to="/">
        pagina de produse
      </Link>
    </div>
  );
  g;
};

export default Cart;
