var customOptions =  {    
    'maxWidth': String.valueOf((screen.width/2)-5),
    'width': '200',
    'maxHeight': String.valueOf((screen.height/2)-5),
    'height': 700
}

function createMap(elemId, centerLat, centerLng, zoom) {
    var map = new L.Map(elemId);

    // Data provider
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';

    // Layer
    var osmLayer = new L.TileLayer(osmUrl, {
        minZoom: 4,
        maxZoom: 20,
        attribution: osmAttrib
    });

    // Map
    map.setView(new L.LatLng(centerLat, centerLng), zoom);
    map.addLayer(osmLayer);
    return map;
}

function addMarker(map, latLng, onClick) {
    var photoImg = "https://static.pexels.com/photos/189349/pexels-photo-189349.jpeg";
    var marker = L.marker(latLng).addTo(map);
    marker.bindPopup('<img  style="max-height:'+ (screen.height-70) +'px;max-width:'+ (screen.width-70) +'px;" src="' + photoImg + '"/>', customOptions).openPopup();
    marker.on('click', function(e){
        map.setView([e.latlng.lat, e.latlng.lng]);
    });
    return marker;
}

document.addEventListener("DOMContentLoaded", function () {
    var map = createMap('map', 48.1238, -1.8618, 16);

    markersLatLng = [
        [48.12486, -1.86563], 
        [48.12593, -1.86686],
        [48.11959, -1.86407],
        [48.12168, -1.85930], 
        [48.12494, -1.86160], 
        [48.11957, -1.86368], 
        [48.12521, -1.86760], 
        [48.12361, -1.86780], 
        [48.12670, -1.86169], 
        [48.12365, -1.86146],
        [48.12317, -1.86279],
        [48.11931, -1.86210],
    ];

    markersLatLng.forEach(function(latLng) {
        addMarker(map, latLng);
    });

});