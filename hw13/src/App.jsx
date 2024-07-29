import "./App.css";
import Product from "./components/Product/Product.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { useState } from "react";

const prod = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [
      { id: 1, name: "Product-1", price: 100, count: 0 },
      { id: 2, name: "Product-2", price: 200, count: 0 },
      { id: 3, name: "Product-3", price: 300, count: 0 },
    ];

function App() {
  const [products, setProducts] = useState(prod);

  function handleProducts(id, operation) {
    let newData = "";
    if (operation === "+") {
      newData = products.map((p) => {
        if (p.id !== id) return p;
        else {
          let obj = { ...p, count: p.count + 1 };
          return obj;
        }
      });
      setProducts(newData);
    }
    if (operation === "-") {
      newData = products.map((p) => {
        if (p.id !== id) return p;
        else {
          let obj = { ...p, count: p.count - 1 >= 0 ? p.count - 1 : p.count };
          return obj;
        }
      });
      setProducts(newData);
    }
    localStorage.setItem("products", JSON.stringify(newData));
  }

  return (
    <div className="container">
      <Product products={products} handleProducts={handleProducts} />
      <Cart products={products} />
    </div>
  );
}

export default App;
