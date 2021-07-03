import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Panel from './Editor/panel';
import Editor from './Editor/editor';
import Presentation from './Editor/presentation';
import ViewConference from './Editor/view-conference';
import UpdateConference from './Editor/update-conference';

configure({ adapter: new Adapter() });

it("Panel renders without crashing", () => {
    shallow(<Panel />);
});

it("Editor renders without crashing", () => {
    shallow(<Editor />);
});

it("Presentation renders without crashing", () => {
    shallow(<Presentation />);
});

it("Presentation renders without crashing", () => {
    shallow(<ViewConference />);
});

it("Presentation renders without crashing", () => {
    shallow(<UpdateConference />);
});

//Test case for user Profile component using mock data.




