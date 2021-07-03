import React, { Component } from 'react';
import axios from 'axios';
import Card from '../../Shared/UIElements/Card';
import './userList.css'
import LoadingSpinner from '../../Shared/UIElements/LoadingSpinner';

export default class userList extends Component {

    constructor(props) {
        super(props);   
        this.state = { usersCollection: [] }                                                                                                                                    
    }

    componentDidMount() {
        axios.get('/api/v1/reviewer/presenters')
        .then(response => {
             console.log('usersCollection',response.data);
        this.setState({ usersCollection: response.data.data });
        })
    }

    navigateDocumentPage(e, userId) {
        window.location = `/presenter/${userId}`
      }

      
    render() {
        return (
            <div className="wrapper-users">
                <Card className="userList">
                    <h1>Workshop Presenters</h1>
                    {this.state.usersCollection.length === 0 && <LoadingSpinner/>}
                    {this.state.usersCollection.length > 0 && this.state.usersCollection.map((user, index) => (
                        <div key={index} className="card mb-3"onClick={e => this.navigateDocumentPage(e, user._id)}>
                            <div className="p-3" >                             
                            <h4> Name: {user.name}</h4>
                            <h4>Email: {user.email}</h4>
                            <h4>Role: {user.role}</h4> 
                            </div>
                        </div>
                        ))}
                </Card>
            </div>
        )
    }
}