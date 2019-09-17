import React from "react";
import { shallow } from "enzyme";
import { SearchForm, mapStateToProps } from "./SearchForm";

describe("SearchForm", () => {
  let wrapper,
    mockFacets,
    mockFavorites,
    mockHandleFavorite,
    mockHandleSearch,
    mockName,
    mockPaintings,
    mockPlaceholder;

  beforeEach(() => {
    mockFacets = {
      facets: [
        {
          0: {},
          1: {}
        }
      ]
    };

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

    mockName = "artist";
    mockPlaceholder = "Please select an artist";

    mockHandleFavorite = jest.fn();
    mockHandleSearch = jest.fn();

    wrapper = shallow(
      <SearchForm
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

  it("should handle the change of input", () => {
    mockHandleChange = handleChangeOfInput;

    mockHandleChange = jest.fn();
    wrapper.find("input").simulate("change");
    expect(mockHandleChange).toHaveBeenCalled();
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
    expect(mapStateToProps(mockState).favorites).toEqual(mockFavorites);
  });
});

describe("mapDispatchToProps", () => {
    it("should properly dispatch to props", () => {
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
      expect(mapStateToProps(mockState).favorites).toEqual(mockFavorites);
    });
  });
  