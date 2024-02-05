import React from 'react'
import './About.css'
import arrowDown from '../../assets/icons/arrow-down.svg'

export default function About() {
  return (
    <div className='about'>
        <div className="about__container">
            <div className="about__scroll-icon">
                <img src={arrowDown} alt="" />
            </div>
            <h3 className="about__heading" data-aos='fade-down'>
                про мене<span style={{color: 'var(--main-color)', fontSize: '3rem'}}>.</span>
            </h3>
            <p className='about__me'>Андрій, 19 років, фронт-енд веб-розробник...</p>
            <h3 className="about__heading" data-aos='fade-down'>
                навички<span style={{color: 'var(--main-color)', fontSize: '3rem'}}>.</span>
            </h3>
            <div className="about__grid">
                <div className="about-grid__div-main about-grid" data-aos='zoom-in'>
                    <div className="about-grid__info">
                        
                        <ul>
                            <li>— готовий прийняти виклик і зробити внесок у ваш проєкт;</li>
                            <li>— маю постійне бажання удосконалюватись та працювати в команді;</li>
                            <li>— здатний самостійно вивчати нові технології або визнати особисту помилку та вжити заходи;</li>
                        </ul>
                    </div>
                    <div className="about-grid__title">
                        soft skills
                    </div>
                </div>
                <div className="about-grid__div-english about-grid" data-aos='zoom-in'>
                    <div className="about-grid__info">
                        <ul>
                            <li>— володіння кожним аспектом на високому рівні;</li>
                            <li>— орієнтований рівень: B2-C1;</li>
                        </ul>
                    </div>
                    <div className="about-grid__title">
                        English
                    </div>
                </div>
                <div className="about-grid__div-basics about-grid" data-aos='zoom-in'>
                    <div className="about-grid__info">
                        <ul>
                            <li>— HTML: БЕМ, семантика...;</li>
                            <li>— CSS: адаптивна верстка, SCSS...;</li>
                            <li>— JS: Vanilla JS...;</li>
                        </ul>
                    </div>
                    <div className="about-grid__title">
                        HTML, CSS, JS
                    </div>
                </div>
                <div className="about-grid__div-react about-grid" data-aos='zoom-in'>
                    <div className="about-grid__info">
                        
                    </div>
                    <div className="about-grid__title">
                        React
                    </div>
                </div>
                <div className="about-grid__div-vcs about-grid" data-aos='zoom-in'>
                    <div className="about-grid__info">
                        
                    </div>
                    <div className="about-grid__title">
                        VCS
                    </div>
                </div>
                <div className="about-grid__div-adaptive about-grid" data-aos='zoom-in'>
                    <div className="about-grid__info">
                        
                    </div>
                    <div className="about-grid__title">
                        smth (figma, ps?)
                    </div>
                </div>
                <div className="about-grid__div-small-libraries about-grid" data-aos='zoom-in'>
                    <div className="about-grid__info">
                        
                    </div>
                    <div className="about-grid__title">
                        Other libraries
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
