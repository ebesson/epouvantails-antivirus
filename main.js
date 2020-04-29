const Scarecrow = class {

    constructor(coordinates, src) {
      this.coordinates = coordinates;
      this.src = src;
    }

    gpsCoordinates() {
      return this.coordinates;
    }
    image() {
        return this.src;
    }
  }
  

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

function addMarker(map, scarecrow) {
    
    var marker = L.marker(scarecrow.gpsCoordinates()).addTo(map);
    if (scarecrow.image() != ""){
        marker.bindPopup('<img  style="max-height:'+ (screen.height-70) +'px;max-width:'+ (screen.width-70) +'px;" src="' + scarecrow.image() + '"/>', customOptions).openPopup();
        marker.on('click', function(e){
            map.setView([e.latlng.lat, e.latlng.lng]);
        });
    }
    return marker;
}

document.addEventListener("DOMContentLoaded", function () {
    var map = createMap('map', 48.1238, -1.8618, 16);

    var scarecrows = [
        new Scarecrow([48.12486, -1.86563], "images/000.png"), 
        new Scarecrow([48.12593, -1.86686], "images/001.png"),
        new Scarecrow([48.11959, -1.86407], "images/002.png"),
        new Scarecrow([48.12168, -1.85930], "images/003.png"), 
        new Scarecrow([48.12494, -1.86160], "images/004.png"), 
        new Scarecrow([48.11957, -1.86368], "images/005.png"), 
        new Scarecrow([48.12521, -1.86760], ""), 
        new Scarecrow([48.12361, -1.86780], "images/007.png"), 
        new Scarecrow([48.12670, -1.86169], "images/008.png"), 
        new Scarecrow([48.12365, -1.86146], "images/009.png"),
        
        new Scarecrow([48.11931, -1.86210], "images/011.png"),
    ];

    scarecrows.forEach(function(scarecrow) {
        addMarker(map, scarecrow);
    });

});