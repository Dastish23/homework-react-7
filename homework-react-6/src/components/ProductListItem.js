import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './slice/cartSlice';

export default function ProductListItem({product}) {
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <img src={product.picture} alt="..." />
                <div>
                    <h5>{product.name}</h5>
                    <p>{product.description}</p>
                    <h4>{product.price}</h4>
                    <span>{product.color}</span>
                    <span>{product.category}</span>
                    <span>{product.tags}</span>
                    <button 
                        onClick={() => {
                            let item = null;
                            item = {...product, quantity: 1};
                            dispatch(addToCart(item));
                        }} 
                        >
                        <i className="bi bi-cart-check"></i>BUY
                    </button>
                </div>
            </div>
        </div>
    )
}