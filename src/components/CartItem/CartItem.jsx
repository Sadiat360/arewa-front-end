import { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";
import './CartItem.scss'
import AddSvg from "../../svgs/AddSvg/AddSvg";
import MinusSvg from "../../svgs/MinusSvg/MinusSvg";

function CartItem({data}){
    const {productId, quantity} = data;
    console.log('what is data', data)
    const [detail, setDetail] = useState(data)
    console.log('what is cartItem detail', detail)
    // const {slug} = useParams()
    
   
    useEffect(()=>{
        async function getBestSellerDetail(){
            try{
                const response = await axios.get(`http://localhost:5050/bestseller//by-id/${productId}`);
                console.log('cart item best seller',response.data.data)
                // const findDetail = response.data.find(bestSeller => bestSeller === productId);
                // setDetail(findDetail || {})
                // console.log('what is find detail:',findDetail)
                setDetail(response.data.data)
            }catch(error){
                console.error('Error fetching product details:', error)
            }
            
     
         }
         getBestSellerDetail()
       
    }, [productId, quantity])
    
    return(
        <figure className="cartItem">
            <div className="cartItem-box">
                <img className="cartItem-image" src={`http://localhost:5050/images/${detail.photo}`} alt="product image" />
            </div>
            <div className="cartItem-content">
                <div className="cartItem-text__frame">
                  <p>{detail.name}</p>
                  <p>{detail.price}</p>

                </div>
              
              <div className="cartItem-btn__box">
              <button className='cartItem-minusBtn p1'><MinusSvg /></button>  1 
              <button className='cartItem-plusBtn p1'><AddSvg /></button>

              </div>
             
            </div>
           
        </figure>
    
    )
}
export default CartItem;