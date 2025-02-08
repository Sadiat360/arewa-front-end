import './Hero.scss'
import ArewaHero from '../../assets/images/Arewa-hero.png'
function Hero(){
    return(
        <section className='hero'>
            <img className='hero-image' src={ArewaHero} alt="hero-image" />
            <article className='hero-content'>
                <p className='hero-content__text p1'>We call you 'Arewa'</p>
                <h1 className='hero-content__phrase h1'>BEST BEAUTY HUB & ELEGANCE</h1>
                <button className='hero-btn'>Shop Now</button>

            </article>

        </section>
    )
}
export default Hero;