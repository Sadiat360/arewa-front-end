import './ProductDetailsPage.scss'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from '../../components/ProductItem/ProductItem.jsx'
import axios from "axios";
function ProductDetailsPage(props){
      const [details,setDetails] = useState({});
      const {slug} = useParams();
      console.log('what is id', slug)
    //   const Details = slug;

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

      }, [slug])
     

    return(
       <section className="details">
        
                
           <ProductItem  details={details}/>
       </section>
    )
}
export default ProductDetailsPage;