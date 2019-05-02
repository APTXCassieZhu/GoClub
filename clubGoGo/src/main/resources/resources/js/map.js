// initialize the map
var map = L.Wrld.map('map', '6e24c243ce23799c3c5e8e2ae9f06b72', {
    center: [40.912400, -73.123400],
    zoom: 16
  });

// add marker to the map
/*var sac_marker = L.marker([40.914445, -73.124199]).addTo(map);
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
var harriman_marker = L.marker([40.915957, -73.125296]).addTo(map);*/

// control that shows building info on hover
/*var info = L.control();

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

info.addTo(map);*/

var locations = [[40.914445, -73.124199],[40.91574, -73.126296], [40.916025, -73.119544],
                [40.915571, -73.122745], [40.919681, -73.118468],[40.912302, -73.129882],
                [40.909979, -73.127083], [40.917611, -73.123272],[40.915985, -73.121045],
                [40.912896, -73.123244], [40.91487, -73.125378], [40.915957, -73.125296]];

function onInitialStreamingComplete() {
    addMarkerAboveBuilding(L.latLng(locations[0]), "Student Activities Center");
    addMarkerAboveBuilding(L.latLng(locations[1]), "Math Tower");
    addMarkerAboveBuilding(L.latLng(locations[2]), "Wang Center");
    addMarkerAboveBuilding(L.latLng(locations[3]), "Melville Library");
    addMarkerAboveBuilding(L.latLng(locations[4]), "LDS Center");
    addMarkerAboveBuilding(L.latLng(locations[5]), "GLS Center");
    addMarkerAboveBuilding(L.latLng(locations[6]), "Tabler Activities Center");
    addMarkerAboveBuilding(L.latLng(locations[7]), "Campus Recreational Center");
    addMarkerAboveBuilding(L.latLng(locations[8]), "Staller Center");
    addMarkerAboveBuilding(L.latLng(locations[9]), "New Computer Science");
    addMarkerAboveBuilding(L.latLng(locations[10]), "ESS");
    addMarkerAboveBuilding(L.latLng(locations[11]), "Harriman Hall");
}

function addMarkerAboveBuilding(location, title) {
    var intersection = map.buildings.findBuildingAtLatLng(location);
    if (intersection.found) {
        L.marker(location, {
                elevation: intersection.point.alt,
                title: title
            }).addTo(map);
    }
}

map.on("initialstreamingcomplete", onInitialStreamingComplete);