import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
 
const Product = (props) => {
  const {img,name, seller,price, stock } = props.product
    return (
        <div className='product'>
           <div className='photo'>
             <img src={img} alt="" />
           </div>
          <div>
            <div>
               <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                 <p>Price: {price}</p>
                <p><small>Only {stock} left in stock -Order soon</small></p>
                <button className='button'
                   onClick = {() => props.hendelAddProduct(props.product)}
                > 
                  <FontAwesomeIcon icon={faCartShopping}/> Add now</button>
            </div>
          </div>
        </div>
        
    );
};

export default Product;