import { useState } from "react";
import "./Cart.css";
import { useEffect } from "react";

function Cart({ products }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(products.reduce((acc, p) => acc + p.count * p.price, 0));
  }, [products]);
  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      {products.map((p) => {
        return (
          p.count > 0 && (
            <div className="cartProducts" key={p.id}>
              <p>{p.name}</p>
              <p>
                {p.count} x {p.price}
              </p>
            </div>
          )
        );
      })}
      {count === 0 ? (
        <h2 style={{ padding: "0 15px" }}>No Product added to the cart</h2>
      ) : (
        <div className="total">
          <h2>Total:</h2>
          <p>{count}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
