import React, { Component } from 'react';
import "./Main.css";
import hello from "../../assets/hello.png";
import axios from 'axios';
import Service from "../../service/service"



class Main extends Component {
  constructor(props) {
    super(props);
    this.retrieveConfernces = this.retrieveConfernces.bind(this);
    this.retrievepresentations = this.retrievepresentations.bind(this);
    this.retrieveWorkshops = this.retrieveWorkshops.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveConference = this.setActiveConference.bind(this);
    this.setActivePresentations = this.setActivePresentations.bind(this);
    this.setActiveWorkshops = this.setActiveWorkshops.bind(this);
    

    

    this.state = {
      User: [],
      totalroleAttendee: '',
      totalroleResearcher: '',
      totalroleWorkshopPresenter: '',
      totalAcceptedResearchPapers: '',
      totalRejectedResearchPapers: '',
      totalPendingResearchPapers: '',
      totalRejectedWorkshop: '',
      totalAcceptedWorkshop: '',
      totalPendingWorkshop: '',


      conferences: [],
      currentConference: null,
      currentIndex: -1,
      currentIndex2: -1,
      currentIndex3: -1,
      presentations: [],
      currentPresentation: null,
      approvedOne: [],
      workshops: [],
      currentWorkshop: null

    }
  }


  componentDidMount(){
    axios.get(`/api/v1/admin/count/`)
    .then(response => {
      this.setState({ totalroleAttendee: response.data.totalroleAttendee })
      this.setState({ totalroleResearcher: response.data.totalroleResearcher})
      this.setState({ totalroleWorkshopPresenter: response.data.totalroleWorkshopPresenter})
      this.setState({ totalAcceptedResearchPapers: response.data.totalAcceptedResearchPapers})
      this.setState({ totalRejectedResearchPapers: response.data.totalRejectedResearchPapers})
      this.setState({ totalPendingResearchPapers: response.data.totalPendingResearchPapers})
      this.setState({ totalRejectedWorkshop: response.data.totalRejectedWorkshop})
      this.setState({ totalAcceptedWorkshop: response.data.totalAcceptedWorkshop})
      this.setState({ totalPendingWorkshop: response.data.totalPendingWorkshop})

      console.log(response);
    })
    .catch(error => {
      alert(error.message)
    })

    this.retrieveConfernces();
    this.retrievepresentations();
    this.retrieveApprovedConference();
    this.retrieveWorkshops();
  }


  retrieveConfernces(){
    Service.getConAll()
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

  retrievepresentations(){
    Service.getPresAll()
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

  retrieveWorkshops(){
    Service.getWorkAll()
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

  retrieveApprovedConference(){
    Service.getAprroved()
    .then(response => {
      this.setState({
        approvedOne: response.data.data
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  }

  refreshList() {
    this.retrieveConfernces();
    this.setState({
      currentConference: null,
      currentIndex: -1
    });
  }

  setActiveConference(conference, index) {
    this.setState({
      currentConference: conference,
      currentIndex1: index
    });
  }

  setActivePresentations(presentation, index) {
    this.setState({
      currentPresentation: presentation,
      currentIndex2: index
    });
  }

  setActiveWorkshops(workshop, index) {
    this.setState({
      currentWorkshop: workshop,
      currentIndex3: index
    });
  }

  saveId1(id) {
    localStorage.setItem('conferencetId', id);
  }
  
  saveId2(id){
    localStorage.setItem('approvedID',id);
  }

  navigatePresentationsPage(e, conferenceId) {
    window.location = `/approvedConference/${conferenceId}`
  }


render() {
  const{ conferences, currentConference, currentIndex1,currentIndex2,currentIndex3,presentations,currentPresentation,approvedOne,workshops,currentWorkshop } = this.state;

  return (
    <main>
      <div>
        <div className="main__title">
        
          <div className="main__greeting">
            <br></br>
            <h1>Admin Dashboard</h1>
            <br></br>
          </div>
        </div>


        <div className="main__cards">
          <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-greenfa"></i>
            <div className="card_inner">
            <p className="text-primary-p">Approved Conference</p>
            { approvedOne[0] && 
                <h5 onClick={e => this.navigatePresentationsPage(e, approvedOne[0]._id)}>
                  {approvedOne[0].name}
                </h5>
              }
            </div>
          </div>


          <div className="card">
            <i className="fa fa-calendar fa-2x text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Researchers</p>
              <span className="font-bold text-title">{this.state.totalroleResearcher}</span>
            </div>
          </div>


          <div className="card">
            <i className="fa fa-video-camera fa-2x text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Work Shop Presenters</p>
              <span className="font-bold text-title">{this.state.totalroleWorkshopPresenter}</span>
            </div>
          </div>


          <div className="card">
            <i className="fa fa-thumbs-up fa-2x text-greenfa fa-user-o fa-2x text-lightblue"></i>
            <div className="card_inner">
              <p className="text-primary-p">Attendees:</p>
              <span className="font-bold text-title">{this.state.totalroleAttendee}</span>
            </div>
          </div>
        </div>



        <div className="charts">
         


          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h2>Summary of Research Papers</h2>
                <p>ICAF Sri Lanka</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>



            <div className="charts__right__cards">
              <div className="card1">
                <h5>Pendings</h5>
                <p>{this.state.totalPendingResearchPapers}</p>
              </div>

              <div className="card2">
                <h5>Approvels</h5>
                <p>{this.state.totalAcceptedResearchPapers}</p>
              </div>

              <div className="card4">
                <h5>Rejects</h5>
                <p>{this.state.totalRejectedResearchPapers}</p>
              </div>
              

            </div>

          </div>


          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h2>Summary of Work Shops</h2>
                <p>ICAF Sri Lanka</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>



            <div className="charts__right__cards">
              <div className="card1">
                <h5>Pendings</h5>
                <p>{this.state.totalPendingWorkshop}</p>
              </div>

              <div className="card2">
                <h5>Approvels</h5>
                <p>{this.state.totalAcceptedWorkshop}</p>
              </div>

              <div className="card4">
                <h5>Rejects</h5>
                <p>{this.state.totalRejectedWorkshop}</p>
              </div>
              

            </div>

          </div>

          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h2>All Presestations</h2>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <div className="list row">
              <div className="col-md-6">
                <h4>Presestations List</h4>

               <ul className="list-group">
                  { presentations &&
                  presentations.map((presestation, index) => (
                  <li
                  className={
                    "list-group-item " +
                    (index === currentIndex2 ? "active" : "")
                  }
                  onClick={() => this.setActivePresentations(presestation, index)}
                  key={index}
                >
                  {presestation.topic}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentPresentation ? (
            <div>
              <h4>Conference</h4>
              <div>
                <label className="co">
                  <strong>Conference:</strong>
                </label>{" "}
                {currentPresentation.topic}
              </div>
              <div>
                <label className="co">
                  <strong>Description:</strong>
                </label>{" "}
                {currentPresentation.description}
              </div>
              <div>
                <label className="co">
                  <strong>Start Time:</strong>
                </label>{" "}
                {currentPresentation.starttime}
              </div>
              <div>
                <label className="co">
                  <strong>End Time:</strong>
                </label>{" "}
                {currentPresentation.endtime}
              </div>
              <div>
                <label className="co">
                  <strong>Presentor:</strong>
                </label>{" "}
                {currentPresentation.presenter}
              </div>
            </div>
          ) : (
            <div>
              <br />
              {/* <p>Please click on a Tutorial...</p> */}
            </div>
          )}

        </div>
      </div>
      
      
          </div>
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h2>All Work Shops</h2>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <div className="list row">
              <div className="col-md-6">
                <h4>workshop List</h4>

               <ul className="list-group">
                  { workshops &&
                  workshops.map((workshop, index) => (
                  <li
                  className={
                    "list-group-item " +
                    (index === currentIndex3 ? "active" : "")
                  }
                  onClick={() => this.setActiveWorkshops(workshop, index)}
                  key={index}
                >
                  {workshop.topic}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentWorkshop ? (
            <div>
              <h4>Conference</h4>
              <div>
                <label className="co">
                  <strong>Conference:</strong>
                </label>{" "}
                {currentWorkshop.topic}
              </div>
              <div>
                <label className="co">
                  <strong>Description:</strong>
                </label>{" "}
                {currentWorkshop.description}
              </div>
              <div>
                <label className="co">
                  <strong>Start Time:</strong>
                </label>{" "}
                {currentWorkshop.starttime}
              </div>
              <div>
                <label className="co">
                  <strong>End Time:</strong>
                </label>{" "}
                {currentWorkshop.endtime}
              </div>
              <div>
                <label className="co">
                  <strong>Presentor:</strong>
                </label>{" "}
                {currentWorkshop.presenter}
              </div>
            </div>
          ) : (
            <div>
              <br />
              {/* <p>Please click on a Tutorial...</p> */}
            </div>
          )}

        </div>
      </div>
      </div>

          </div>

          <div className="charts__left">
            <div className="charts__left__title">
              <div class="container d-flex justify-content-center text-center">
                
                <h2>All Conferences</h2>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <div className="list row container d-flex justify-content-center">
              <div className="col-md-6">
                <h4>Confernces List</h4>

               <ul className="list-group">
                  { conferences &&
                  conferences.map((conference, index) => (
                  <li
                  className={
                    "list-group-item " +
                    (index === currentIndex1 ? "active" : "")
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
            <div>
              <h4>Conference</h4>
              <div>
                <label className="co">
                  <strong>Conference:</strong>
                </label>{" "}
                {currentConference.name}
              </div>
              <div>
                <label className="co">
                  <strong>Description:</strong>
                </label>{" "}
                {currentConference.description}
              </div>
              <div>
                <label className="co">
                  <strong>Status:</strong>
                </label>{" "}
                {currentConference.status ? "Approved" : "Pending"}
              </div>

              <a href={`/conferenceDetails/${currentConference._id}`}><button className="btn btn-primary" onClick={() => {this.saveId1(currentConference._id)}}>More Details</button> </a>
          
            </div>
          ) : (
            <div>
              <br />
              {/* <p>Please click on a Tutorial...</p> */}
            </div>
          )}

      </div>
          </div>
          </div>
          </div>

      </main>

    )

  }

}

export default Main;
