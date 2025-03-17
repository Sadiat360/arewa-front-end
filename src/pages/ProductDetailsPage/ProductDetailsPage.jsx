import './ProductDetailsPage.scss'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsItem from '../../components/ProductDetailsItem/ProductDetailsItem.jsx';
import block1 from '../../assets/images/block1.png'
import block3 from '../../assets/images/block3.png'
import block4 from '../../assets/images/block4.png';
import FilledRating from '../../svgs/FilledRating/FilledRating.jsx';
import RatingSvg from '../../svgs/RatingSvg/RatingSvg.jsx';
import FormModal from '../../components/FormModal/FormModal.jsx'
import Reviews from '../../components/Reviews/Reviews.jsx';
import { storage } from '../../firebase.js';
import axios from "axios";
import {ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/Cart.jsx';

function ProductDetailsPage(props){
      const [details,setDetails] = useState({});
      console.log('details:', details)
      const [reviews, setReviews] = useState([])
      const {slug} = useParams();
      console.log('what is id', slug)
     

      const [openModal, setOpenModal] = useState(false);
      const {reviewId }= useParams();
      console.log('what is reviewId:', reviewId)
      const carts = useSelector(store => store.cart.items);
      console.log('details page cart:',carts)
      const dispatch = useDispatch()

      function handleAddToCartClick(){
        if(!details.id){
          console.error('Product ID is missing');
          return;
        }
       dispatch(addToCart({
         productId: details.id,
         qauntity: 1
       }))
       console.log('Add to cart button clicked');
      }
      
      function toggleModal(){
        setOpenModal((prev)=> !prev)
      }
      useEffect(()=>{

        async function getBestSeller() {
            try{
                const response = await axios.get(`http://localhost:5050/bestseller/${slug}`)
                console.log('best seller details', response.data)
                setDetails(response.data.data)
    
            }catch (error){
                console.error('Error fetching best seller details')
            }
          }
          if (slug) {
            getBestSeller();
          }

      }, [slug]);

     useEffect(()=>{

      async function getReviews(){
        try{
            const response = await axios.get(`http://localhost:5050/bestseller/${slug}/reviews`)
            console.log('reviews fetched', response.data)
            setReviews(response.data)
        } catch (error){
           console.error('Error getting reviews', error)
        }
      }
      getReviews();
     }, [slug]);

     
      async function postReview(newReview) {

        try{
          const response = await axios.post(`http://localhost:5050/bestseller/${slug}/reviews`,newReview);
          console.log('review posted', response.data)
          setReviews((reviews)=> [response.data.data, ...reviews])
        }catch(error){
          console.error('Error posting review')
        }
        
      }
     const handleFormSubmit = async ({user,comment,file}) =>{
       const storageRef = ref(storage, `reviews/images/ ${file.name }`)
       await uploadBytes(storageRef, file);
        
       // Get the download URL of the uploaded image
       const image = await getDownloadURL(storageRef);
  
        const newReview ={ 
          user: user,
          comment: comment,
          image: image,
          createdAt: new Date(),
        }
      console.log('review button clicked');
     
      postReview(newReview)
       
     }

     async function putLikes(reviewId) {
         try{
           if(!reviewId){
            throw new Error('Missing reviewId')
           }
           const response = await axios.put(`http://localhost:5050/bestseller/${slug}/reviews/${reviewId}/like`)
           console.log('review likes incremented', response.data)
           setReviews(reviews => reviews.map(
            review => review.id === reviewId ?
          {...review, like: (review.like ||0) + 1} : review))
         }catch(error){
           console.error('Unable to update like')
         }
        
       }
      
    const handleReviewLike = async(reviewId)=>{
      if(!reviewId){
        console.error('Invalid reviewId:', reviewId);
        return
      }
      console.log('like button clicked with ID:', reviewId)
      await putLikes(reviewId); 
    }

    async function putUnLike(reviewId) {
           try{
            const response = await axios.put(`http://localhost:5050/bestseller/${slug}/reviews/${reviewId}/unlike`)
            console.log('Unlike response:', response.data)
            setReviews(reviews => reviews.map(review => review.id === reviewId?
              {...review, unlike: (review.unlike || 0)+1} : review
            ))
           }catch (error){
            console.error('Error updating dislike')
           }
    }
    const handleUnlikeClick = async(reviewId)=>{
      if(!reviewId){
        console.log('Invalid reviewId', reviewId)
        return
      }
      console.log('Unlike button clicked with ID:', reviewId)
      await putUnLike(reviewId)
    }
    async function deleteReview(reviewId) {
       try{
        const response = await axios.delete(`http://localhost:5050/bestseller/${slug}/reviews/${reviewId}`);
        console.log('Delete review response:', response.data)
        setReviews(reviews => reviews.filter((review => review.id !== reviewId )));
       } catch (error){
         console.error('Error deleting review')
       }
         
    }
    // const handleDelete = async(reviewId)=>{
    //   if(!reviewId){
    //     console.log('Invalid reviewId', reviewId)
    //     return
    //   }
    //   await deleteReview(reviewId)
    // }
    return(
      <>
          {openModal === true ? (<FormModal setOpenModal={setOpenModal} toggleModal={toggleModal} handleFormSubmit={handleFormSubmit}/>): null}
          <section className="details">    
           <ProductDetailsItem   details={details} handleAddToCartClick={handleAddToCartClick}/>
           <article className='rating'>
            <div className='rating-frame'>
             <div className='rating-container'>
              <h2 className='h2'>Reviews & Ratings</h2>
              <figure className='rating-figure'>
              <div className='rating-box' >
                <p className=' rating-number p1'>5 Stars</p>
                <img className='rating-image' src={block1} alt="rating block" />
              </div>
              <div className='rating-box' >
                <p className=' rating-number p1'>4 Stars</p>
                <img className='rating-image' src={block4} alt="rating block" />
              </div>
              <div className='rating-box' >
                 <p className=' rating-number p1'>3 Stars</p>
                 <img className='rating-image' src={block3} alt="rating block" />
              </div>
              <div className='rating-box' >
              <p className=' rating-number p1'>2 Stars</p>
              <img className='rating-image' src={block3} alt="rating block" />
              </div>
              <div className='rating-box' >
                <p className=' rating-number p1'>1 Stars</p>
                <img className='rating-image' src={block4} alt="rating block" />

              </div>

              </figure>
             
            </div>
              <div className='rating-wrap'>
                <h2>Overall Rating</h2>
                <div className='rating-svgBox'>
                    <p >4.5</p>
                  <div className="details-svg">
                      <FilledRating/>
                      <FilledRating/>
                      <FilledRating/>
                      <FilledRating/>
                      <RatingSvg/>
                  </div>
                    
                </div>
                <button onClick={ toggleModal} className='rating-btn'>Add a review</button>
              </div>
            </div>
           
          </article>
          </section>
          <Reviews reviews={reviews} handleReviewLike={handleReviewLike} handleUnlikeClick={handleUnlikeClick} deleteReview={deleteReview}/>
          
        
      </>
       
    )
}
export default ProductDetailsPage;