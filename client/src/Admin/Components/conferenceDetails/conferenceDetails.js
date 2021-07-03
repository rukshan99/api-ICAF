import React, { Component } from "react";
import Service from "../../service/service";
import Card from "../../../Shared/UIElements/Card";

import './conferenceDetails.css';

export default class Conference extends Component {
  constructor(props) {
    super(props);
    this.getConference = this.getConference.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.state = {

     
      
      currentConference: {
        id: null,
        status: false
      }
    };
  }

  

  componentDidMount() {
    console.log(localStorage.getItem('conferencetId'));
     this.getConference(localStorage.getItem('conferencetId'));
  }


  getConference(id) {
    Service.getCon(id)
      .then(response => {
        this.setState({
          currentConference: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateStatus(status) {
    var data = {
      id: this.state.currentConference._id,
      status: status
    };

    Service.update(this.state.currentConference._id, data)
      .then(response => {
        this.setState(prevState => ({
          currentConference: {
            ...prevState.currentConference,
            status: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  navigatePresentationsPage(e, conferenceId) {
    window.location = `/presentationDetails/${conferenceId}`
  }

  navigateWokshopsPage(e, conferenceId) {
    window.location = `/workshopsDetails/${conferenceId}`
  }

  render() {
    const { currentConference } = this.state;

    return (
      <div className="wrapper-users">
        <div className="container">
       <Card className="conf">
        {currentConference ? (
          <div className="edit-form">
            <h4>Conference Details</h4>
            <div>
                <label className="sa">
                  <strong>Conference:</strong>
                </label>{" "}
                {currentConference.name}
              </div>
              <div>
                <label className="sa">
                  <strong>Description:</strong>
                </label>{" "}
                {currentConference.description}
              </div>
              <div>
                <label className="sa">
                  <strong>Venue:</strong>
                </label>{" "}
                {currentConference.venue}
              </div>
              <div>
                <label className="sa">
                  <strong>Start Date:</strong>
                </label>{" "}
                {currentConference.starttime}
              </div>
              <div>
                <label className="sa">
                  <strong>End Date:</strong>
                </label>{" "}
                {currentConference.endtime}
              </div>
              <div>
                <label className="sa">
                  <strong>Guest Speaker:</strong>
                </label>{" "}
                {currentConference.guest}
              </div>
              <div>
                <label className="sa">
                  <strong>Guest Speaker:</strong>
                </label>{" "}
                {currentConference.guest2}
              </div>
              <div>
                <label className="sa">
                  <strong>Guest Speaker:</strong>
                </label>{" "}
                {currentConference.guest3}
              </div>
              <div>
                <label className="sa">
                <strong onClick={e => this.navigatePresentationsPage(e, currentConference._id)}>Related Presestations</strong>
                </label>
              </div>
              <div>
                <label className="sa">
                <strong onClick={e => this.navigateWokshopsPage(e, currentConference._id)}>Related Work Shops</strong>
                </label>
              </div>

              <div className="form-group">
                <label className="sa">
                  <strong>Status:</strong>
                </label>
                {currentConference.status ? "Approved" : "Pending"}
              </div>
            

            {currentConference.status ? (
              <button
                className="btn btn-danger"
                onClick={() => this.updateStatus(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="btn btn-success"
                onClick={() => this.updateStatus(true)}
              >
                Publish
              </button>
            )}

          </div>
        ) : (
          <div>
            <br />
            {/* <p>Please click on a Tutorial...</p> */}
          </div>
        )}
      </Card>
      </div>
      </div>
    );
  }

}