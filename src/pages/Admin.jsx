//varianta initiala a pg
// import React from "react";

// const Admin = () => {
//   return (
//     <div className="p-10">
//       <div>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             className="form-control p-2 mr-2 border-black  border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black"
//             type="text"
//             id="name"
//           />
//         </div>
//         <div>
//           <label htmlFor="imageURL">Image URL</label>
//           <input
//             type="text"
//             className="form-control p-2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             id="name"
//           />
//         </div>
//         <div>
//           <label htmlFor="price">Price</label>
//           <input
//             className="form-control p-2 mr-2 border-black  border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black "
//             type="text"
//             id="price"
//           />
//         </div>
//         <div>
//           <label htmlFor="descrption">Descrption</label>
//           <input
//             className="form-control p-2 mr-2 border-black  border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black"
//             type="text"
//             id="description"
//           />
//         </div>
//         <button className="">Save</button>
//       </div>
//     </div>
//   );
// };

// export default Admin;

import React, { useState, useEffect } from "react";

const Admin = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageURL: "",
  });
  //currentProductId, setCurrentProductId state pentru delete button
  const [currentProductId, setCurrentProductId] = useState("");
  const [products, setProducts] = useState(null);

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

  const addNewProduct = () => {
    const url = "https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    };
    fetch(url, options);
  };

  const deleteProduct = async (id) => {
    const url = `https://652bdb8ed0d1df5273eecf98.mockapi.io/3dproducts/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const updatedProducts = products.filter((product) => product.id != id);
      setProducts(updatedProducts);
    }
  };

  return (
    <div className="p-10">
      <div className="flex flex-col gap-4 place-content-center">
        <div className="flex gap-28 place-content-center">
          <label htmlFor="name">Name</label>
          <input
            className="form-control  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="name"
            value={product.name}
            onChange={(e) => {
              const productName = e.target.value;
              setProduct({ ...product, name: productName });
            }}
          />
        </div>
        <div className="flex gap-20 place-content-center">
          <label htmlFor="imageURL">Image URL</label>
          <input
            type="text"
            id="imageURL"
            className="form-control  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={product.imageURL}
            onChange={(e) => {
              const imageURL = e.target.value;
              setProduct({ ...product, imageURL: imageURL });
              //Valoarea input-ului este legată de product.name, astfel încât orice modificare a input-ului
              //va actualiza starea locală a componentei (product) prin intermediul funcției setProduct
              // onChange={(e) => { ... }}:  când valoarea input-ului este modificată,
              //se apelează o funcție care preia evenimentul e și actualizează starea locală a componentei product cu noul nume introdus
            }}
          />
        </div>
        <div className="flex gap-32 place-content-center">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            className="form-control  p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={product.price}
            onChange={(e) => {
              const productPrice = e.target.value;
              setProduct({ ...product, price: productPrice });
            }}
          />
        </div>
        <div className="flex gap-20 place-content-center ">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className=" form-control  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={product.description}
            onChange={(e) => {
              const productDescription = e.target.value;
              setProduct({ ...product, description: productDescription });
            }}
          />
        </div>
        <div className="flex justify-center items-center ">
          <button
            onClick={addNewProduct}
            className=" flex justify-center items-center flex-row  bg-green-800 px-7 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Add new product
          </button>

          {/* <button
            id={props.product.id}
            className=" flex flex-row  bg-green-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300"
            onClick={addProductToCart}
          >
            Add to cart
          </button> */}
        </div>
      </div>
      <div className="flex align-middle justify-center">
        {products && (
          <table className="mt-[100px] ">
            <thead>
              <th>Name</th>
              <th>Image URL</th>
              <th>Price</th>
              <th className="w-[600px] pl-[10px]">Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td className=" pr-[10px]">
                    <img src={product.imageURL} width={100} alt="" />
                  </td>
                  <td className=" pr-[10px]">{product.price}</td>
                  <td>{product.description}</td>
                  <td className="pr-[10px]">
                    <button
                      id={product.id}
                      //se selecteaza produsul cu id-ul mentionat
                      onClick={(e) => {
                        const productId = e.target.id;
                        setCurrentProductId(productId);
                        const productToBeEdited = products.find(
                          (product) => product.id === productId
                          //folosind metoda find gasesc acel produs in pagina
                        );
                        setProduct(productToBeEdited);
                        //updateaza un product selectat prin PUT, adauga o variabila noua in state de productId in pagina
                      }}
                      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400  shadow"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="pr-[10px]">
                    <button
                      id={product.id}
                      onClick={(e) => deleteProduct(e.target.id)}
                      className="pr-[10px] bg-[brown] hover:bg-[gray] text-gray-800 font-semibold py-2 px-4 border border-gray-400  shadow"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;
