import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Signin from '../User/pages/SignIn';
import Profile from '../User/pages/profile';
import BankForm from '../User/payment/BankForm';
import DocumentUpload from '../User/uploadDocs/uploadDocs';

configure({ adapter: new Adapter() });

it("DocumentUpload renders without crashing", () => {
    shallow(<DocumentUpload />);
});

it("BankForm renders without crashing", () => {
    shallow(<BankForm />);
});

it("Signin renders without crashing", () => {
    shallow(<Signin />);
});

//Test case for user Profile component using mock data.

const currentUser = {
    _doc: {
        _id: "60da098fe926fb878f975747",
        name: "Rukshan Jayasekara",
        role: "Attendee",
        email: "it19129204@my.sliit.lk"
    }
}



