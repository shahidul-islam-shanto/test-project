import React, { useState } from 'react';
import { useEffect } from 'react';
import { getStoredCart, clearTheCart } from '../../utilities/fakedb';
import  fakeData from '../../fakeData/products.json';
import ReviewItem from '../reviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        //cart
        const saveCart = getStoredCart();
        const productKey = Object.keys(saveCart); 

        const cartProducts = productKey.map( key => {
            const product = fakeData.find(pd => pd.key === key);
             return product;
        })
       
        setCart(cartProducts);
    }, [])

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        clearTheCart(key);
    }
    return (
        <div>
            <h1>this is a review</h1>
            {
               cart.map(data => <ReviewItem 
               
                product={data}
                handleRemove={handleRemove}
                >
                </ReviewItem>)
            }
        </div>
    );
};

export default Review;