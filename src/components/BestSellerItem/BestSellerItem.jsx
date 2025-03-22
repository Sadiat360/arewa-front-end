import RatingSvg from '../../svgs/RatingSvg/RatingSvg.jsx'
import FilledRating from '../../svgs/FilledRating/FilledRating.jsx';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/Cart.jsx';

function BestSellerItem(props){
    const carts = useSelector(store => store.cart.items);
    console.log('what is inside carts:',carts)
    const {id, name,description,photo,rating,price, slug} = props.data
    // console.log('what is inside props.data',props.data)
    const dispatch = useDispatch();

    function handleAddToCart(){
        dispatch(addToCart({
            productId: id,
            quantity: 1
        }))
    }
    return(
        <div className="bestSeller-card">
             <div className="bestSeller-image__wrap">
             <Link to={slug}>
            <img className="bestSeller-image" src={`http://localhost:5050/images/${photo}`} alt="image" />
            </Link>   
            </div>
            <div className="bestSeller-container">
              <div className="bestSeller-item">
                 <div className='bestSeller-item__box'>
                 <p>
                  <FilledRating/>
                  <FilledRating/>
                  <FilledRating/>
                  <FilledRating/>
                  <RatingSvg/></p>
                 <p className="bestSeller-list p1">{rating}</p>
                  </div>
                  <ul className='bestSeller-list__wrap'>
                  <li className="bestSeller-list p1">{name}</li>
                  <li className="bestSeller-list__description">{description}</li>
                  </ul>    
              </div>
              <p className='bestSeller-price p1'>{price}</p>

            </div>

            <button onClick={handleAddToCart} className='bestSeller-btn'>Add to cart</button>
           
        </div>
    )
}
export default BestSellerItem;