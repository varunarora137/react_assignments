import "./App.css";
import Header from "./components/Header/Header.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState(4);

  function updateCartQuantity(data) {
    const val = data.reduce((acc, c) => acc + c.count, 0);
    setCartItems(val);
  }

  return (
    <>
      <Header cartItems={cartItems} />
      <Cart updateCartQuantity={updateCartQuantity} />
    </>
  );
}

export default App;
