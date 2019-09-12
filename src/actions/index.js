export const establishPaintingsInRedux = paintings => ({
    type: 'ESTABLISH_PAINTINGS',
    paintings
})

export const establishFavoritesInRedux = data => ({
    type: 'ESTABLISH_FAVORITES',
    data
})