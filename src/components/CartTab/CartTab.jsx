import { useState } from 'react';
import './CartTab.scss';
import { useSelector, useDispatch } from 'react-redux';


function CartTab({details}){
    const [details, setDetails] = useState()
    // const [cartItem, setCartItem] = useState()
    // const carts = useSelector(store => store.cart.items)
    // console.log('what is inside cartTab carts:', carts)
    return(
        <>
         <section>
            {/* {cartItem.map((item)=>{
                return (
                    <div key={item.id}>
                       {item.photo}
                    </div>
                )
            })} */}
           
        </section> 
        </>
    )
}
export default CartTab;