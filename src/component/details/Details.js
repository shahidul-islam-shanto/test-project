import React from 'react';
import { useParams} from 'react-router-dom';
import fakeData from '../../fakeData/products.json';
import Product from '../product/Product';


const Details = () => {
    let {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey)
    console.log(product);
    return (
        <div>
            <h1>Id: {productKey}</h1>
            <Product showAddNow={false} product={product}></Product>
        </div>
    );
};

export default Details;