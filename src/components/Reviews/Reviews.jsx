import './Reviews.scss'
import FilledRating from '../../svgs/FilledRating/FilledRating';
import RatingSvg from '../../svgs/RatingSvg/RatingSvg';
import {formatDate} from '../../utils/utils.jsx'
import LikeSvg from '../../svgs/LikeSvg/LikeSvg.jsx';
import DisLikeSvg from '../../svgs/DisLikeSvg/DisLikeSvg.jsx';
import TrashSvg from '../../svgs/TrashSvg/TrashSvg.jsx';

function Reviews({reviews,handleReviewLike, handleUnlikeClick,deleteReview}){
   
  
    return(
        <section className='review'>
            {reviews?.map ((element, reviewsIndex)=>
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
                         <div className='review-icon'>
                          <div className='review-like__wrap'> 
                          <button onClick={()=> handleReviewLike(element.id)} className='review-like__btn'><LikeSvg/><span>{element.like}</span></button> 
                           <button onClick={()=> handleUnlikeClick(element.id)} className='review-like__btn'><DisLikeSvg/>{element.unlike}</button>
                          </div>
                          <button onClick={()=> deleteReview(element.id)} className='review-delete'><TrashSvg/></button>
                         </div>
                         </div>
                        <div className='review-image__wrap'>
                         {element.image ?( 
                           <img className='review-image' 
                          src={element.image.startsWith('https') 
                           ? element.image 
                           : `http://localhost:5050/images/${element.image}`} alt="user review" />
                           
                       ) : null}
                        
                        </div>  
                       
                       </div>
                       

                    </div>
            )}
            

        </section>
    )
}
export default Reviews;