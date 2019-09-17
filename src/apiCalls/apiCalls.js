export const getPaintingsFromApiCalls = () => {
  const url =
    "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&q=van gogh&imgonly=true";
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating your gallery");
      }
      return response.json();
    })
    .then(data => cleanPaintingData(data));
};

export const getSearchedForPaintingsByColor = input => {
  const url = `https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&f.normalized32Colors.hex=%20%23${input}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating your gallery");
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
        throw new Error("There was an error curating your gallery");
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
        throw new Error("There was an error curating your gallery");
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
        throw new Error("There was an error curating your gallery");
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
        throw new Error("There was an error curating your gallery");
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
        throw new Error("There was an error curating your gallery");
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
        throw new Error("There was an error curating your gallery");
      }
      return response.json();
    })
    .then(data => cleanPaintingData(data));
};

export const cleanPaintingData = data => {
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

export const getFacetsFromApiCalls = data => {
  const url =
    "https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&ps=10";
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("There was an error curating your gallery");
      }
      return response.json();
    })
    .then(data => cleanFacetData(data));
};

export const cleanFacetData = data => {
  return data.facets.map(facet => {
    return {
      facets: facet.facets,
      name: facet.name
    };
  });
};
