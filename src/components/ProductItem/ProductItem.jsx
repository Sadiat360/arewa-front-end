import FilledRating from "../../svgs/FilledRating/FilledRating";
import RatingSvg from "../../svgs/RatingSvg/RatingSvg";
import HeartSvg from '../../svgs/HeartSvg/HeartSvg.jsx';
import { useState } from "react";

function ProductItem({details}){

    console.log('product item received details', details)
    const [openHowToUse, setOpenHowToUse] = useState(false);
    const [openIngredient, setOpenIngredient] = useState(false);

    function handleIngredientClick(){
        setOpenIngredient(!openIngredient)
        // setTogglePlusIcon(!togglePlusIcon)
        if(openHowToUse){
            setOpenHowToUse(false)
        } 
    }
    function handleHowtoUseClick(){
        setOpenHowToUse(!openHowToUse)
        if(openIngredient){
            setOpenIngredient(false)
        } 
    }
    return(
        <div className="details-container">
            <div className="details-image__wrap">
            <img className="details-image" src={`http://localhost:5050/images/${details?.photo}`} alt={details?.name} />
            </div>
            <div className="details-content">
                <p className="p1">{details.tags}</p>
                <div className="details-frame">
                    <div className="details-svg">
                    <FilledRating/>
                    <FilledRating/>
                    <FilledRating/>
                    <FilledRating/>
                    <RatingSvg/>

                    </div>
                  
                  <div className="details-box">
                    <HeartSvg/>
                    <button className="details-favorite p3 ">Arewa's Favorite</button>
                  </div>
                </div>
                <h2 className="h2">{details.name}</h2>
                <h2 className="h2">{details.price}</h2>

                <div className="details-btn__box">
                    <button className="details-btn__add">Add to cart</button>
                    <button className="details-btn ">-</button>
                    <p>1</p>
                    <button className="details-btn ">+</button>
                </div>

                <h3>Details</h3>
                <p className="p1">{details.details}</p>
                <div className="details-ingredient">
                <h3 className="h3">Ingredients</h3>
                <button onClick={handleIngredientClick} className="p1">{openIngredient ? "-" : "+"}</button>
                </div>
                 
                 {openIngredient && ( <div>
                    <p className="p1">{details.ingredients}</p>
                </div>)}

                <div className="details-ingredient">

                <h3 className="h3">How to use</h3>
                <button onClick={handleHowtoUseClick} className="p1">{openHowToUse ? "-" : "+"}</button>
                </div>
                {openHowToUse && ( 
                    <ul>
                {details.how_to_use?.map ((element,how_to_useIndex)=>{
                      return( <li className="p1" key={how_to_useIndex}>{element}</li>)
               
                  })} 
                   
                </ul>
               )}
               
               
               
            {/* <ul className="details-list">
             
              
              
              <li>{details.rating}</li>
              <li>{details.name}</li>
              
          
             </ul> */}

                

            </div>
           
            
        </div>
    )
}
export default ProductItem;