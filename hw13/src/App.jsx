import "./App.css";
import Product from "./components/Product/Product.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product-1", price: 100, count: 0 },
    { id: 2, name: "Product-2", price: 200, count: 0 },
    { id: 3, name: "Product-3", price: 300, count: 0 },
  ]);

  function handleProducts(id, operation) {
    if (operation === "+") {
      setProducts(
        products.map((p) => {
          if (p.id !== id) return p;
          else {
            let obj = { ...p, count: p.count + 1 };
            return obj;
          }
        })
      );
    }
    if (operation === "-") {
      setProducts(
        products.map((p) => {
          if (p.id !== id) return p;
          else {
            let obj = { ...p, count: p.count - 1 >= 0 ? p.count - 1 : p.count };
            return obj;
          }
        })
      );
    }
  }

  return (
    <div className="container">
      <Product products={products} handleProducts={handleProducts} />
      <Cart products={products} />
    </div>
  );
}

export default App;
