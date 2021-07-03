import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';




class panel extends Component {
  

  render() {
  
    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
      
            <br></br><br></br>
      <div className="container d-flex justify-content-center">
      <div class="w-50 p-3 shadow-lg p-3 mb-5 bg-white rounded p-3 mb-2 bg-light text-dark text-center" >
    
        <h1 class="text-center">Editor Panel</h1><br></br>
        
        <NavLink to="/conference"><p class="btn btn-primary btn-lg btn-block">Create Conference</p></NavLink>
        <br></br>
        <NavLink to="/presentation"><p class="btn btn-success btn-lg btn-block">Presentations & Workshops</p></NavLink>
        <br></br>
        <NavLink to="/viewConferences"><p class="btn btn-info btn-lg btn-block">View Conferences</p></NavLink>
        </div>
      </div>
  
    </React.Fragment>
    )
  }
}

export default panel;