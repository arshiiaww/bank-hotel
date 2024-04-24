'use client'
import React from 'react';
import Image from 'next/image';
import homeImage from "/public/assets/images/home-image.jpg";


const Home = () => {
    const secondaryColor = "var(--secondary-color)"
    return (
        <header className="header">
            <div className="container">
                <section className="home" id="home">
                    <h1 className="home__title">Bank<span style={{color: secondaryColor}}>Hotel</span></h1>
                    <p className="home__tags">ROOMS // RESTAURANT // CONGRESS HALL // WINE BAR</p>
                    <div className="hm since">
                        <svg className="since__icon" width="31" height="32" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5 0L18.852 13.6825L27.7862 3.42823L21.0395 15.3127L34.1435 12.4034L21.875 17.9504L34.1435 23.4974L21.0395 20.5882L27.7862 32.4727L18.852 22.2184L17.5 35.9009L16.1481 22.2184L7.21376 32.4727L13.9606 20.5882L0.85651 23.4974L13.125 17.9504L0.85651 12.4034L13.9606 15.3127L7.21376 3.42823L16.1481 13.6825L17.5 0Z" fill="#FCD043"/>
                            </svg>
                            <span className="since__text">Since 1973</span>
                    </div>
                    <p className="home__description">The luxurious hotel in the most beautiful European city with an exclusive restaurant, conference-hall, and art-bar.</p>

                    <div className="home__button">
                        <a href="#abtbtn">
                        <svg className="home__button-border" width="55" height="55" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.32" d="M10.6339 10.6339L35 0.541196L59.3661 10.6339L69.4588 35L59.3661 59.3661L35 69.4588L10.6339 59.3661L0.541196 35L10.6339 10.6339Z" stroke="#FFFCF6"/>
                        </svg>
                        <svg className="home__button-arrow" width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1C17 1 14.6667 1.66667 12.6667 3.66667C10.6667 5.66667 9 9 9 9C9 9 7.33333 5.66667 5.33333 3.66667C3.33333 1.66667 1 0.999999 1 0.999999" stroke="#FCD043" strokeWidth="2"/>
                        </svg>
                        </a>
                        
                    </div>
                    <div className="home__mb-line"></div>                    
                    
                    <div className="home__dashboard">
                        {/* <img src="/assets/images/home-image.jpg" alt="home" className="home__img" />  */}
                        <Image 
                            src={homeImage}
                            className="home__img"
                            alt="Home Image"
                        />
                        <div className="home__dashboard-booking__links">
                            <div className="home__dashboard-booking__link">
                                CHECK IN
                                
                                <svg className="home__dashboard-booking__link-svg" width="14" height="8" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1C17 1 14.6667 1.66667 12.6667 3.66667C10.6667 5.66667 9 9 9 9C9 9 7.33333 5.66667 5.33333 3.66667C3.33333 1.66667 1 0.999999 1 0.999999" stroke="#FCD043" strokeWidth="2"/>
                                    </svg>

                                <div className="home__dashboard-booking__link-rooms">
                                    <a href="#" className="home__dashboard-booking__link-room">Room 1</a>
                                    <a href="#" className="home__dashboard-booking__link-room">Room 2</a>
                                    <a href="#" className="home__dashboard-booking__link-room">Room 3</a>
                                </div>
                            </div>
                            <div className="home__dashboard-booking__link">
                                CHECK OUT

                                <svg className="home__dashboard-booking__link-svg" width="14" height="8" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1C17 1 14.6667 1.66667 12.6667 3.66667C10.6667 5.66667 9 9 9 9C9 9 7.33333 5.66667 5.33333 3.66667C3.33333 1.66667 1 0.999999 1 0.999999" stroke="#FCD043" strokeWidth="2"/>
                                    </svg>

                                <div className="home__dashboard-booking__link-rooms">
                                    <a href="#" className="home__dashboard-booking__link-room">Room 4</a>
                                    <a href="#" className="home__dashboard-booking__link-room">Room 5</a>
                                </div>
                            </div>
                            <div className="home__dashboard-booking__link">
                                <a className="book--room" href="#">BOOK ROOM</a> 
                            </div>
                        </div>
                        <div className="home__dashboard-booking__link-mb">
                            <a href="#" className="home__dashboard-booking__link-mb__text">BOOK ROOM</a>
                            <svg className="home__dashboard-booking__link-mb__svg spin" width="120" height="128" viewBox="0 0 192 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M96 0L154.779 19.0983L191.106 69.0983V130.902L154.779 180.902L96 200L37.2215 180.902L0.894348 130.902V69.0983L37.2215 19.0983L96 0Z" fill="#FCD043"/>
                                </svg>
                        </div>
                    </div>
                    <div className="numname">
                        <p className="numname__num"><span className="numname__num-span">+38 032 297 50 20</span></p>
                        <p className="numname__name">Art & Congress hall</p>
                    </div>
                </section>
            </div>
        </header>
    );
}
 
export default Home;