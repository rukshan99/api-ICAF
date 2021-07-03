import React, { Component} from 'react';
import axios from 'axios';

const initialState = {
  name: '',
  description: '',
  venue: '',
  guest: '',
  guest2: '',
  guest3: '',
  endtime: '',
  starttime: '',
  status:'false'
}


class conference extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  // handleChange(event) {    this.setState({status: event.target.value});  }
  onChange(e) {
    // let errors = this.state.errors;
    this.setState({ [e.target.name]: e.target.value })
    // if(e.target.name === "email"){
    //   const { value } = e.target;
    //   errors.email = 
    //       validEmailRegex.test(value)
    //         ? ''
    //         : 'Email is not in valid type!';
    // }
    // if(e.target.name === "contactno"){
    //   const { value } = e.target;
    //   errors.phone = 
    //   validPhoneRegex.test(value) && value.length === 10
    //   ? ''
    //   : 'Phone is not in valid type!';
    // }
  }

  onSubmit(e) {
    e.preventDefault();
    let conference = {
      name: this.state.name,
      description: this.state.description,
      venue: this.state.venue,
      guest:this.state.guest,
      guest2: this.state.guest2,
      guest3: this.state.guest3,
      endtime: this.state.endtime,
      starttime: this.state.starttime,
      status:this.state.status
    }
    console.log('DATA TO SEND', conference);
    axios.post('/api/v1/editor/conference', conference)
    .then(response => {
      alert('Data successfully inserted')
    })
    .catch(error => {
      console.log(error.message);
      alert('Data cannot be empty..! '+ error.message)
    })
  }

  render() {
    const {errors} = this.state;
    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
      <div className="container  col-lg-4">
        <h1>Create Conference</h1><br></br>
        <div class="w-100 p-3 shadow-lg p-3 mb-5 bg-white rounded p-3 mb-2 bg-light text-dark " >
        <form onSubmit={this.onSubmit} >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={this.state.name} 
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
          <div class="mb-3">
            <label htmlFor="venue" class="form-label">Venue</label>
            <input 
              type="text" 
              className="form-control" 
              id="venue" 
              name="venue" 
              value={this.state.venue} 
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
            <label htmlFor="guest" className="form-label">Guest Speaker 1 </label>
            <input 
              type="text" 
              className="form-control" 
              id="guest" 
              name="guest" 
              value={this.state.guest}
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
              value={this.state.guest2}
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
              value={this.state.guest3}
              onChange={this.onChange}
            />
          </div>

    <div class="col text-center">
          <button type="submit" class="form-control btn btn-outline-primary btn-lg btn-block">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

export default conference;