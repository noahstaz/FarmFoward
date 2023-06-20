import React from 'react';
import Header from './header';
import './home.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";
import Footer from './footer';
import { NavLink, Outlet } from 'react-router-dom';

function Home() {

    const { user, token } = isAuthenticated();
    return (
        <div >
            <Header/>
            <div className="home_main">
                <ScrollAnimation duration={2}
                    animateIn="animate__fadeInUp">
                    <div className="main_content">
                        Animals can't speak ,<br />
                        but you can !
                    </div>

                    <br />
                    <div className="main_content_followup">Let's make a better world together.</div>
                    <br />
                    <br />
                    {user === undefined ? <>
                        <NavLink style={{ textDecoration: 'none' }} to="/auth/login"><span className="home_main_btn">Signin</span></NavLink>

                    </> : <>
                        <NavLink style={{ textDecoration: 'none' }} to="/places"><span className="home_main_btn">Contribute</span></NavLink>

                    </>}

                </ScrollAnimation>
            </div>

            <div className="section_i">
                <ScrollAnimation duration={2}
                    animateIn="animate__fadeInUp">
                    <div className="section_i_heading">Wait..,</div>
                    <div className="section_i_heading">But what actual problem is ?</div>
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
                <ScrollAnimation duration={2}
                    animateIn="animate__fadeInUp">                <div className="section_i_heading">How we tend to solve it?</div><br />
                </ScrollAnimation>
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
            <Footer />
            <Outlet />

        </div>
    );
}

export default Home;