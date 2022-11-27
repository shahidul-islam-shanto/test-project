import React from 'react';
import './ReviewItem.css';



const ReviewItem = (props) => {
     console.log(props);
     const { name, price, key } = props.product;
     const { handleRemove } = props;
    return (
         <div className='review-area'>
            <h1>{name}</h1>
            <p>Quantity: {price}</p>
            <br />
            <button onClick={() => handleRemove(key)} className='button'>Remove</button>
        </div>
    );
};
//onClick={() => handleRemove(key)}
export default ReviewItem;