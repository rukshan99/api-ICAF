import React, { Component } from 'react'
import './css/animate.css'
import './css/owl.theme.css'
import './css/owl.carousel.css'
import './css/style.css'

class footer extends Component {
	render() {
		return (
			<React.Fragment>

				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

				<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600' rel='stylesheet' type='text/css'></link>
				<link href='https://fonts.googleapis.com/css?family=Lora:700italic' rel='stylesheet' type='text/css'></link>

				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
				<footer>
					<div class="container">
						<div class="row">

							<div class="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">
								<h2>ICAF</h2>
								<p>International Conference on Application Frameworks</p>
							</div>

							<div class="wow fadeInUp col-md-5 col-sm-4" data-wow-delay="0.9s">
							
							</div>

							<div class="wow fadeInUp col-md-3 col-sm-4" data-wow-delay="1s">
								<h2>Follow us</h2>
								<ul class="social-icon">
									<li><a href="#" class="fa fa-facebook wow fadeInUp" data-wow-delay="1s"></a></li>
									<li><a href="#" class="fa fa-twitter wow fadeInUp" data-wow-delay="1.3s"></a></li>
									<li><a href="#" class="fa fa-dribbble wow fadeIn" data-wow-delay="1.6s"></a></li>
									<li><a href="#" class="fa fa-behance wow fadeInUp" data-wow-delay="1.9s"></a></li>
									<li><a href="#" class="fa fa-google-plus wow fadeIn" data-wow-delay="2s"></a></li>
								</ul>
							</div>

							<div class="clearfix"></div>

							<div class="col-md-12 col-sm-12">
								<p class="copyright-text">Copyright &copy; 2021 ICAF

								</p>
							</div>

						</div>
					</div>
				</footer>

			</React.Fragment>
		)
	}
}

export default footer;