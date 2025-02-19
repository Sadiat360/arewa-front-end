import './ProductDetailsPage.scss'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from '../../components/ProductItem/ProductItem.jsx';
import block1 from '../../assets/images/block1.png'
import block3 from '../../assets/images/block3.png'
import block4 from '../../assets/images/block4.png';
import FilledRating from '../../svgs/FilledRating/FilledRating.jsx';
import RatingSvg from '../../svgs/RatingSvg/RatingSvg.jsx';
import FormModal from '../../components/FormModal/FormModal.jsx'
import Reviews from '../../components/Reviews/Reviews.jsx';
// import { getStorage, ref,uploadBytes,getDownloadURL } from '../../firebase.js';
import { storage } from '../../firebase.js';
import axios from "axios";
import {ref, getDownloadURL, uploadBytes } from 'firebase/storage';
function ProductDetailsPage(props){
      const [details,setDetails] = useState({});
      const [reviews, setReviews] = useState([])
      const {slug} = useParams();
      console.log('what is id', slug)
      const [openModal, setOpenModal] = useState(false);
      const [closeModal, setCloseModal] = useState(false);
      

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
      getReviews()
     

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
    return(
      <>
          {openModal === true ? (<FormModal setOpenModal={setOpenModal} toggleModal={toggleModal} handleFormSubmit={handleFormSubmit}/>): null}
          <section className="details">    
           <ProductItem  details={details}/>
           <article className='rating'>
            <div className='rating-frame'>
             <div className='rating-container'>
              <h2>Reviews & Ratings</h2>
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
                    <p>4.5</p>
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
          <Reviews reviews={reviews}/>
          
        
      </>
       
    )
}
export default ProductDetailsPage;