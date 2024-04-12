'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    function handleToggle() {
        setIsOpen((prevState) => !prevState)
    }

    const pathname = usePathname()
    const scrollToSection = (sectionClass) => {
        if (pathname == "/") {
            const sectionElement = document.querySelector(`.${sectionClass}`);
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };


    function handleFacilitiesLinkClick() {
      const targetSection = document.querySelector('.facilities');
      const targetSectionPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetSectionPosition - 170, behavior: 'smooth' });
    };
  

    return ( 
        <nav className="nav">
            <Link href="/" className="nav__title" onClick={() => scrollToSection('header')} scroll={false}>BankHotel</Link>
            <ul className={isOpen ? "menu menu--open" : "menu"}>
                <li className="menu__item">
                    <Link data-section="home" href="/" className="menu__link" onClick={() => scrollToSection('home')} scroll={false}>HOME</Link>
                </li>
                <li className="menu__item">
                    <Link data-section="aboutus" href="/" className="menu__link" onClick={() => scrollToSection('aboutus')} scroll={false}>ABOUT</Link>
                </li>
                <li className="menu__item">
                    <Link data-section="rooms-and-apartments" href="/" className="menu__link" onClick={() => scrollToSection('rooms-and-apartments')} scroll={false}>ROOMS</Link>
                </li>
                <li className="menu__item">
                  {/* menu__link scroll-link */}
                    <Link data-section="facilities" href="/" className="menu__link scroll-link" onClick={handleFacilitiesLinkClick} scroll={false}>FACILITIES</Link>
                </li>
                <li className="menu__item">
                    <Link data-section="our-gallery" href="/" className="menu__link" onClick={() => scrollToSection('our-gallery')} scroll={false}>OUR GALLERY</Link>
                </li>
                <li  className="menu__item">
                    <Link data-section="get-in-touch" href="/" className="menu__link" onClick={() => scrollToSection('get-in-touch')} scroll={false}>CONTACT</Link>
                </li>
            </ul>
            <span className="nav__number">+38 032 297 50 20</span>
            <div className={isOpen ? "nav__toggle-icon nav__toggle-icon--open" : "nav__toggle-icon"} onClick={handleToggle}>
                <div className="nav__toggle-line"></div>
            </div>
        </nav>
     );
}
 
export default Nav;