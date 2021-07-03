import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

import Signin from '../User/pages/SignIn';
import Profile from '../User/pages/profile';
import BankForm from '../User/payment/BankForm';
import DocumentUpload from '../User/uploadDocs/uploadDocs';

configure({ adapter: new Adapter() });

it("DocumentUpload renders correctly", () => {
    const tree = shallow(<DocumentUpload />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("BankForm renders without crashing", () => {
    const tree = shallow(<BankForm />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("Signin renders without crashing", () => {
    const tree = shallow(<Signin />);
    expect(toJson(tree)).toMatchSnapshot();
});