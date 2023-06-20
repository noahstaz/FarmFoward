import React from 'react';
import Header from './header';
import './home.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import FarmingVideo from './images/farmvideo.mp4'
//import Footer from './footer';
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
                            <video className='farming-video' src={FarmingVideo} autoPlay loop muted playsInline/>
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
                
                {/* </ScrollAnimation> */}
            </div>
            

            <div className="section_i">
                <ScrollAnimation duration={2}
                    animateIn="animate__fadeInUp">
                    <div className="section_i_heading">Grants</div>
                </ScrollAnimation>
                <br />
                <br />
                <ScrollAnimation duration={2}
                    animateIn="animate__fadeInUp">
                    <div className="section_i_answer">There are many places where animals and birds are found earlier but because of increase in the waste and lack of cleanliness and increased use of plastic , animals are suffering from various diseases and are becoming extinct day by day. And sometimes  NGOs who work for animal welfare are unaware of such places in the city .</div>
                </ScrollAnimation><br />
                <br />
                <br />
                <br />
                <br />
                <ScrollAnimation duration={2}
                    animateIn="animate__fadeInUp">
                    <div className="section_i_answer"> So the solution which we have proposed will be aiming to create a network of NGOs and citizens of the city to work together to identify those places and make the nearby NGOs aware about those places to make that place better again which is suitable for the living habitat of that area.</div>
                </ScrollAnimation> </div>
            <div>
                <ScrollAnimation duration={2}
                    animateIn="animate__fadeInUp">
                    <div className="section_heading"> You can </div>
                </ScrollAnimation>
                <ScrollAnimation duration={2}
                    animateIn="animate__fadeInUp">
                    <div className="cardsContainer">
                        <div className="card">
                            <div className="card_heading">You can support NGO</div>
                        </div>

                        <div className="card">
                            <div className="card_heading">You can directly contact NGO for help</div>
                        </div>

                        <div className="card">
                            <div className="card_heading">You can yourself contribute to society</div>
                        </div>

                    </div>
                </ScrollAnimation>
                <div>
                    <ScrollAnimation duration={2}
                        animateIn="animate__fadeInUp">
                        <div className="section_heading"> Contact </div>

                        <br />
                        <br />
                        <br />
                        <div className="contact_form">

                            <input type="text" className="contact_field" placeholder="name" />
                            <br />
                            <br />
                            <input type="email" className="contact_field" placeholder="email" />
                            <br />
                            <br />
                            <textarea className="contact_area" placeholder="Message" />
                            <br />
                            <br />
                            <div className="auth_btn">Send</div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
            <br />
            <br /> 

        </div>
        </div>
    );
}

export default Home;