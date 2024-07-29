import "./Product.css";

function Product({ products, handleProducts }) {
  return (
    <div className="productContainer">
      <h1>Products</h1>
      {products.map((p) => {
        return (
          <div className="products" key={p.id}>
            <p>{p.name}</p>
            <p>{p.price}</p>
            <div className="btnContainer">
              <button onClick={() => handleProducts(p.id, "-")}>-</button>
              <span>{p.count}</span>
              <button onClick={() => handleProducts(p.id, "+")}>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
