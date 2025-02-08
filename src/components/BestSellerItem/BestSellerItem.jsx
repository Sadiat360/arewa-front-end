
function BestSellerItem({bestSeller}){
    console.log('what is inside bestSeller Item', bestSeller)
    return(
        <div className="bestSeller-card">
            <div className="bestSeller-image__wrap">
                <img className="bestSeller-image" src={`http://localhost:5050/images/${bestSeller.photo}`} alt="image" />
            </div>
            <div className="bestSeller-container">
            <ul className="bestSeller-item">
                <li className="bestSeller-list">{bestSeller.rating}</li>
                <li>{bestSeller.name}</li>
                <li>{bestSeller.description}</li>
            </ul>
            <p>{bestSeller.price}</p>

            </div>
           

        </div>
    )
}
export default BestSellerItem;