import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Researchers from '../pages/researchersList';
import Presenters from '../pages/presentersList';
import DocumentView from '../pages/documentView';

configure({ adapter: new Adapter() });

it("DocumentView renders without crashing", () => {
    shallow(<DocumentView />);
});

it("Presenters renders without crashing", () => {
    shallow(<Presenters />);
});

it("Researchers renders without crashing", () => {
    shallow(<Researchers />);
});