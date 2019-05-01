// initialize the map
var mymap = L.map('map').setView([40.912400, -73.123400], 35);
// load a tile layer(worldwide)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.light'
}).addTo(map);

var sac_marker = L.marker([40.914445, -73.124199]).addTo(mymap);
var mathTower_marker = L.marker([40.91574, -73.126296]).addTo(mymap);
var wangCenter_marker = L.marker([40.916025, -73.119544]).addTo(mymap);
var library_marker = L.marker([40.915571, -73.122745]).addTo(mymap);
var lds_marker = L.marker([40.919681, -73.118468]).addTo(mymap);
var gls_marker = L.marker([40.912302, -73.129882]).addTo(mymap);
var tac_marker = L.marker([40.909979, -73.127083]).addTo(mymap);
var crc_marker = L.marker([40.917611, -73.123272]).addTo(mymap);
var staller_marker = L.marker([40.915985, -73.121045]).addTo(mymap);
var ncs_marker = L.marker([40.912896, -73.123244]).addTo(mymap);
var ess_marker = L.marker([40.91487, -73.125378]).addTo(mymap);
var harriman_marker = L.marker([40.915957, -73.125296]).addTo(mymap);

// control that shows precinct info on hover
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>SBU</h4>' +  (props ?
        '<b>Building Name: ' + props.building
        : 'Hover over a district');
};

info.addTo(map);

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}
