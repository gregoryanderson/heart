export const establishPaintingsInRedux = paintings => ({
  type: "ESTABLISH_PAINTINGS",
  paintings
});

export const addFavoriteInRedux = data => ({
  type: "ADD_FAVORITES",
  data
});

export const deleteFavoriteInRedux = data => ({
  type: "DELETE_FAVORITES",
  data
});

export const establishFacetsInRedux = facets => ({
  type: "ESTABLISH_FACETS",
  facets
});
