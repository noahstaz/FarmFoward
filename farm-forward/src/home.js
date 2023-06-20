import React from 'react';
import Header from './header';
import './home.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import FarmingVideo from './images/farming-video.mp4';
import Image1 from './images/canada.jpg';
import Image2 from './images/Cultivator.jpg';
import Image3 from './images/fcc.jpg';
import Footer from './footer';
//import { NavLink, Outlet } from 'react-router-dom';

function Home() {

    return (
        <div >
            <Header/>
            <div className='m-5'>
            <div className="home_main row fade-left m-2">
                {/* <ScrollAnimation duration={2}
                    animateIn="animate__fadeInLeft"> */}
                    <div className="col-6">
                        <video className='farming-video' src={FarmingVideo} autoPlay loop muted/>
                    </div>
                    <div className="col-6">
                        <div className='card border-light text-center'>
                            <div className='card-body'>
                                <h5 className='card-title font-weight-bold'>Our Mission</h5>
                                <p className='card-text'>
                                Now, when you run your React application, you will see a navigation menu with links to the Home and About pages. Clicking on each link will render the corresponding component below the navigation menu.
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='grants row m-2 mt-5 mb-5 fade-right'>
                <div className="col-6">
                    <div className='card border-light text-center'>
                        <div className='card-body'>
                            <h5 className='card-title font-weight-bold'>Our Mission</h5>
                            <p className='card-text'>
                            Now, when you run your React application, you will see a navigation menu with links to the Home and About pages. Clicking on each link will render the corresponding component below the navigation menu.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-1"/>
                <div className="col-4 carousel-container text-center">
                    <Carousel className="carousel" interval={3000}>
                        <Carousel.Item>
                            <img src={Image2} className="carousel-images" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Image1} className="carousel-images" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Image3} className="carousel-images" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className='grants row m-2 mt-5 mb-5 fade-right'>
                    <div className="col-1"/>
                    <div className="col-4 carousel-container text-center">
                        <Carousel className="carousel" interval={3000}>
                            <Carousel.Item>
                                <img src={Image2} className="carousel-images" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Image1} className="carousel-images" alt="..." />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={Image3} className="carousel-images" alt="..." />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                <div className="col-6">
                    <div className='card border-light text-center'>
                        <div className='card-body'>
                            <h5 className='card-title font-weight-bold'>Our Mission</h5>
                            <p className='card-text'>
                            Now, when you run your React application, you will see a navigation menu with links to the Home and About pages. Clicking on each link will render the corresponding component below the navigation menu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grants row m-2 mt-5 mb-5 fade-right'>
                <div className="col-6">
                    <div className='card border-light text-center'>
                        <div className='card-body'>
                            <h5 className='card-title font-weight-bold'>Our Mission</h5>
                            <p className='card-text'>
                            Now, when you run your React application, you will see a navigation menu with links to the Home and About pages. Clicking on each link will render the corresponding component below the navigation menu.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-1"/>
                <div className="col-4 carousel-container text-center">
                    <Carousel className="carousel" interval={3000}>
                        <Carousel.Item>
                            <img src={Image2} className="carousel-images" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Image1} className="carousel-images" alt="..." />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Image3} className="carousel-images" alt="..." />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;