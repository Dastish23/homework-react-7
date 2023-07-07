import React, { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import ProductListItem from './ProductListItem';
import { getProducts } from './slice/productSlice';


export default function ProductList() {
    const products   = useSelector(state => state.product.products);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])
    console.log(products);
    return (
        <div>
            {products.map((product) => <ProductListItem key={product._id}
                    product={product} />) 
                   
            }
        </div>
    )
}