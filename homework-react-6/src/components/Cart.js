import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQ, incrementQ, removeFromCart } from './slice/cartSlice';

export default function Cart() {
    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    
    return (
        <table>
            <tbody>
                    {cartItems.map(item => (
                    <tr key={item._id}><td>{item._id}</td>
                        <td><img src={item.picture} alt={item.picture} /></td>
                        <td>{item.name}</td>
                        <td><i onClick={() => dispatch(incrementQ(item))} className="bi bi-caret-up"></i>
                            <span>{item.quantity}</span>
                            <i onClick={() => dispatch(decrementQ(item))}></i>
                        </td>
                        <td>
                            ${item.price}
                        </td>
                        <td>
                            ${item.price * item.quantity} 
                        </td>
                        <td>
                            <i onClick={() => dispatch(removeFromCart(item))} className="bi bi-cart-x text-danger"></i>
                        </td>
                    </tr>
                ))
            }
                    <tr>
                        <th colSpan={3} >
                            Total
                        </th>
                        <td colSpan={3} >
                            <span>
                                     ${
                                        cartItems.reduce((acc,item) => acc += item.price * item.quantity,0)
                                      }
                            </span>
                        </td>
                    </tr>
             </tbody>
        </table>
                    
    )
}