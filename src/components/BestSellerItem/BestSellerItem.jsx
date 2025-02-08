import RatingSvg from '../../svgs/RatingSvg/RatingSvg.jsx'
import FilledRating from '../../svgs/FilledRating/FilledRating.jsx';
import { Link } from 'react-router-dom';
function BestSellerItem(props){

    const {id, name,description,photo,rating,price, slug} = props.data
    console.log('what is inside props.data',props.data)
    return(
        <div className="bestSeller-card">
             <div className="bestSeller-image__wrap">
             <Link to={slug}>
            <img className="bestSeller-image" src={`http://localhost:5050/images/${photo}`} alt="image" />
            </Link>
                
            </div>
           
            
            <div className="bestSeller-container">
              <ul className="bestSeller-item">
                 <div className='bestSeller-item__box'>
                 <p>
                  <FilledRating/>
                  <FilledRating/>
                  <FilledRating/>
                  <FilledRating/>
                  <RatingSvg/></p>
                 <li className="bestSeller-list p1">{rating}</li>
                  </div> 
                  <li className="bestSeller-list p1">{name}</li>
                  <li className="bestSeller-list p1">{description}</li>
              </ul>
              <p>{price}</p>

            </div>

            <button className='bestSeller-btn'>Add to cart</button>
           

        </div>
    )
}
export default BestSellerItem;