import React, { Component} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const initialState = {
    conferences: [],
    currentConference: null,
    currentIndex: -1,
    searchTitle: ''
}


class viewConference extends Component {
  constructor(props) {
    super(props);
    this.retrieveCOnferences = this.retrieveCOnferences.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveConference = this.setActiveConference.bind(this);
    this.state = initialState;
  }

  componentDidMount(){
      this.retrieveCOnferences();

  }

  retrieveCOnferences() {
    axios.get('/api/v1/editor/conference')
      .then(response => {
        this.setState({
            conferences: response.data.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCOnferences();
    this.setState({
      currentConference: null,
      currentIndex: -1
    });
  }

  setActiveConference(conference, index) {
    this.setState({
      currentConference: conference,
      currentIndex: index
    });
  }

  render() {

    const { searchTitle, conferences, currentConference, currentIndex } = this.state;
    return (
        <React.Fragment>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
        <br></br><br></br>
        
        <div className="container">
        <div className="list row">
        <div className="col-md-6 shadow-lg p-3 mb-5 bg-white rounded">
    
          <h4>Conference List</h4>

          <ul className="list-group">
            {conferences &&
              conferences.map((conference, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveConference(conference, index)}
                  key={index}
                >
                  {conference.name}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentConference ? (
            <div class="shadow p-3 mb-5 bg-dark text-white rounded">
              <br></br>
              <h4>Conference Details</h4>
              <div>
                <label>
                  <strong >Name:</strong>
                </label>{" "}
                {currentConference.name}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentConference.description}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Venue:</strong>
                </label>{" "}
                {currentConference.venue}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Start Time:</strong>
                </label>{" "}
                {currentConference.starttime}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>End Time:</strong>
                </label>{" "}
                {currentConference.endtime}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Guest Speaker 1:</strong>
                </label>{" "}
                {currentConference.guest}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Guest Speaker 2:</strong>
                </label>{" "}
                {currentConference.guest2}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Guest Speaker 3:</strong>
                </label>{" "}
                {currentConference.guest3}
              </div>
              <br></br>
              <div>
                <label>
                  <strong>Presentations & Workshops :</strong>
                </label>{" "}
             
                <Link
                to={"/workshops/" + currentConference._id}
                class="btn btn-light"
              >
                Click to view
              </Link>
              </div>
              <br></br>
                <br></br>
              <Link
                to={"/updateConference/" + currentConference._id}
                class="btn btn-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div class="shadow p-3 mb-5 bg-dark text-white rounded">
              <br />
              <h5>Please click on a Conference...</h5>
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