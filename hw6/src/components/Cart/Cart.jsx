import "./Cart.css";
import Product from "../Product/Product.jsx";
import { useState } from "react";

function Cart({ updateCartQuantity }) {
  const [cartData, setCartData] = useState([
    {
      id: 1,
      src: "https://www.course-api.com/images/cart/phone-1.png",
      count: 1,
      company: "Samsung Galaxy S8",
      price: 399.99,
    },
    {
      id: 2,
      src: "https://www.course-api.com/images/cart/phone-2.png",
      count: 1,
      company: "Google Pixel",
      price: 499.99,
    },
    {
      id: 3,
      src: "https://www.course-api.com/images/cart/phone-3.png",
      count: 1,
      company: "Xiaomi Redmi Note 2",
      price: 699.99,
    },
    {
      id: 4,
      src: "https://www.course-api.com/images/cart/phone-4.png",
      count: 1,
      company: "Samsung Galaxy S7",
      price: 599.99,
    },
  ]);

  const [total, setTotal] = useState(2199.96);

  function calculateTotal(cartData) {
    const tempTotal = cartData.reduce((acc, c) => acc + c.count * c.price, 0);
    setTotal(tempTotal.toFixed(2));
  }

  function inc(id) {
    const tempData = [...cartData];
    const updatedData = tempData.map((c) => {
      if (c.id === id) {
        const obj = { ...c, count: c.count + 1 };
        return obj;
      } else return c;
    });
    setCartData(updatedData);
    calculateTotal(updatedData);
  }
  function dec(id) {
    const tempData = [...cartData];
    const updatedData = tempData
      .map((c) => {
        if (c.id === id) {
          const obj = { ...c, count: c.count - 1 };
          return obj;
        } else return c;
      })
      .filter((c) => c.count > 0);
    setCartData(updatedData);
    calculateTotal(updatedData);
  }
  function remove(id) {
    const tempData = [...cartData];
    const updatedData = tempData.filter((c) => c.id !== id);
    setCartData(updatedData);
    calculateTotal(updatedData);
  }

  updateCartQuantity(cartData);

  return (
    <div className="cart">
      <p className="bag">YOUR BAG</p>
      {cartData.length === 0 ? (
        <p className="empty">is currently empty</p>
      ) : (
        <div className="cartInnerContainer">
          <div className="cartItems">
            {cartData.map((c) => (
              <Product
                key={c.id}
                src={c.src}
                company={c.company}
                price={c.price}
                inc={() => inc(c.id)}
                dec={() => dec(c.id)}
                remove={() => remove(c.id)}
                quantity={c.count}
              />
            ))}
          </div>
          <div className="line"></div>
          <div className="totalDiv">
            <div className="totalAndAmount">
              <p className="total">Total</p>
              <div className="amount">
                <p>{total}</p>
              </div>
            </div>
            <button onClick={() => setCartData([])}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
