import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './images/keynote1.jpg'
import logo2 from './images/keynote2.jpg'
import logo3 from './images/keynote3.jpg'

class presenters extends Component {
    render() {
        return (
            <React.Fragment>

                <section id="trainer" class="parallax-section">
                    <div class="container">
                        <div class="row">

                            <div class="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="1.3s">
                                <h2>Key Note Speakers</h2>
                            </div>

                            <div class="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="1.9s">
                                <div class="trainer-thumb">
                                    <img src={logo} class="img-responsive" alt="Trainer"></img>
                                    <div class="trainer-overlay">
                                        <div class="trainer-des">
                                            <h2>Tyler Goodspeed</h2>
                                            <h3>Professor</h3>
                                            <ul class="social-icon">
                                                <li><a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a></li>
                                                <li><a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a></li>
                                                <li><a href="#" class="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p>Department of Psychological Medicine, University of Auckland</p>
                            </div>

                            <div class="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="2s">
                                <div class="trainer-thumb">
                                    <img src={logo2} class="img-responsive" alt="Trainer" />
                                    <div class="trainer-overlay">
                                        <div class="trainer-des">
                                            <h2>Hannah Baker</h2>
                                            <h3>Professor</h3>
                                            <ul class="social-icon">
                                                <li><a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a></li>
                                                <li><a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a></li>
                                                <li><a href="#" class="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p>Middlesex University London</p>
                            </div>

                            <div class="wow fadeInUp col-md-4 col-sm-6" data-wow-delay="2.3s">
                                <div class="trainer-thumb">
                                    <img src={logo3} class="img-responsive" alt="Trainer" />
                                    <div class="trainer-overlay">
                                        <div class="trainer-des">
                                            <h2>Sayeeda Warsi</h2>
                                            <h3>Doctor</h3>
                                            <ul class="social-icon">
                                                <li><a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a></li>
                                                <li><a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a></li>
                                                <li><a href="#" class="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <p>Expert on Organizational Performance and Generational Gaps</p>
                            </div>

                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default presenters;