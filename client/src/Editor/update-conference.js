import React, { Component} from 'react';
import axios from 'axios';

const initialState = {
    currentConference: {
    id: null,
  name: '',
  description: '',
  venue: '',
  guest: '',
  guest2: '',
  guest3: '',
  endtime: '',
  starttime: '',
  status:''
    }
}


class updateconference extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  componentDidMount(){
    this.getConference(this.props.match.params.id)
  }

  getConference(id) {
    axios.get(`/api/v1/editor/conference/${id}`)
      .then(response => {
        this.setState({ 
          currentConference: response.data.data
        });
        console.log(response.data);
        console.log(this.state.currentConference)
      })
      .catch(e => {
        console.log(e);
      });
  }

  // handleChange(event) {    this.setState({status: event.target.value});  }
  onChange(e) {
  
    // this.setState({ [e.target.name]: e.target.value })

    this.setState(prevState => ({
      currentConference: {
        ...prevState.currentConference,
        [e.target.id]: e.target.value
      }
    }));

  }


  onSubmit(e) {
    e.preventDefault();
    let conference = {
      name: this.state.currentConference.name,
      description: this.state.currentConference.description,
      venue: this.state.currentConference.venue,
      guest:this.state.currentConference.guest,
      guest2: this.state.currentConference.guest2,
      guest3: this.state.currentConference.guest3,
      endtime: this.state.currentConference.endtime,
      starttime: this.state.currentConference.starttime,
      status:this.state.currentConference.status
    }
    console.log('DATA TO SEND', conference);
    axios.put(`/api/v1/editor/conference/${this.state.currentConference._id}`, conference)
    .then(response => {
      alert('Data successfully Updated')
    })
    .catch(error => {
      console.log(error.message);
      alert('Data cannot be empty..! '+ error.message)
    })
  }

  render() {
    const { currentConference } = this.state;
    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
           
            <div className="container  col-lg-4">
        {currentConference ? (
          <div className="edit-form">
            <h1>Update Conference</h1><br></br>
            <div class="w-100 p-3 shadow-lg p-3 mb-5 bg-white rounded p-3 mb-2 bg-light text-dark " >
            <form onSubmit={this.onSubmit}>
            <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={currentConference.name} 
              onChange={this.onChange}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="description" class="form-label">Description</label>
            <textarea 
              className="form-control" 
              id="description" 
              rows="5" 
              name="description" 
              value={currentConference.description}
              onChange={this.onChange}>
            </textarea>
          </div>
          <div class="mb-3">
            <label htmlFor="venue" class="form-label">Venue</label>
            <input 
              type="text" 
              className="form-control" 
              id="venue" 
              name="venue" 
              value={currentConference.venue} 
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="starttime" className="form-label">Start Time Slot</label>
            <input 
              type="datetime-local" 
              className="form-control" 
              id="starttime" 
              name="starttime"
              value={currentConference.starttime}
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
              value={currentConference.endtime}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="guest" className="form-label">Guest Speaker 1 </label>
            <input 
              type="text" 
              className="form-control" 
              id="guest" 
              name="guest" 
              value={currentConference.guest}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="guest2" className="form-label">Guest Speaker 2 </label>
            <input 
              type="text" 
              className="form-control" 
              id="guest2" 
              name="guest2" 
              value={currentConference.guest2}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="guest3" className="form-label">Guest Speaker 3 </label>
            <input 
              type="text" 
              className="form-control" 
              id="guest3" 
              name="guest3" 
              value={currentConference.guest3}
              onChange={this.onChange}
            />
          </div>
              <div class="col text-center">
          <button type="submit" class="form-control btn btn-outline-primary btn-lg btn-block">Submit</button>
          </div>
            </form>
            </div>

          </div>
        ) : (
          <div>
          </div>
        )}
      </div>
  
    </React.Fragment>
    )
  }
}

export default updateconference;