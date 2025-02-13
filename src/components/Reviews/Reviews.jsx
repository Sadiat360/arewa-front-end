import './Reviews.scss'
import FilledRating from '../../svgs/FilledRating/FilledRating';
import RatingSvg from '../../svgs/RatingSvg/RatingSvg';
import {formatDate} from '../../utils/utils.jsx'
function Reviews({details}){
    return(
        <section className='review'>
            {details.reviews?.map ((element, reviewsIndex)=>
                  <div key={reviewsIndex} className='review-container'>
                     <div className='review-box'>
                       <h3 className='review-user h3'>{element.user}</h3>
                       <p className='p1'>{formatDate(element.timestamp)}</p>
                    </div>
                    <div className='review-frame'>
                      <div className='review-content'>
                        <div className="details-svg">
                          <FilledRating/>
                          <FilledRating/>
                          <FilledRating/>
                          <FilledRating/>
                          <RatingSvg/>
                        </div>
                        {/* <p>{element.rating}</p> */}
                        <p className='review-comment p1'>{element.comment}</p>
                      </div>
                     <div className='review-image__wrap'>
                       <img className='review-image' src={`http://localhost:5050/images/${element.image}`} alt="" />
                     </div>    
                    </div>
                 
                 </div>
            )}
            

        </section>
    )
}
export default Reviews;