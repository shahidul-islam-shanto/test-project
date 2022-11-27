import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import { addToDb} from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';



const Shop = () => {
    //console.log(fakeData);
    const first = fakeData.slice(0, 60)
    const [product, setProduct] = useState(first)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
       // console.log('added product', product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key, 1);
       
    }
    
    return (
        <div className='shop-container'>
            <div className='product-container'>
    
                 {
                     product.map(pd => <Product 
                        key = {pd.key}
                        showAddNow = {true}
                        handleAddProduct = {handleAddProduct}
                        product={pd}
                        ></Product>)
                 }
                
            </div>
            
             <div className='cart-container'>
               <Cart cart= {cart}></Cart>
               
             </div>
             
        </div>
    );
};

export default Shop;