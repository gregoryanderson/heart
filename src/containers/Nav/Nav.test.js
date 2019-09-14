import React from "react";
import { shallow, mount } from "enzyme";
import { Nav } from "./Nav";
import { MemoryRouter } from "react-router";
import Wall from "../Wall/Wall";

describe("Nav", () => {
  let wrapper, mockHandleSearch;

  beforeEach(() => {
    const mockHandleSearch = jest.fn();
    const wrapper = <Nav handleSearch={mockHandleSearch} />;
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Nav Routes", () => {
  it.skip("go to the wall component when favorites is called", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/favorites"]}>
        <Nav />
      </MemoryRouter>
    );
    console.log(wrapper);
    expect(wrapper.find(Wall)).toHaveLength(1);
    // expect(wrapper.find(CreatureDetails)).toHaveLength(0);
  });
});
