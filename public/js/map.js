// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapToken.accessToken = mapToken;
// console.log(mapToken);
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates).setPopup(
        new mapboxgl.Popup({ offset: 20 })
            .setHTML(`<h4>${listing.location + ", " + listing.country}</h4><hr><p>Exact Location Provided after Booking</p>`)
    ).addTo(map);


