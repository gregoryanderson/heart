import {
  establishPaintingsInRedux,
  addFavoriteInRedux,
  deleteFavoriteInRedux,
  establishFacetsInRedux
} from "./index";

describe("Actions", () => {
  it("should have a type of ESTABLISH_PAINTINGS", () => {
    let paintings = {
      title: "Cupboard",
      id: "en-BK-1975-81",
      artist: "Herman Doomer",
      width: 2026,
      height: 2500,
      url:
        "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
      isFav: false
    };

    let expectedAction = {
      type: "ESTABLISH_PAINTINGS",
      paintings
    };

    expect(establishPaintingsInRedux(paintings)).toEqual(expectedAction);
  });

  it("should have a type of ADD_FAVORITE", () => {
    let data = {
      title: "Cupboard",
      id: "en-BK-1975-81",
      artist: "Herman Doomer",
      width: 2026,
      height: 2500,
      url:
        "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
      isFav: false
    };

    let expectedAction = {
      type: "ADD_FAVORITES",
      data
    };

    expect(addFavoriteInRedux(data)).toEqual(expectedAction);
  });

  it("should have a type of DELETE_FAVORITE", () => {
    let data = {
      title: "Cupboard",
      id: "en-BK-1975-81",
      artist: "Herman Doomer",
      width: 2026,
      height: 2500,
      url:
        "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
      isFav: false
    };

    let expectedAction = {
      type: "DELETE_FAVORITES",
      data
    };
    expect(deleteFavoriteInRedux(data)).toEqual(expectedAction);

  });

  it("should have a type of ESTABLISH_FACETS", () => {
    let facets = {
        facets: {},
        name: {}
    }
    
    let expectedAction = {
      type: "ESTABLISH_FACETS",
      facets
    };

    expect(establishFacetsInRedux(facets)).toEqual(expectedAction);
  });
});
