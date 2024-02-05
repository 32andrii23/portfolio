import React, { useEffect, useState } from 'react'
import './Navbar.css'
import downloadIcon from '../../assets/icons/download-icon.svg'

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
        <div className="navbar__container" data-aos='fade-down'>
            <a href="#" className="navbar__logo">portfolio</a>
            <ul className="navbar__menu">
                <li className="navbar-menu__item"><a href="">Про мене</a></li>
                <li className="navbar-menu__item"><a href="">Навички</a></li>
                <li className="navbar-menu__item"><a href="">Досягнення</a></li>
            </ul>
            <button className="navbar__download-cv">
                <p>CV</p>
                <img src={downloadIcon} alt="" />
            </button>
        </div>
    </nav>
  )
}
