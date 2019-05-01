// initialize the map
var map = L.Wrld.map('map', '6e24c243ce23799c3c5e8e2ae9f06b72', {
    center: [40.912400, -73.123400],
    zoom: 16
  });

// add marker to the map
var sac_marker = L.marker([40.914445, -73.124199]).addTo(map);
var mathTower_marker = L.marker([40.91574, -73.126296]).addTo(map);
var wangCenter_marker = L.marker([40.916025, -73.119544]).addTo(map);
var library_marker = L.marker([40.915571, -73.122745]).addTo(map);
var lds_marker = L.marker([40.919681, -73.118468]).addTo(map);
var gls_marker = L.marker([40.912302, -73.129882]).addTo(map);
var tac_marker = L.marker([40.909979, -73.127083]).addTo(map);
var crc_marker = L.marker([40.917611, -73.123272]).addTo(map);
var staller_marker = L.marker([40.915985, -73.121045]).addTo(map);
var ncs_marker = L.marker([40.912896, -73.123244]).addTo(map);
var ess_marker = L.marker([40.91487, -73.125378]).addTo(map);
var harriman_marker = L.marker([40.915957, -73.125296]).addTo(map);

// control that shows precinct info on hover
/*
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>SBU</h4>' +  (props ?
        '<b>Building Name: ' + props.building
        : 'Click your target building');
};

info.addTo(map);

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}*/
