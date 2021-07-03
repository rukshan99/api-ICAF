import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

const initialState = {
    conference: [],
    options: [],
    topic: '',
    description: '',
    endtime: '',
    starttime: '',
    presenter: '',
    type: 'Presentation',
    selectedConference: ''
}


class presentation extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onConferenceSelect = this.onConferenceSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    componentDidMount() {
        axios.get('/api/v1/editor/conference')
            .then(response => {
                this.setState({ conference: response.data.data }, () => {
                    let data = [];
                    this.state.conference.map((item, index) => {
                        let conf = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(conf)
                    });
                    this.setState({ options: data });

                })
            })


    }

    handleChange(event) { this.setState({ type: event.target.value }); }

    onChange(e) {
        // let errors = this.state.errors;
        this.setState({ [e.target.name]: e.target.value })
    }

    onConferenceSelect(e) {
        this.setState({ selectedConference: e.value });
    }
    onSubmit(e) {
        e.preventDefault();
        let details = {
            conference: this.state.selectedConference,
            topic: this.state.topic,
            description: this.state.description,
            endtime: this.state.endtime,
            starttime: this.state.starttime,
            presenter: this.state.presenter
        }
        console.log('DATA TO SEND', details);

        if (this.state.type === "Presentation") {
            axios.post('/api/v1/editor/presentation', details)
                .then(response => {
                    alert('Data successfully inserted')
                })
                .catch(error => {
                    console.log(error.message);
                    alert('Data cannot be empty..! ' + error.message)
                })
        } else {
            axios.post('/api/v1/editor/workshop', details)
                .then(response => {
                    alert('Data successfully inserted')
                })
                .catch(error => {
                    console.log(error.message);
                    alert('Data cannot be empty..! ' + error.message)
                })
        }



    }

    render() {
        return (
            <React.Fragment>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
                <div className="container  col-lg-4">
                    <h1>Presentations & Workshops</h1><br></br>
                    <div class="w-100 p-3 shadow-lg p-3 mb-5 bg-white rounded p-3 mb-2 bg-light text-dark " >
                        <form onSubmit={this.onSubmit} >
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label " >Type</label>
                                <select id="type" name="type" className="form-control" value={this.state.type} onChange={this.handleChange}>
                                    <option value="Presentation">Presentation</option>
                                    <option value="Workshop">Workshop</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="conference" className="form-label">Conference Name</label>
                                <Select
                                    options={this.state.options}
                                    onChange={this.onConferenceSelect}
                                    className="basic-multi-select"

                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="topic" className="form-label">Presentation / Workshop Topic</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="topic"
                                    name="topic"
                                    value={this.state.topic}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="description" class="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    rows="3"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}>
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="starttime" className="form-label">Start Time Slot</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    id="starttime"
                                    name="starttime"
                                    value={this.state.starttime}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="endtime" className="form-label">End Time Slot</label>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    id="endtime"
                                    name="endtime"
                                    value={this.state.endtime}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="presenter" className="form-label">Presenter </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="presenter"
                                    name="presenter"
                                    value={this.state.presenter}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div class="col text-center">
                                <button type="submit" class="form-control btn btn-outline-danger btn-lg btn-block">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default presentation;