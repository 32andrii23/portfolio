import './Hero.css'
import heroBg from '../../assets/background/hero-background.jpeg'
import downloadIcon from '../../assets/icons/download-icon.svg'

export default function Hero() {
  return (
    <header className='hero'>
        <div className="hero__bg">
            <img src={heroBg} alt="" />
        </div>
        <div className="hero__container">
            <div className="hero__content">
                <h1 className="hero__name">Popov Andrii</h1>
                <h2 className="hero__role" data-aos='fade-right'>a front-end web developer</h2>
                <button className="hero__cv-btn" data-aos='fade-right'>
                  <span>Завантажити CV</span>
                </button>
            </div>
        </div>
    </header>
  )
}
