import React, { Component } from 'react';
import axios from 'axios';

import Card from '../../Shared/UIElements/Card';
import Button from '../../Shared/FormElements/Button';
import './documentView.css'
import LoadingSpinner from '../../Shared/UIElements/LoadingSpinner';


class resercherDocument extends Component{
     constructor(props){
        super(props);
        this.state = {
            documents: [],
            Status:''
          }        
    };

    componentDidMount(){
        
        axios.get(`/api/v1/reviewer/user/${this.props.match.params.id}`)
        .then(response => { 
          console.log('id : ' , this.props.match.params.id ); 
           this.setState({ documents : response.data.data })
            console.log('document' ,this.state.documents);
        })
        .catch(error =>{
            alert(error.message);
        })   
    }

     refreshPage(e){
        window.location.reload();
     }


     OnAccept(e) {   
        const Data ={
            Status:"Accepted",
            RequestID:this.props.match.params.id    
        }
         axios.put(`/api/v1/reviewer/researcher/update/${this.props.match.params.id}`, Data )
             .then(res => console.log(res.data));
             this.refreshPage();    
     }


     OnDecline(e) { 
        const Data ={
            Status:"Rejected",
            RequestID:this.props.match.params.id    
        }
         axios.put(`/api/v1/reviewer/researcher/update/${this.props.match.params.id}`, Data)
             .then(res => console.log(res.data));
             this.refreshPage();
     }

    
    render(){
        return(
  
    <div className="wrapper-users">
                <div className="container">
                <Card className="document">
                    <div className="container">
                    <h1>Document</h1> 
                    {this.state.documents.length === 0 && <LoadingSpinner/>}      
                    <div className="card mb-3"> 
                        <iframe src={this.state.documents.docData} alt="document" width="100%" height="750" frameBorder="0" allowFullScreen/>
                        <h3>Doc Status: {this.state.documents.docStatus}</h3>
                        <div className="btnAccept">
                            <div className="form-group">
                                <Button  onClick={e => this.OnAccept(e)} value="Accepted">Accept</Button>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <Button onClick={e => this.OnDecline(e)} value="Rejected" className="btn btn-primary">Decline</Button>
                            </div>  
                            </div>                                 
                        </div>    
                    </div>
                </Card>
                </div>
            </div>
        )
    }
}

export default resercherDocument;