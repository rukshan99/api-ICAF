import React, { useState } from 'react';

import Card from '../../Shared/UIElements/Card';
import LoadingSpinner from '../../Shared/UIElements/LoadingSpinner';
import BankForm from '../payment/BankForm';

import { paymentForm } from '../payment/BankForm';
import { authenticationService } from '../../services/authentication-service';
import { paymentService } from '../../services/payment-service';

import './SignIn.css';

let currentUser = null;

const Profile = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isPayment, setIsPayment ] = useState(false);
    const [ isPaid, setIsPaid ] = useState(false);

    const userPayments = localStorage.getItem('currentUserPayments');

    const paymentHandler = () => {
        setIsPayment(true);
    }
    
    const paymentFormHandler = () => {
        paymentService(paymentForm, currentUser._doc._id);
    }

    authenticationService.currentUser.subscribe(user => currentUser = user);

    setTimeout(() => {
        //console.log(userPayments);
        if(userPayments && userPayments.length > 0) setIsPaid(true);
        setIsLoading(false);
    }, 1000);
    authenticationService.currentUser.subscribe(user => currentUser = user);
    return (
        <React.Fragment>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous"></link>
            <Card className="authentication">
                {isLoading && <LoadingSpinner asOverlay/>}
                <img src="https://www.shareicon.net/data/128x128/2016/07/26/802043_man_512x512.png" class="rounded mx-auto d-block img-circle" alt="..." />
                <br />
                <h4>{currentUser._doc.name}</h4>
                <h6>{currentUser._doc.role}</h6>
                <hr />
                <p>Contact Details</p>
                <p>E-mail: <a href={"mailto:"+ currentUser._doc.email}>{currentUser._doc.email}</a></p>
                {currentUser._doc.role != "Attendee" &&
                <React.Fragment>
                <hr />
                <p>Submissions</p>    
                <iframe src={currentUser._doc.document.docData} alt="document" className="process__image" width="100%" height="350" frameBorder="0" allowFullScreen/>
                <br />
                <div className="row">
                    <div className="col-sm-12">
                    <a type="button" className="btn btn-outline-secondary" download="Document" href={currentUser._doc.document.docData}>Download</a>
                    </div>
                </div>
                <br />
                <p>Submission status:
                    {currentUser._doc.document.docStatus === "Pending" && <span className="text-light bg-warning"> {currentUser._doc.document.docStatus} </span>}
                    {currentUser._doc.document.docStatus === "Accepted" && 
                        <React.Fragment>
                            <span className="text-light bg-success"> {currentUser._doc.document.docStatus} </span>
                            <br />{!isPayment && !isPaid && <button className="btn btn-outline-secondary" onClick={paymentHandler}>Pay</button>}
                            <br />{isPaid && <button className="btn btn-outline-dark" disabled>Paid</button>}
                        </React.Fragment>}
                    {currentUser._doc.document.docStatus === "Rejected" && <span className="text-light bg-danger"> {currentUser._doc.document.docStatus} </span>}
                    </p>
                {!isPaid && isPayment && 
                    <React.Fragment>
                        <BankForm />
                        {<button className="btn btn-outline-secondary" onClick={paymentFormHandler}>Pay</button>}
                    </React.Fragment>}
                </React.Fragment>}
            </Card>
        </React.Fragment>
    );
}

export default Profile;