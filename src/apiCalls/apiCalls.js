export const getPaintings = async () => {
    const url = 'https://www.rijksmuseum.nl/api/en/collection?key=ig4dIzOQ&format=json&f.normalized32Colors.hex=%20%23000000';
    const response = await fetch(url);
    if (!response.ok){
        throw new Error('There was an error curating you display')
    }
    const paintings = await response.json();
    return paintings
}