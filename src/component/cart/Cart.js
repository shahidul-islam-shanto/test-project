import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const priceAll = cart[i];
        total = total + priceAll.price;
    }
    let shopping = 0;
  if(total > 500){
    shopping = 0;
  }else if(total > 50){
    shopping = 4.99;
  }else if(total > 0){
    shopping = 12.99;
  }
    const tax = total / 15;
    const grendTotal = total + tax + shopping;

    const formetNumber = num => {
        const formet = num.toFixed(2);
        return Number (formet);
    }
    return (
        <div>
            <h2>Order Sammary</h2>
            <p>Input Order: ${cart.length}</p>
            <p>Price: ${formetNumber(total)}</p>
            <p><small>Tax + VAT: ${formetNumber(tax)}</small></p>
            <p><small>Shopping: ${shopping}</small></p>
            <h5>Grend Total: ${formetNumber(grendTotal)}</h5>
        </div>
    );
};

export default Cart;