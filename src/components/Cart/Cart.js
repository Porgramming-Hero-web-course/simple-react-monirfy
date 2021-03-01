import React from 'react';
import './Cart.css';
<img src="" alt="" />;
const Cart = ({ cart }) => {
  const total = cart.reduce((salary, curr) => salary + curr.price, 0);
  return (
    <div className="bg-light cart rounded p-3">
      <p className="text-center lead">Player In cart ({cart.length})</p>
      <ul className="list-group mt-3 mb-5">
        {cart.map(product => (
          <li key={product.id} className="list-group-item">
            <img src={product.image} alt="" /> {product.name} - {product.price} $
          </li>
        ))}
      </ul>
      <div className="checkout-btn text-center">
        <button className="btn btn-danger w-100">Total {total} $ </button>
      </div>
    </div>
  );
};

export default Cart;
