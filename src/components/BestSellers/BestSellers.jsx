import { useEffect, useState } from 'react';
import './BestSellers.scss'
import axios from 'axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BestSellerItem from '../BestSellerItem/BestSellerItem';



function BestSellers(props){
    
    const [bestSeller, setBestSeller]= useState([]);
    const [loading, setLoading] = useState(true)
    // console.log('what is props:',props)
    console.log('what is bestSeller:',bestSeller)
    

     useEffect(()=>{
        async function getBestSeller(){
            try{
                const response = await axios.get('http://localhost:5050/bestseller')
                console.log('Best seller data:', response.data)
                setBestSeller(response.data)
                

            }catch(error){
                  console.error('error fetching best sellers data')
            }finally {
                setLoading(false);
            }
           
        }
        getBestSeller();

     }, [])
     const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
          breakpoint: { max: 1024, min: 700 },
          items: 2,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 1,
          partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
      }
    
    return(
        <section className='bestSeller'>
            <article className='bestSeller-content'>
              <h2 className='bestSeller-heading h2'>Best Sellers</h2>
              <p className='bestSeller-article p1'>"Discover our best-selling beauty products, loved by customers for their quality and results. Shop the top-rated items that have become instant favorites in skincare and makeup!"</p>

            </article>
            
            <Carousel partialVisible={true} responsive={responsive}>
            {loading ? (
                    <p>Loading best sellers...</p> // ✅ Show loading text while fetching data
                ) : bestSeller.length > 0 ? (
                    bestSeller.map((item) => (
                        <BestSellerItem key={item.id} data={item} />
                    ))
                ) : (
                    <p>No best sellers available.</p> // ✅ Show this if API returns an empty array
                )}
            </Carousel>
           
           
               
           
           
        </section>
    )
}
export default BestSellers;