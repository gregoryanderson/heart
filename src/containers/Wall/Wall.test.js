import React from "react";
import { shallow } from "enzyme";
import { Wall } from "./Wall";

describe("Wall", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Wall paintings={[]} handleFavorite={jest.fn()} route="artist" />
    );
  });
  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
