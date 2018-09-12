import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";

import Form from "./Form";

describe("components/Form", async () => {
  it("should render", async () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // This might work.  Need to find a workaround for setting up enzyme with create-react-app
  /* it("should view eligibility if all fields are entered", async () => {
   *   const wrapper = mount(<Form />);
   *   wrapper.setState({
   *     state: "Minnesota",
   *     citizen: "Yes",
   *     age: new Date("1995-07-04"),
   *     crimes: "No"
   *   });
   *   expect(wrapper.toJSON()).toMatchSnapshot();
   * }); */
});
