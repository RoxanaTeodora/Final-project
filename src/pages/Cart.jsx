import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bin from "../assets/bin.png";
import add from "../assets/add.png";
import minus from "../assets/minus.png";

const Cart = () => {
  const [products, setProducts] = useState(null);
  //valoarea initiala lui productsInCart este ce se afla in localStorage
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );
  const [totalPrice, setTotalPrice] = useState(0);

  //se face un request api in ambele pg home and cart
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts`
      );
      const products = await response.json();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products && productsInCart) {
      let total = 0;
      productsInCart.forEach((item) => {
        const product = products.find((p) => p.id === item.id);
        if (product) {
          total += product.price * item.qt;
        }
      });
      setTotalPrice(total);
    }
  }, [products, productsInCart]);
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
    <div className="p-10 gap-10 flex flex-col ">
      {productsInCart.map((productInCart) => {
        const product = getProductById(productInCart.id);

        return (
          <div
            className="flex gap-10 justify-between items-center"
            key={productInCart.id}
          >
            <table className="w-full">
              <tr className="flex justify-center items-center">
                <td className="p-10 w-[250px]">
                  <p>{product.name}</p>
                </td>
                <td className="p-2 justify-center align-middle flex">
                  <img width={150} src={product.imageURL} alt={product.name} />
                </td>
                <td className="p-10 ">
                  <p>{product.price}</p>
                </td>
                <td className="p-2 flex gap-5 items-center">
                  <img
                    src={minus}
                    alt="minus"
                    className="w-[20px] hover:cursor-pointer"
                    id={productInCart.id}
                    onClick={decreaseQuantity}
                  />

                  <p>{productInCart.qt}</p>

                  <img
                    src={add}
                    alt="add"
                    className="w-[20px] hover:cursor-pointer"
                    id={productInCart.id}
                    onClick={increaseQuantity}
                  />

                  <img
                    src={bin}
                    alt="bin"
                    className="w-[20px] hover:cursor-pointer"
                    onClick={deleteProductFromCart}
                    id={productInCart.id}
                  />
                </td>
              </tr>
            </table>
          </div>
        );
      })}
      <div className="flex justify-center items-center">
        <p className="mr-10">Total: {totalPrice} RON</p>
      </div>
    </div>
  ) : (
    <div className="pt-20">
      Cosul este momentan gol, va rugam sa adaugati produse din{" "}
      <Link className="underline text-blue-500" to="/">
        pagina de produse
      </Link>
    </div>
  );
};

export default Cart;
