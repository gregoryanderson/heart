import {
  getPaintingsFromApiCalls,
  getSearchedForPaintingsByColor,
  getSearchForPaintingsByArtist,
  getSearchedForPaintingsByMedium,
  getSearchedForPaintingsByCentury,
  getSearchedForPaintingsByType,
  getSearchedForPaintingsByPlace,
  getSearchedForPaintingsByTechnique,
  getFacetsFromApiCalls
} from "../apiCalls/apiCalls";

describe("getPaintingsFromApiCalls", () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      },
      {
        title: "Sink",
        id: "en-BK-1975-82",
        artist: "Van Gogh",
        width: 2000,
        height: 2550,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s1",
        isFav: false
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getPaintingsFromApiCalls();

    expect(window.fetch).toHaveBeenCalled();
  });

  it("should return an array of paintings (HAPPY)", () => {
    getPaintingsFromApiCalls().then(results =>
      expect(results).toEqual(mockResponse)
    );
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getPaintingsFromApiCalls()).rejects.toEqual(
      Error("There was an error curating your gallery")
    );
  });

  it("should return an error when the promise rejects, ex. the server is down (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("fetch error message"));
    });

    expect(getPaintingsFromApiCalls()).rejects.toEqual(
      Error("fetch error message")
    );
  });
});

describe("getSearchedForPaintingsByColor", () => {
  let mockResponse, mockQuery;

  beforeEach(() => {
    mockQuery = "000000";
    mockResponse = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      },
      {
        title: "Sink",
        id: "en-BK-1975-82",
        artist: "Van Gogh",
        width: 2000,
        height: 2550,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s1",
        isFav: false
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getSearchedForPaintingsByColor(mockQuery);

    expect(window.fetch).toHaveBeenCalledWith(
      "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&f.normalized32Colors.hex=%20%23000000"
    );
  });

  it("should return an array of paintings (HAPPY)", () => {
    getSearchedForPaintingsByColor().then(results =>
      expect(results).toEqual(mockResponse)
    );
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getSearchedForPaintingsByColor()).rejects.toEqual(
      Error("There was an error curating your gallery")
    );
  });

  it("should return an error when the promise rejects, ex. the server is down (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error("fetch error message"));
    });

    expect(getSearchedForPaintingsByColor()).rejects.toEqual(
      Error("fetch error message")
    );
  });
});

describe("getSearchForPaintingsByArtist", () => {
  let mockResponse, mockQuery;

  beforeEach(() => {
    mockQuery = "Van Gogh";
    mockResponse = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      },
      {
        title: "Sink",
        id: "en-BK-1975-82",
        artist: "Van Gogh",
        width: 2000,
        height: 2550,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s1",
        isFav: false
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getSearchForPaintingsByArtist(mockQuery);

    expect(window.fetch).toHaveBeenCalledWith(
      "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&q=Van Gogh&imgonly=true"
    );
  });

  it("should return an array of paintings (HAPPY)", () => {
    getSearchForPaintingsByArtist().then(results =>
      expect(results).toEqual(mockResponse)
    );
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getSearchForPaintingsByArtist()).rejects.toEqual(
      Error("There was an error curating your gallery")
    );
  });
});

describe("getSearchedForPaintingsByMedium", () => {
  let mockResponse, mockQuery;

  beforeEach(() => {
    mockQuery = "paper";
    mockResponse = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      },
      {
        title: "Sink",
        id: "en-BK-1975-82",
        artist: "Van Gogh",
        width: 2000,
        height: 2550,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s1",
        isFav: false
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getSearchedForPaintingsByMedium(mockQuery);

    expect(window.fetch).toHaveBeenCalledWith(
      "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&material=paper"
    );
  });

  it("should return an array of paintings (HAPPY)", () => {
    getSearchedForPaintingsByMedium().then(results =>
      expect(results).toEqual(mockResponse)
    );
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getSearchedForPaintingsByMedium()).rejects.toEqual(
      Error("There was an error curating your gallery")
    );
  });
});

describe("getSearchedForPaintingsByCentury", () => {
  let mockResponse, mockQuery;

  beforeEach(() => {
    mockQuery = "15";
    mockResponse = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      },
      {
        title: "Sink",
        id: "en-BK-1975-82",
        artist: "Van Gogh",
        width: 2000,
        height: 2550,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s1",
        isFav: false
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getSearchedForPaintingsByCentury(mockQuery);

    expect(window.fetch).toHaveBeenCalledWith(
      "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&f.dating.period=15"
    );
  });

  it("should return an array of paintings (HAPPY)", () => {
    getSearchedForPaintingsByCentury().then(results =>
      expect(results).toEqual(mockResponse)
    );
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getSearchedForPaintingsByCentury()).rejects.toEqual(
      Error("There was an error curating your gallery")
    );
  });
});

describe("getSearchedForPaintingsByType", () => {
  let mockResponse, mockQuery;

  beforeEach(() => {
    mockQuery = "etching";
    mockResponse = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      },
      {
        title: "Sink",
        id: "en-BK-1975-82",
        artist: "Van Gogh",
        width: 2000,
        height: 2550,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s1",
        isFav: false
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getSearchedForPaintingsByType(mockQuery);

    expect(window.fetch).toHaveBeenCalledWith(
      "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&type=etching"
    );
  });

  it("should return an array of paintings (HAPPY)", () => {
    getSearchedForPaintingsByType().then(results =>
      expect(results).toEqual(mockResponse)
    );
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getSearchedForPaintingsByType()).rejects.toEqual(
      Error("There was an error curating your gallery")
    );
  });
});

describe("getSearchedForPaintingsByPlace", () => {
  let mockResponse, mockQuery;

  beforeEach(() => {
    mockQuery = "japan";
    mockResponse = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      },
      {
        title: "Sink",
        id: "en-BK-1975-82",
        artist: "Van Gogh",
        width: 2000,
        height: 2550,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s1",
        isFav: false
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getSearchedForPaintingsByPlace(mockQuery);

    expect(window.fetch).toHaveBeenCalledWith(
      "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&q=japan"
    );
  });

  it("should return an array of paintings (HAPPY)", () => {
    getSearchedForPaintingsByPlace().then(results =>
      expect(results).toEqual(mockResponse)
    );
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getSearchedForPaintingsByPlace()).rejects.toEqual(
      Error("There was an error curating your gallery")
    );
  });
});

describe("getSearchedForPaintingsByTechnique", () => {
  let mockResponse, mockQuery;

  beforeEach(() => {
    mockQuery = "pen";
    mockResponse = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      },
      {
        title: "Sink",
        id: "en-BK-1975-82",
        artist: "Van Gogh",
        width: 2000,
        height: 2550,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s1",
        isFav: false
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getSearchedForPaintingsByTechnique(mockQuery);

    expect(window.fetch).toHaveBeenCalledWith(
      "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&technique=pen"
    );
  });

  it("should return an array of paintings (HAPPY)", () => {
    getSearchedForPaintingsByTechnique().then(results =>
      expect(results).toEqual(mockResponse)
    );
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getSearchedForPaintingsByTechnique()).rejects.toEqual(
      Error("There was an error curating your gallery")
    );
  });
});

describe("getSearchedForPaintingsByTechnique", () => {
  let mockResponse, mockQuery;

  beforeEach(() => {
    mockQuery = "pen";
    mockResponse = [
      {
        title: "Cupboard",
        id: "en-BK-1975-81",
        artist: "Herman Doomer",
        width: 2026,
        height: 2500,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s0",
        isFav: false
      },
      {
        title: "Sink",
        id: "en-BK-1975-82",
        artist: "Van Gogh",
        width: 2000,
        height: 2550,
        url:
          "https://lh3.googleusercontent.com/tGI4dOAfJLBbewwspzXpUnSZxEKFACv9Y3FHqAxQUtN2p4AXt2MS9oFv6eJyIBtr7gvzmv58vSitMFVeHY0TGsfOfDN2=s1",
        isFav: false
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getSearchedForPaintingsByTechnique(mockQuery);

    expect(window.fetch).toHaveBeenCalledWith(
      "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&technique=pen"
    );
  });

  it("should return an array of paintings (HAPPY)", () => {
    getSearchedForPaintingsByTechnique().then(results =>
      expect(results).toEqual(mockResponse)
    );
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getSearchedForPaintingsByTechnique()).rejects.toEqual(
      Error("There was an error curating your gallery")
    );
  });
});

describe("getFacetsFromApiCalls", () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [
      {
        O: {}
      }
    ];
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it("should call fetch with the correct Url", () => {
    getFacetsFromApiCalls();

    expect(window.fetch).toHaveBeenCalledWith(
      "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&ps=10"
    );
  });

  it("should return an array of paintings (HAPPY)", () => {
    getFacetsFromApiCalls().then(results =>
      expect(results).toEqual(mockResponse)
    );
  });

  it("should return an error (SAD)", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getFacetsFromApiCalls()).rejects.toEqual(
      Error("There was an error curating your gallery")
    );
  });
});
