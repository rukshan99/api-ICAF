import React, { Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const initialState = {
    presentations: [],
    workshops: [],
    currentPresentation: null,
    currentWorkshop: null,
    currentPIndex: -1,
    currentWIndex: -1
}


class viewConference extends Component {
  constructor(props) {
    super(props);
    this.retrievePresentations = this.retrievePresentations.bind(this);
    this.retrieveWorkshops = this.retrieveWorkshops.bind(this);
    this.refreshPList = this.refreshPList.bind(this);
    this.refreshWList = this.refreshWList.bind(this);
    this.setActivePresentation = this.setActivePresentation.bind(this);
    this.setActiveWorkshop = this.setActiveWorkshop.bind(this);
    this.state = initialState;
  }

  componentDidMount(){
      this.retrievePresentations(this.props.match.params.id);
      this.retrieveWorkshops(this.props.match.params.id);

  }

  retrievePresentations(id) {
    axios.get(`/api/v1/editor/presentation/${id}`)
      .then(response => {
        this.setState({
            presentations: response.data.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  retrieveWorkshops(id) {
    axios.get(`/api/v1/editor/workshop/${id}`)
      .then(response => {
        this.setState({
            workshops: response.data.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshPList() {
    this.retrievePresentations();
    this.setState({
      currentPresentation: null,
      currentPIndex: -1
    });
  }

  refreshWList() {
    this.retrieveWorkshops();
    this.setState({
      currentWorkshop: null,
      currentWIndex: -1
    });
  }

  setActivePresentation(presentation, index) {
    this.setState({
      currentPresentation: presentation,
      currentPIndex: index
    });
  }

  setActiveWorkshop(workshop, index) {
    this.setState({
      currentWorkshop: workshop,
      currentWIndex: index
    });
  }

  render() {

    const { presentations, currentPresentation, currentPIndex, workshops,currentWorkshop,currentWIndex } = this.state;
    return (
        <React.Fragment>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
        <div className="container">
        <div className="list row">
        <div className="col-md-8">
        </div>
        <br></br><br></br>
        <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
     
          <h4>Presentations List</h4>
          
          <ul className="list-group">
            {presentations &&
              presentations.map((presentation, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentPIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePresentation(presentation, index)}
                  key={index}
                >
                  {presentation.topic}
                </li>
              ))}
          </ul>

        </div>
        <div class="col-md-6 shadow p-3 mb-5 bg-dark text-white rounded">
        {currentPresentation ? (
            <div>
              <h4>Presentation Details</h4>
              <div>
                <label>
                  <strong >Name:</strong>
                </label>{" "}
                {currentPresentation.topic}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentPresentation.description}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Start Time:</strong>
                </label>{" "}
                {currentPresentation.starttime}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>End Time:</strong>
                </label>{" "}
                {currentPresentation.endtime}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Presenter:</strong>
                </label>{" "}
                {currentPresentation.presenter}
              </div>
              <br></br>
            </div>
          ) : (
            <div>
              <br />
              <h5>Please click on a Presentation...</h5>
            </div>
          )}
        </div>
      </div>

      <div className="list row">
        <div className="col-md-8">
        </div>
        <br></br><br></br>
        <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
      
          <h4>Workshops List</h4>

          <ul className="list-group">
            {workshops &&
              workshops.map((workshop, index) =>  (
                <li
                  className={
                    "list-group-item " +
                    (index === currentWIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveWorkshop(workshop, index)}
                  key={index}
                >
                  {workshop.topic}
                </li>
              ))}
          </ul>


        </div>
        <div className="col-md-6 shadow p-3 mb-5 bg-dark text-white rounded">
        {currentWorkshop ? (
            <div>
              <h4>Workshop Details</h4>
              <div>
                <label>
                  <strong >Name:</strong>
                </label>{" "}
                {currentWorkshop.topic}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentWorkshop.description}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Start Time:</strong>
                </label>{" "}
                {currentWorkshop.starttime}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>End Time:</strong>
                </label>{" "}
                {currentWorkshop.endtime}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Presenter:</strong>
                </label>{" "}
                {currentWorkshop.presenter}
              </div>
              <br></br>
            </div>
          ) : (
            <div>
              <br />
              <h5>Please click on a Workshop...</h5>
            </div>
          )}
        </div>
      </div>

      </div>
    </React.Fragment>
    )
  }
}

export default viewConference;