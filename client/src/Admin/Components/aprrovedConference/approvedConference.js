import React, { Component } from "react";
import Service from "../../service/service";
import Card from "../../../Shared/UIElements/Card";


import './approvedConference.css'

let isLoading = true;
export default class Approved extends Component {
  constructor(props) {
    super(props);
    this.getConference = this.getConference.bind(this);

    this.state = {     
      confernces: [],
      currentConference: null 
    };
  }

  componentDidMount() {
    console.log(localStorage.getItem('approvedID'));
     this.getConference(localStorage.getItem('approvedID'))
  }

  getConference(id) {
    Service.getApp(id)
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

  navigatePresentationsPage(e, conferenceId) {
    window.location = `/presentationDetails/${conferenceId}`
  }

  navigateWokshopsPage(e, conferenceId) {
    window.location = `/workshopsDetails/${conferenceId}`
  }



  render() {
    const { currentConference } = this.state;

    return (
      <div className= "container">
        <Card className= "Appr"> 
        {currentConference ? (
          <div className="edit-form">
            <h4>Conference</h4>
            <div>
                <label className="ap">
                  <strong>Conference:</strong>
                </label>{" "}
                {currentConference.name}
              </div>
              <div>
                <label className="ap">
                  <strong>Description:</strong>
                </label>{" "}
                {currentConference.description}
              </div>
              <div>
                <label className="ap">
                  <strong>Venue:</strong>
                </label>{" "}
                {currentConference.venue}
              </div>
              <div>
                <label className="ap">
                  <strong>Start Date:</strong>
                </label>{" "}
                {currentConference.starttime}
              </div>
              <div>
                <label className="ap">
                  <strong>End Date:</strong>
                </label>{" "}
                {currentConference.endtime}
              </div>
              <div>
                <label className="ap">
                  <strong>Guest Speaker:</strong>
                </label>{" "}
                {currentConference.guest}
              </div>
              <div>
                <label className="ap">
                  <strong>Guest Speaker:</strong>
                </label>{" "}
                {currentConference.guest2}
              </div>
              <div>
                <label className="ap">
                  <strong>Guest Speaker:</strong>
                </label>{" "}
                {currentConference.guest3}
              </div>
              <div className="form-group">
                <label className="ap">
                  <strong>Status:</strong>
                </label>
                {currentConference.status ? "Approved" : "Pending"}
              </div>
              <div>
                <label className="ap">
                  <strong onClick={e => this.navigatePresentationsPage(e, currentConference._id)}>Related Presestations</strong>
                </label>
              </div>
              <div>
                <label className="ap">
                  <strong onClick={e => this.navigateWokshopsPage(e, currentConference._id)}>Related Work Shops</strong>
                </label>
              </div>
          </div>
        ) : (
          <div>
            <br />
            {/* <p>Please click on a Tutorial...</p> */}
          </div>
        )}
        </Card>
      </div>
    );
  }

}