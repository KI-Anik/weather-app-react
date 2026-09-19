
export const getGeolocation = async (city) => {

    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    const response = await fetch(url);
    if (!response) {
        throw new Error("Geocoding request failed")
    }
    const data = await response.json()
    const place = data.results[0]
    // console.log(place);
    return {
        name: place.name,
        lat: place.latitude,
        lon: place.longitude
    }
};
