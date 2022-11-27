import React from 'react';
import { Link } from 'react-router-dom';
//import Review from '../review/Review';
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
    const grandTotal = total + tax + shopping;

    const formatNumber = num => {
        const format = num.toFixed(2); 
        return Number (format);
    } 
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Input Order: ${cart.length}</p>
            <p>Price: ${formatNumber(total)}</p>
            <p><small>Tax + VAT: ${formatNumber(tax)}</small></p>
            <p><small>Shopping: ${shopping}</small></p>
            <h4>Grand Total: ${formatNumber(grandTotal)}</h4>
           <Link to="/review"> <button className='button'>Review Order</button></Link>
           
        </div>
    );
};

export default Cart;