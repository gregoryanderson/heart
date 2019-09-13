export const getPaintingsFromApiCalls = () => {
  const url =
    "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&ps=10";
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating you gallery");
      }
      return response.json();
    })
    .then(data => cleanPaintingData(data));
};

export const getSearchedForPaintingsByColor = input => {
  console.log("in color");
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&f.normalized32Colors.hex=%20%23${input}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating you gallery");
      }
      return response.json();
    })
    .then(data => cleanPaintingData(data));
};

export const getSearchForPaintingsByArtist = input => {
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&q=${input}&imgonly=true`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating you gallery");
      }
      return response.json();
    })
    .then(data => cleanPaintingData(data));
};

export const getSearchedForPaintingsByMedium = input => {
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&material=${input}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating you gallery");
      }
      return response.json();
    })
    .then(data => cleanPaintingData(data));
};

export const getSearchedForPaintingsByCentury = input => {
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&f.dating.period=${input}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating you gallery");
      }
      return response.json();
    })
    .then(data => cleanPaintingData(data));
};

export const getSearchedForPaintingsByType = input => {
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&type=${input}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating you gallery");
      }
      return response.json();
    })
    .then(data => cleanPaintingData(data));
};

export const getSearchedForPaintingsByPlace = input => {
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&q=${input}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating you gallery");
      }
      return response.json();
    })
    .then(data => cleanPaintingData(data));
};

export const getSearchedForPaintingsByTechnique = input => {
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&imgonly=true&technique=${input}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating you gallery");
      }
      return response.json();
    })
    .then(data => cleanPaintingData(data));
};

export const cleanPaintingData = data => {
  console.log(data);
  return data.artObjects.map(painting => {
    return {
      title: painting.title,
      id: painting.id,
      artist: painting.principalOrFirstMaker,
      width: painting.webImage.width,
      height: painting.webImage.height,
      url: painting.webImage.url,
      isFav: false
    };
  });
};

export const getFacets = 
//   hasImage: true
// headerImage: {guid: "36b54f3a-46a6-4c24-b804-ce2b5b86f45a", offsetPercentageX: 0, offsetPercentageY: 0, width: 1920, height: 460, …}
// id: "en-SK-A-4100"
// links: {self: "http://www.rijksmuseum.nl/api/en/collection/SK-A-4100", web: "http://www.rijksmuseum.nl/en/collection/SK-A-4100"}
// longTitle: " The Art Gallery of Jan Gildemeester Jansz, Adriaan de Lelie, 1794 - 1795"
// objectNumber: "SK-A-4100"
// permitDownload: true
// principalOrFirstMaker: "Adriaan de Lelie"
// productionPlaces: []
// showImage: true
// title: " The Art Gallery of Jan Gildemeester Jansz"
// webImage: {guid: "c3a05f6b-4b71-4cfd-ab8d-3c7d79e08ea1", offsetPercentageX: 0, offsetPercentageY: 1, width: 2500, height: 1865, …}
// __proto__: Object
