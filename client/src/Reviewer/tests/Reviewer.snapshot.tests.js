import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from "enzyme-to-json";

import Researchers from '../pages/researchersList';
import Presenters from '../pages/presentersList';
import DocumentView from '../pages/documentView';

configure({ adapter: new Adapter() });

it("DocumentView renders correctly", () => {
    const tree = shallow(<DocumentView />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("Presenters renders without crashing", () => {
    const tree = shallow(<Presenters />);
    expect(toJson(tree)).toMatchSnapshot();
});

it("Researchers renders without crashing", () => {
    const tree = shallow(<Researchers />);
    expect(toJson(tree)).toMatchSnapshot();
});