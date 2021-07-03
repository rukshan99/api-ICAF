import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <React.Fragment>
        <br></br><br></br><br></br>
        <section id="clock" class="parallax-section">
          <div class="container d-flex justify-content-center ">
            <div class="row">

              <div class="wow fadeInUp col-md-12 col-sm-12" data-wow-delay="1.3s">
                <h2>Conference Starts After</h2><br></br><br></br>
              </div>

              <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="1.9s">
                <div class="shadow p-3 mb-5 bg-dark text-white rounded">
                <h1 class="blog-title">{this.leading0(this.state.days)}</h1>
                </div>
                <p>Days</p>
              </div>

              <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="2s">
                <div class="shadow p-3 mb-5 bg-danger text-white rounded">
                <h1 class="blog-title">{this.leading0(this.state.hours)}</h1>
                </div>
                <p>Hours</p>
              </div>

              <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="2.3s">
                <div class="shadow p-3 mb-5 bg-dark text-white rounded">
                <h1 class="blog-title">{this.leading0(this.state.minutes)}</h1>
                </div>
                <p>Minutes</p>
              </div>

              <div class="wow fadeInUp col-md-3 col-sm-6" data-wow-delay="2.3s">
                <div class="shadow p-3 mb-5 bg-danger text-white rounded">
                <h1 class="blog-title">{this.leading0(this.state.seconds)}</h1>
                </div>
                <p>Seconds</p>
              </div>

            </div>
          </div>
        </section>

      </React.Fragment>

    );
  }
}
export default Clock;
