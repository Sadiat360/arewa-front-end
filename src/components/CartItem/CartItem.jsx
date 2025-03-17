import { useState, useEffect } from "react";
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";
import './CartItem.scss'
import AddSvg from "../../svgs/AddSvg/AddSvg";
import MinusSvg from "../../svgs/MinusSvg/MinusSvg";
import { Link } from "react-router-dom";


function CartItem({data}){
    const {productId, quantity} = data;
    console.log('what is data', data)
    const [detail, setDetail] = useState(data)
    console.log('what is cartItem detail', detail)
    const [qauntity, setQuantity] = useState(1)
    const navigate = useNavigate()
    
   
    useEffect(()=>{
        async function getBestSellerDetail(){
            try{
                const response = await axios.get(`http://localhost:5050/bestseller/by-id/${productId}`);
                console.log('cart item best seller',response.data.data)
                setDetail(response.data.data)
            }catch(error){
                console.error('Error fetching product details:', error)
            }
            
     
         }
         getBestSellerDetail()
       
    }, [productId, quantity])

    function handleImageClick(){
        if(detail.slug){
            navigate(`/${detail.slug}`)
        }
       
    }
    function handleMinusClick(){
        if(quantity > 1){
           setQuantity(prev => prev - 1)
        }
    }
    function handleAddClick(){
        setQuantity(prev => prev + 1)
    }
    return(
        <figure className="cartItem">
            <div className="cartItem-box">
                  <img onClick={handleImageClick} className="cartItem-image" src={`http://localhost:5050/images/${detail.photo}`} alt="product image" />
            </div>
            <div className="cartItem-content">
                <div className="cartItem-text__frame">
                  <p>{detail.name}</p>
                  <p>{detail.price}</p>

                </div>
              
              <div className="cartItem-btn__box">
              <button onClick={handleMinusClick} className='cartItem-minusBtn p1'><MinusSvg /></button> {qauntity}
              <button  onClick={handleAddClick} className='cartItem-plusBtn p1'><AddSvg /></button>
              </div>
             
            </div>
           
        </figure>
    
    )
}
export default CartItem;