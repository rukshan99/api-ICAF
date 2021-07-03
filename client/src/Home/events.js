import React, { Component } from 'react'
import axios from 'axios';

class presenters extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: [],
            workshop: [],
        }
    }

    componentDidMount() {
        axios
            .get('/api/v1/editor/presentation/60d89d6de5b622029015e780')
            .then((response) => {
                this.setState({
                    post: response.data.data,
                })
                console.log(this.state.post)
            })
            .catch(function (error) {
                console.log(error)
            })

        axios
            .get('/api/v1/editor/workshop/60d89d6de5b622029015e780')
            .then((response) => {
                this.setState({
                    workshop: response.data.data,
                })
                console.log(this.state.workshop)
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    render() {
        return (
            <React.Fragment>

                <section id="blog" class="parallax-section">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-12 col-sm-12 text-center">
                                <h2>Conference Tracks</h2>
                            </div>


                            {this.state.post && this.state.post.map((post) => {


                                return (
                                    <div>
                                        <div class="wow fadeInUp col-sm" data-wow-delay="0.9s">
                                            <div class="blog-thumb">
                                                <span class="blog-date">Presentation / {post.starttime.slice(0, 10)}</span>
                                                <h3 class="blog-title"><a href="blog-single.html">{post.topic}</a></h3>
                                                <h5 id="blog-author">by {post.presenter}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            {this.state.workshop && this.state.workshop.map((workshop) => {


                                return (
                                    <div>
                                        <div class="wow fadeInUp col-sm" data-wow-delay="0.9s">
                                            <div class="blog-thumb">
                                                <span class="blog-date">Workshop / {workshop.starttime.slice(0, 10)}</span>
                                                <h3 class="blog-title"><a href="blog-single.html">{workshop.topic}</a></h3>
                                                <h5 id="blog-author">by {workshop.presenter}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default presenters;