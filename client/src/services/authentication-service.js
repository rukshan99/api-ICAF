import { BehaviorSubject } from 'rxjs';

import handleResponse from '../_helpers/handle-response';
import { history } from '../_helpers/history';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

const signin = (email, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`/api/v1/users/auth`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('currentUserPayments', user._doc.payments);
            currentUserSubject.next(user);
            if(user._doc.role === "Admin") {
                history.push('/admin');
            } else if(user._doc.role === "Editor") {
                history.push('/editor');
            } else if(user._doc.role === "Reviewer") {
                history.push('/researchersList');
            } else
                history.push('/profile');
            window.location.reload(true);
            return user;
        });
}

const signout = () => {
    // remove user and payment details from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentUserPayments');
    currentUserSubject.next(null);
}

export const authenticationService = {
    signin,
    signout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};