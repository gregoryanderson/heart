import React from "react";
import { shallow, mount } from "enzyme";
import { Heart, mapStateToProps } from "./Heart";
import { MemoryRouter } from "react-router";

describe("Heart", () => {
  let wrapper, mockHandleFavorite, mockHandleSearch, mockFavorites, mockFacets, mockPaintings;

  beforeEach(() => {
    const mockHandleFavorite = jest.fn();
    const mockHandleSearch = jest.fn();

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

    wrapper = shallow(
      <Heart
        handleSearch={mockHandleSearch}
        handleFavorite={mockHandleFavorite}
      />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapStateToProps", () => {
  it('should properly map to props', () => {
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
  })
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
});
