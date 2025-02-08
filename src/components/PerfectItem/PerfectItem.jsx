import './PerfectItem.scss'
import ad1Data from '../../assets/images/ad1.png'
import ad2Data from '../../assets/images/ad2.png'

function PerfectItem(){
    return(
       <section className="perfect">
         <div className="perfect-container">
            <div className='perfect-box__image'>
                <img className='perfect__image' src={ad1Data} alt="model image" />
            </div>
            <div className='perfect-block'>
                <h2 className=' perfect-heading h2'>You + Arewa = PERFECT</h2>
                <p className='perfect-content p1'>When you blend your uniqueness with the elegance of Arewa, the result is nothing short of perfection.
                Because YOU bring the passion. AREWA brings the essence. And together? Perfection. ✨
                </p>

                <button className='perfect-btn'>Shop Now</button>
            </div>
            <div className='perfect-box__image'>
                <img className='perfect__image' src={ad2Data } alt="model image" />
            </div>

         </div>

       </section>
    )
}
export default PerfectItem;