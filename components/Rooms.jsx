import Image from 'next/image';
import Rooms1 from "/public/assets/images/rooms-img1.jpg";
import Rooms2 from "/public/assets/images/rooms-img2.jpg";

const Rooms = () => {
    return ( 
        <section id="rmapt" className="rooms-and-apartments">
            <div className="container">
                <div className="rooms-and-apartments-header">
                    <h2 className="rooms-and-apartments__title">ROOMS <br/> & APARTMENTS</h2>
                    <p className="rooms-and-apartments__caption">ALL ROOM DECORATION WAS MADE WITH ECOLOGICAL CERTIFIED AND SAFE MATERIALS.</p>
                </div>
                <div className="rooms-and-apartments-contents">
                    <div className="rooms-and-apartments-contents__left">
                        {/* <img src="images/rooms-img2.jpg" alt="" className="rooms-and-apartments-contents__left-img2"> */}
                        <Image 
                            src={Rooms2}
                            className="rooms-and-apartments-contents__left-img2"
                            alt=''
                        />
                        <div className="rooms-and-apartments-contents__left-button">
                            <a href="">
                                <svg className="rooms-and-apartments-contents__left-button__polygon" width="130" height="130" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.32" d="M10.6339 10.6339L35 0.541196L59.3661 10.6339L69.4588 35L59.3661 59.3661L35 69.4588L10.6339 59.3661L0.541196 35L10.6339 10.6339Z" stroke="#444"/>
                                </svg>
                                    <svg className="rooms-and-apartments-contents__left-button__head-arrow" width="24" height="18" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1C17 1 14.6667 1.66667 12.6667 3.66667C10.6667 5.66667 9 9 9 9C9 9 7.33333 5.66667 5.33333 3.66667C3.33333 1.66667 1 0.999999 1 0.999999" stroke="#444" strokeWidth="2"/>
                                        </svg>
                                    <div className="rooms-and-apartments-contents__left-button__head-line"></div>
                            </a>
                        </div>
                    </div>
                    <div className="rooms-and-apartments-contents__mid">
                        <div className="since">
                            <svg className="since__icon" width="31" height="32" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 0L18.852 13.6825L27.7862 3.42823L21.0395 15.3127L34.1435 12.4034L21.875 17.9504L34.1435 23.4974L21.0395 20.5882L27.7862 32.4727L18.852 22.2184L17.5 35.9009L16.1481 22.2184L7.21376 32.4727L13.9606 20.5882L0.85651 23.4974L13.125 17.9504L0.85651 12.4034L13.9606 15.3127L7.21376 3.42823L16.1481 13.6825L17.5 0Z" fill="#FCD043"/>
                                </svg>
                            <span className="since__text">Since 1973</span>
                        </div>
                        <h4 className="rooms-and-apartments-contents__heading">Superior Twin</h4>
                        <p className="rooms-and-apartments-contents__description">The Superior twin is perfect for those who plan to stay long. The spacious and bright room is equipped with deluxe Italian furniture and has a beautiful view to the historical part of the city. Stylish interior design and comfortable beds will make your stay cozy and pleasant.</p>
                    </div>
                    <div className="rooms-and-apartments-contents__right">
                        {/* <img src="images/rooms-img1.jpg" alt="" className="rooms-and-apartments-contents__img1"> */}
                        <Image 
                            src={Rooms1}
                            className="rooms-and-apartments-contents__img1"
                            alt=''
                        />
                        <div className="rooms-and-apartments-contents__right-label">
                            <svg className="rooms-and-apartments-contents__right-label__polygon" width="172" height="180" viewBox="0 0 192 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96 0L154.779 19.0983L191.106 69.0983V130.902L154.779 180.902L96 200L37.2215 180.902L0.894348 130.902V69.0983L37.2215 19.0983L96 0Z" fill="#FCD043"/>
                                </svg>
                                <a href="#" className="rooms-and-apartments-contents__right-label__text">BOOK ROOM</a>
                        </div>
                </div>
                </div>
                <div className="divider"></div>
                </div>
        </section>
     );
}
 
export default Rooms;