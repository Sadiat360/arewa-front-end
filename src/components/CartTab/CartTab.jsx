import { useState } from 'react';
import axios from 'axios';
import './CartTab.scss';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem/CartItem';


function CartTab(){
    const carts = useSelector(store => store.cart.items)
    console.log('what is inside cartTab carts:', carts)

   
    return(
        <>
         <section className='cartTab'>
            <div className='cartTab-container'>
            <h2 className=' cartTab-heading h2'>Shopping Cart</h2>
            {carts.map((item, key)=>
                <CartItem key={key} data={item}/>
            )} 
            <button className='cartTab-checkout'>Checkout</button>
            </div>
          
        </section> 
        </>
    )
}
export default CartTab;