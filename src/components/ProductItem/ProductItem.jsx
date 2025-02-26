import FilledRating from "../../svgs/FilledRating/FilledRating";
import RatingSvg from "../../svgs/RatingSvg/RatingSvg";
import HeartSvg from '../../svgs/HeartSvg/HeartSvg.jsx';
import { useState } from "react";
import AddSvg from "../../svgs/AddSvg/AddSvg.jsx";
import MinusSvg from "../../svgs/MinusSvg/MinusSvg.jsx";

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
                <div className="details-scroll">
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
                    <button className="details-btn "><MinusSvg/></button>
                    <p className="details-quantity p1">1</p>
                    <button className="details-btn "><AddSvg/></button>
                </div>

                <h3>Details</h3>
                <p className="p1">{details.details}</p>
                <div className="details-ingredient">
                   <h3 className="details-ingredient__text h3">Ingredients</h3>
                   <button onClick={handleIngredientClick} className="details-plusBtn p1">{openIngredient ? <MinusSvg/> :  <AddSvg/>}</button>
                </div>
                    
                {openIngredient && ( <div className="details__list">
                    <p className="p1">{details.ingredients}</p>
                 </div>)}

                <div className="details-ingredient">

                  <h3 className="details-ingredient__text h3">How to use</h3>
                  <button onClick={handleHowtoUseClick} className="details-plusBtn p1">{openHowToUse ? <MinusSvg/> : <AddSvg/>}</button>
                </div>
                {openHowToUse && ( 
                    <ul className="details-howToUse">
                {details.how_to_use?.map ((element,how_to_useIndex)=>{
                      return( <li className="p1" key={how_to_useIndex}>{element}</li>)
               
                  })} 
                   
                </ul>
               )}
                {openHowToUse && ( 
                    <div className="details-scroll__mob">
                    <ul className="details-howToUse__mob">
                {details.how_to_use?.map ((element,how_to_useIndex)=>{
                      return( <li className="p1" key={how_to_useIndex}>{element}</li>)
               
                  })} 
                   
                </ul>
                </div>
               )}
                </div>
            </div>
           
            
        </div>
    )
}
export default ProductItem;