import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Dashboard from '../pages/Dashboard';
import Conference from '../Components/conferenceDetails/conferenceDetails';
import Approved from '../Components/aprrovedConference/approvedConference';

configure({ adapter: new Adapter() });

it("Dashboard renders without crashing", () => {
    shallow(<Dashboard />);
});

it("Conference renders without crashing", () => {
    shallow(<Conference />);
});

it("Approved renders without crashing", () => {
    shallow(<Approved />);
});