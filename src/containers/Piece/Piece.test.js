import React from "react";
import { shallow } from "enzyme";
import { Piece } from "./Piece";

describe("Piece", () => {
  let wrapper, mockHandleFavorite;

  beforeEach(() => {
    mockHandleFavorite = jest.fn();

    wrapper = shallow(
      <Piece
        url={"www.com.com"}
        key={12345}
        id={12345}
        width="700"
        alt="Dutch Painting"
        isFav={true}
        handleFavorite={mockHandleFavorite}
        route="artist"
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handleFavorite when image is clicked", () => {
    wrapper.find("img").simulate("click");
    expect(mockHandleFavorite).toHaveBeenCalledWith(12345);
  });

  it("should call handleFavorite when heart is clicked", () => {
    wrapper.find("p").simulate("click");
    expect(mockHandleFavorite).toHaveBeenCalledWith(12345);
  });
});
