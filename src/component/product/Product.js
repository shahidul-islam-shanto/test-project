import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Link } from 'react-router-dom';
 
const Product = (props) => {
  // console.log(props);
  const {img,name, seller,price, stock, key } = props.product 
    return (
        <div className='product'> 
           <div className='photo'>
             <img src={img} alt="" />
           </div>
            <div> 
               <h4 className='product-name'><Link to={'/product/'+ key}>{name}</Link></h4>
                <p><small>by: {seller}</small></p>
                 <p>Price: {price}</p>
                <p><small>Only {stock} left in stock -Order soon</small></p>
                {props.showAddNow && <button className='button'
                   onClick = {() => props.handleAddProduct(props.product)}
                > 
                  <FontAwesomeIcon icon={faCartShopping}/> Add now
                  </button>}
            </div>
        </div>
        
    );
};

export default Product;