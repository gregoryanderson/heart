import { usersRef } from '../config/firebase';

// export const addUser = newUser => {
//     console.log('hitting this')
//     usersRef.push().set({'one': '1'})
// }

export const establishPaintingsInRedux = paintings => ({
    type: 'ESTABLISH_PAINTINGS',
    paintings
})

export const addFavoriteInRedux = data => ({
    type: 'ADD_FAVORITES',
    data
})

export const deleteFavoriteInRedux = data => ({
    type: 'DELETE_FAVORITES',
    data
})

export const establishFacetsInRedux = facets => ({
    type: 'ESTABLISH_FACETS',
    facets
})