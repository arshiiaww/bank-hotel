import Image from 'next/image';
import GINimg from "/public/assets/images/get-in-touch-img.jpg";

const GetInTouch = () => {
    return ( 
        <section className="get-in-touch" id="contact">
            <div className="container">
                <p className="get-in-touch__number">+38 032 297 50 20</p>
                <div className="get-in-touch__content">
                    <div className="get-in-touch__title">
                        <h2 className="get-in-touch__title-getin">GET IN</h2>
                        <h2 className="get-in-touch__title-touch">TOUCH</h2>
                    </div>
                        <svg className="get-in-touch__svg" width="150" height="149" viewBox="0 0 150 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M75 0L80.4577 49.3236L105.505 6.48409L90.4294 53.7633L130.736 24.8152L97.7332 61.875L146.329 51.8237L101.106 72.2561L149.589 82.8396L99.9652 83.1117L139.952 112.5L94.5076 92.5647L119.084 135.676L85.6768 98.9806L90.5934 148.361L75 101.25L59.4066 148.361L64.3232 98.9806L30.9161 135.676L55.4924 92.5647L10.0481 112.5L50.0348 83.1117L0.410858 82.8396L48.8938 72.2561L3.67076 51.8237L52.2668 61.875L19.2641 24.8152L59.5706 53.7633L44.4948 6.48409L69.5423 49.3236L75 0Z" fill="#FCD043"/>
                        </svg>
                        <Image 
                            src={GINimg}
                            className='get-in-touch__img'
                            alt=''
                        />

                        {/* <img src="images/get-in-touch-img.jpg" alt="" className="get-in-touch__img"> */}
                </div>

                <div className="get-in-touch__find">
                    <h5 className="get-in-touch__find-title">FIND A ROOM</h5>
                    
                    <div className="get-in-touch__find__links">
                        <div className="get-in-touch__find__link">
                            CHECK IN

                            <div className="get-in-touch__find__link-rooms">
                                <a href="#" className="get-in-touch__find__link-room">Room 1</a>
                                <a href="#" className="get-in-touch__find__link-room">Room 2</a>
                                <a href="#" className="get-in-touch__find__link-room">Room 3</a>
                            </div>
                        </div>
                        <div className="get-in-touch__find__link">
                            CHECK OUT

                            <div className="get-in-touch__find__link-rooms">
                                <a href="#" className="get-in-touch__find__link-room">Room 4</a>
                                <a href="#" className="get-in-touch__find__link-room">Room 5</a>
                            </div>
                        </div>
                        <div className="get-in-touch__find__link">
                            <a href="#">
                                BOOK ROOM
                            </a>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        </section> 
     );
}
 
export default GetInTouch;