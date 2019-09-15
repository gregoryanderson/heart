import React from "react";
import { shallow } from "enzyme";
import { FacetBtn } from "./FacetBtn";

describe("FacetBtn", () => {
  let wrapper, mockHandleSearch;

  beforeEach(() => {
    mockHandleSearch = jest.fn();

    wrapper = shallow(
      <FacetBtn
        assignment='artist'
        key={123}
        name='Van Gogh'
        handleSearch={mockHandleSearch}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleSearch when clicked", () => {
    wrapper.find("button").simulate("click");

    expect(mockHandleSearch).toHaveBeenCalled();
  });
});
