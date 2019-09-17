import React from "react";
import { shallow } from "enzyme";
import { FacetContainer } from "./FacetContainer";

describe("FacetContainer", () => {
  let wrapper, mockHandleSearch, mockName, mockFacets;
  beforeEach(() => {
    mockHandleSearch = jest.fn();

    mockName = "color";

    mockFacets = {
      facets: [
        {
          0: {},
          1: {}
        }
      ]
    };

    wrapper = shallow(
      <FacetContainer
        handleSearch={mockHandleSearch}
        name={mockName}
        facets={mockFacets}
      />
    );
  });

  it("should  match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
