import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

import Panel from './Editor/panel';
import Editor from './Editor/editor';
import Presentation from './Editor/presentation';
import ViewConference from './Editor/view-conference';
import UpdateConference from './Editor/update-conference';

configure({ adapter: new Adapter() });

it("Panel renders correctly", () => {
    const tree = shallow(<Panel />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("Editor renders without crashing", () => {
    const tree = shallow(<Editor />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("Presentation renders without crashing", () => {
    const tree = shallow(<Presentation />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("ViewConference renders without crashing", () => {
    const tree = shallow(<ViewConference />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("updateConference renders without crashing", () => {
    const tree = shallow(<UpdateConference />);
    expect(toJson(tree)).toMatchSnapshot();
});