import { useState, useEffect } from "react";
import axios from 'axios'

function CartItem(props){
    const {productId, quantity} = props.data;
    console.log('what is props', props)
    const [detail, setDetail] = useState({})
    console.log('what is cartItem detail', detail)
    
   
    useEffect(()=>{
        async function getBestSeller(){
            const response = await axios.get(`http://localhost:5050/bestseller`);
            console.log('cart item best seller',response.data)
            const findDetail = response.data.find(bestseller => bestseller.id === productId)[0];
            setDetail(findDetail || {})
            console.log('what is find detail:',findDetail)
     
         }
         getBestSeller()
       
    }, [productId])
    
    return(
        <div>
            <div>
                <img src={`http://localhost:5050/images/${detail.photo}`} alt="product image" />
            </div>
        </div>
    
    )
}
export default CartItem;