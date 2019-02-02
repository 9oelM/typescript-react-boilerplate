import { shallow } from "enzyme";
import * as React from "react";

import Hello from "../components/Hello";

it("renders the heading", () => {
  const result = shallow(<Hello />).contains(<h1>Hello!</h1>);
  expect(result).toBeTruthy();
});
