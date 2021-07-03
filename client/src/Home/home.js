import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/animate.css'
import './css/owl.theme.css'
import './css/owl.carousel.css'
import './css/style.css'
import Presenters from './presenters'
import Events from './events'
import Slider from './slider'
import Timer from './timer'
import logo from './images/conference1.jpg'



class Home extends Component {
	render() {
		return (
			<React.Fragment>

				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

				<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
				<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600' rel='stylesheet' type='text/css'></link>
				<link href='https://fonts.googleapis.com/css?family=Lora:700italic' rel='stylesheet' type='text/css'></link>

				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
				<section id="home" class="parallax-section">
					<div class="container">
						<div class="row">

							<div class="text-center">
								<h1 class="wow bounceIn " data-wow-delay="0.9s">1ST INTERNATIONAL CONFERENCE ON APPLICATION FRAMEWORKS 2021</h1>
								<br></br>
								<h3 class="wow fadeInUp" data-wow-delay="0.9s">7th , 8th and 9 th December 2021 </h3>
								<br></br>
								<h5 class="wow fadeInUp" data-wow-delay="1.6s">Sri Lanka Institute of Information Technology</h5>
								<a href="#overview" class="btn" data-wow-delay="2s">LEARN MORE</a>
							</div>

						</div>
					</div>
				</section>

				<div>
					<Timer />
				</div>

				<section id="overview" class="parallax-section">
					<div class="container ">
						<div class="row w-100 p-5 shadow-lg">

							<div class="col-md-6 col-sm-12">
								<img src={logo} class="img-responsive" alt="Overview" />
							</div>

							<div class="col-md-1"></div>

							<div class="wow fadeInUp col-md-4 col-sm-12" data-wow-delay="1s">
								<div class="overview-detail">
									<h2>About Our Conference</h2>
									<p>The  International conference on application frameworks -2021 (ICAF2021) is organized by the Faculty of Computing of the Sri Lanka Institute of Information Technology (SLIIT) as an open forum for academics along with industry professionals to present the latest findings and research output and practical deployments in the Computer Science and Information Technology domains. Primary objective of the ICAC is to uplift the research culture and the quality of research done by Sri Lankan researchers. This conference will create a platform for national and international researchers to showcase their research output, networking opportunities to discuss innovative ideas, and initiate collaborative work.</p>

									<a href="#trainer" class="btn btn-default smoothScroll">Let us begin</a>
								</div>
							</div>

							<div class="col-md-1"></div>

						</div>
					</div>
				</section>



				<div class="container d-flex justify-content-center text-center">
					<div class="container">
						<div class="row">

							<div class="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="1.3s">
								<h2>Upcoming Conferences</h2>
							</div>

							<Slider />
						</div>
					</div>

				</div>

				<div>
					<Presenters />
				</div>

				<div>
					<Events />
				</div>



			</React.Fragment>
		)
	}
}

export default Home;