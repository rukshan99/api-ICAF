import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../App";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    shallow(<App />);
  });
  