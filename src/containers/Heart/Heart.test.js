import React from "react";
import { shallow, mount } from "enzyme";
import { Heart, mapStateToProps, mapDispatchToProps } from "./Heart";
import { MemoryRouter } from "react-router";
import { establishPaintingsInRedux } from "../../actions";

describe("Heart", () => {
  let wrapper,
    mockHandleFavorite,
    mockHandleSearch,
    mockFavorites,
    mockFacets,
    mockPaintings;

  beforeEach(() => {
    mockHandleFavorite = jest.fn();
    mockHandleSearch = jest.fn();

    mockFavorites = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      }
    ];
    mockFacets = [
      {
        0: {}
      }
    ];
    mockPaintings = [
      {
        title: "Clock and gunpowder horn",
        id: "en-NG-NM-7687",
        artist: "anonymous",
        width: 1672,
        height: 2500,
        url:
          "https://lh3.ggpht.com/lAJ1wnr_hEOncOfh9eKzvaS8w-fhLLq5yGlzHBctnjgyOzsbuP4cGIqP4q0A-YvnyXBhJi96il6NIZNhRVW-BVg2lW0=s0",
        isFav: false
      }
    ];

    wrapper = shallow(
      <Heart
        handleSearch={mockHandleSearch}
        handleFavorite={mockHandleFavorite}
        paintings={mockPaintings}
        favorites={mockFavorites}
        facets={mockFacets}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapStateToProps", () => {
  it("should properly map to props", () => {
    const mockFavorites = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      }
    ];
    const mockFacets = [
      {
        0: {}
      }
    ];
    const mockPaintings = [
      {
        title: "Clock and gunpowder horn",
        id: "en-NG-NM-7687",
        artist: "anonymous",
        width: 1672,
        height: 2500,
        url:
          "https://lh3.ggpht.com/lAJ1wnr_hEOncOfh9eKzvaS8w-fhLLq5yGlzHBctnjgyOzsbuP4cGIqP4q0A-YvnyXBhJi96il6NIZNhRVW-BVg2lW0=s0",
        isFav: false
      }
    ];

    const mockState = {
      favorites: [
        {
          title: "Cupboard",
          id: "en-BK-1975-81",
          artist: "Herman Doomer",
          width: 2026,
          height: 2500,
          url:
            "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
          isFav: false
        }
      ],
      facets: [
        {
          0: {}
        }
      ],
      paintings: [
        {
          title: "Clock and gunpowder horn",
          id: "en-NG-NM-7687",
          artist: "anonymous",
          width: 1672,
          height: 2500,
          url:
            "https://lh3.ggpht.com/lAJ1wnr_hEOncOfh9eKzvaS8w-fhLLq5yGlzHBctnjgyOzsbuP4cGIqP4q0A-YvnyXBhJi96il6NIZNhRVW-BVg2lW0=s0",
          isFav: false
        }
      ]
    };

    expect(mapStateToProps(mockState).paintings).toEqual(mockPaintings);
    expect(mapStateToProps(mockState).facets).toEqual(mockFacets);
    expect(mapStateToProps(mockState).favorites).toEqual(mockFavorites);
  });
});

describe("mapDispatchToProps", () => {
  it("should dispatch with paintings when establish paintings is called", () => {
    let mockPainting = {
      paintings: [
        {
          name: "painting",
          id: 1
        }
      ],
      type: "ESTABLISH_PAINTINGS"
    };
    let mockDispatch = jest.fn();

    let actionToDispatch = establishPaintingsInRedux(mockPainting);
    let mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.establishPaintingsInRedux(mockPainting);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should dispatch with facets when establish facets is called", () => {
    let mockFacet = {
      facets: [
        {
          0: {}
        }
      ],
      type: "ESTABLISH_FACETS"
    };
    let mockDispatch = jest.fn();

    let actionToDispatch = establishPaintingsInRedux(mockFacet);
    let mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.establishPaintingsInRedux(mockFacet);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should add favorite when add favorite is called", () => {
    let mockPainting = {
      paintings: [
        {
          name: "painting",
          id: 1
        }
      ],
      type: "ADD_FAVORITE"
    };
    let mockDispatch = jest.fn();

    let actionToDispatch = establishPaintingsInRedux(mockPainting);
    let mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.establishPaintingsInRedux(mockPainting);

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  let mockPainting = {
    paintings: [
      {
        name: "painting",
        id: 1
      }
    ],
    type: "DELETE_FAVORITE"
  };
  let mockDispatch = jest.fn();

  let actionToDispatch = establishPaintingsInRedux(mockPainting);
  let mappedProps = mapDispatchToProps(mockDispatch);
  mappedProps.establishPaintingsInRedux(mockPainting);

  expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
});

describe("Heart Routes", () => {
  let wrapper;

  it.skip("will go to the favorites page when favorites is called", () => {
    let mockPaintings = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      }
    ];

    wrapper = mount(
      <MemoryRouter initialEntries={["/favorites"]}>
        <Heart paintings={mockPaintings} />
      </MemoryRouter>
    );
    expect(wrapper.find(Favorites)).toHaveLength(1);
    expect(wrapper.find(Album)).toHaveLength(0);
    expect(wrapper.find(CreateUserForm)).toHaveLength(0);
    expect(wrapper.find(FavoritesContainer)).toHaveLength(0);
    expect(wrapper.find(WelcomeContainer)).toHaveLength(0);
  });

  describe("Heart Routes", () => {
    it.skip("go to the wall component when favorites is called", () => {
      const mockFacets = [
        {
          0: {}
        }
      ];
      const wrapper = mount(
        <MemoryRouter initialEntries={["/artist"]}>
          <Heart facets={mockFacets} />
        </MemoryRouter>
      );
      console.log(wrapper);
      expect(wrapper.find(SearchForm)).toHaveLength(1);
      // expect(wrapper.find(CreatureDetails)).toHaveLength(0);
    });
  });
});
