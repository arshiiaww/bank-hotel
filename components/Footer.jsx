const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__content-aboutus">
                        <h5 className="footer__content-aboutus__title">ABOUT US</h5>
                        <p className="footer__content-aboutus__description">
                            The five-star hotel in a beautiful European city with a modern restaurant, conference-hall, and art-bar.
                        </p>
                        <p className="footer__content-aboutus__description-copyright">
                            ©2021 All rights reserved. BankHotel
                        </p>
                    </div>
                    
                    <div className="footer__content-news">
                        <h5 className="footer__content-news__title">NEWS</h5>
                        <p className="footer__content-news__description">Sign up to our newsletter not to miss exclusive offers and information about the upcoming events.</p>
                        <div className="footer__email-box">
                            <form action="#" className="footer__form">
                                <input type="text" className="footer__input" placeholder="EMAIL" />
                                <button className="footer__submit" type="submit">
                                    <svg width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.48">
                                        <path d="M24 1C24 1 24.5833 3.47917 26.3333 5.60417C28.0833 7.72917 31 9.5 31 9.5C31 9.5 28.0833 11.2708 26.3333 13.3958C24.5833 15.5208 24 18 24 18" stroke="#313F38" strokeWidth="2"/>
                                        <rect x="0.25" y="9.25" width="29.5" height="0.5" fill="#313F38" stroke="#313F38" strokeWidth="0.5"/>
                                        </g>
                                        </svg>
                                </button>
                            </form>
                        </div>
                        
                    </div>
                    <div className="footer__content-social">
                        <h5 className="footer__content-social__title">SOCIAL</h5>
                        <div className="footer__content-social__links">
                            <a href="#" className="footer__content-social__link">FACEBOOK</a>
                            <a href="#" className="footer__content-social__link">INSTAGRAM</a>
                            <a href="#" className="footer__content-social__link">TWITTER</a>
                        </div>
                        <p className="footer__content-aboutus__description-copyright2">
                            ©2021 All rights reserved. BankHotel
                        </p>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;