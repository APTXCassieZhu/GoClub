// initialize the map
var map = L.Wrld.map('map', '6e24c243ce23799c3c5e8e2ae9f06b72', {
    center: [40.912400, -73.123400],
    zoom: 16
  });

var buildings = [{
    "type": "Feature",
    "properties": {"name": "Student Activities Center"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.914445, -73.124199],
            [40.914445, -73.124199],
            [40.914445, -73.124199],
            [40.914445, -73.124199],
            [40.914445, -73.124199]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "Math Tower"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.91574, -73.126296],
            [40.91574, -73.126296],
            [40.91574, -73.126296],
            [40.91574, -73.126296],
            [40.91574, -73.126296]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "Wang Center"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.916025, -73.119544],
            [40.916025, -73.119544],
            [40.916025, -73.119544],
            [40.916025, -73.119544],
            [40.916025, -73.119544]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "Melville Library"},           // ?????????????
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.915571, -73.122745],
            [40.915571, -73.122745],
            [40.915571, -73.122745],
            [40.915571, -73.122745],
            [40.915571, -73.122745]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "LDS Center"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.919681, -73.118468],
            [40.919681, -73.118468],
            [40.919681, -73.118468],
            [40.919681, -73.118468],
            [40.919681, -73.118468]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "GLS Center"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.912302, -73.129882],
            [40.912302, -73.129882],
            [40.912302, -73.129882],
            [40.912302, -73.129882],
            [40.912302, -73.129882]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "Tabler Activities Center"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.909979, -73.127083],
            [40.909979, -73.127083],
            [40.909979, -73.127083],
            [40.909979, -73.127083],
            [40.909979, -73.127083]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "Campus Recreational Center"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.917611, -73.123272],
            [40.917611, -73.123272],
            [40.917611, -73.123272],
            [40.917611, -73.123272],
            [40.917611, -73.123272]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "Staller Center"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.915985, -73.121045],
            [40.915985, -73.121045],
            [40.915985, -73.121045],
            [40.915985, -73.121045],
            [40.915985, -73.121045]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "New Computer Science"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.912896, -73.123244],
            [40.912896, -73.123244],
            [40.912896, -73.123244],
            [40.912896, -73.123244],
            [40.912896, -73.123244]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "Earth and Space Sciences"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.91487, -73.125378],
            [40.91487, -73.125378],
            [40.91487, -73.125378],
            [40.91487, -73.125378],
            [40.91487, -73.125378]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"name": "Harriman Hall"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [40.915957, -73.125296],
            [40.915957, -73.125296],
            [40.915957, -73.125296],
            [40.915957, -73.125296],
            [40.915957, -73.125296]
        ]]
    }
}];

var buildingLayer = L.geoJSON(buildings, {}).addTo(map);


// add marker to the map
var sac_marker = L.marker([40.914445, -73.124199],
    {title: "Student Activities Center"}).addTo(map).on('mouseover', function(e) {
        info.update("Student Activities Center")});
var mathTower_marker = L.marker([40.91574, -73.126296],
    {title: "Math Tower"}).addTo(map).on('mouseover', function(e) {
        info.update("Math Tower")});
var wangCenter_marker = L.marker([40.916025, -73.119544],
    {title: "Wang Center"}).addTo(map).on('mouseover', function(e) {
        info.update("Wang Center")});
var library_marker = L.marker([40.915571, -73.122745],
    {title: "Melville Library"}).addTo(map).on('mouseover', function(e) {
        info.update("Melville Library")});
var lds_marker = L.marker([40.919681, -73.118468],
    {title: "LDS Center"}).addTo(map).on('mouseover', function(e) {
        info.update("LDS Center")});
var gls_marker = L.marker([40.912302, -73.129882],
    {title: "GLS Center"}).addTo(map).on('mouseover', function(e) {
        info.update("GLS Center")});
var tac_marker = L.marker([40.909979, -73.127083],
    {title: "Tabler Activities Center"}).addTo(map).on('mouseover', function(e) {
        info.update("Tabler Activities Center")});
var crc_marker = L.marker([40.917611, -73.123272],
    {title: "Campus Recreational Center"}).addTo(map).on('mouseover', function(e) {
        info.update("Campus Recreational Center")});
var staller_marker = L.marker([40.915985, -73.121045],
    {title: "Staller Center"}).addTo(map).on('mouseover', function(e) {
        info.update("Staller Center")});
var ncs_marker = L.marker([40.912896, -73.123244],
    {title: "New Computer Science"}).addTo(map).on('mouseover', function(e) {
        info.update("New Computer Science")});
var ess_marker = L.marker([40.91487, -73.125378],
    {title: "Earth and Space Sciences"}).addTo(map).on('mouseover', function(e) {
        info.update("Earth and Space Sciences")});
var harriman_marker = L.marker([40.915957, -73.125296],
    {title: "Harriman Hall"}).addTo(map).on('mouseover', function(e) {
        info.update("Harriman Hall")});

// control that shows building info on click
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    this._div.innerHTML = '<h4>SBU</h4>' +  (props ?
        '<b>Building Name: ' + props
        : 'Click your target building to view events in that building');
};

info.addTo(map);

// set popup style
var popupStyle = {
    'className' : 'popupCustom'
}
// define club event
var sac_popup = "<b>Club event in SAC</b><br>";
var mathTower_popup = "<b>Club event in Math Tower</b><br>";
var wangCenter_popup = "<b>Club event in Wang Center</b><br>";
var library_popup = "<b>Club event in Melville Library</b><br>";
var lds_popup = "<b>Club event in LDS Center</b><br>";
var gls_popup = "<b>Club event in GLS Center</b><br>";
var tac_popup = "<b>Club event in Tabler Activities Center</b><br>";
var crc_popup = "<b>Club event in Campus Recreational Center</b><br>";
var staller_popup = "<b>Club event in Staller Center</b><br>";
var ncs_popup = "<b>Club event in New Computer Science</b><br>";
var ess_popup = "<b>Club event in Earth and Space Sciences</b><br>";
var harriman_popup = "<b>Club event in Harriman Hall</b>"+
"<br>General Body Meeting@<a onclick'>American Marketing Association</a>";

// add club event into map
sac_marker.bindPopup(sac_popup, popupStyle).openPopup();
mathTower_marker.bindPopup(mathTower_popup, popupStyle).openPopup();
wangCenter_marker.bindPopup(wangCenter_popup, popupStyle).openPopup();
library_marker.bindPopup(library_popup, popupStyle).openPopup();
lds_marker.bindPopup(lds_popup, popupStyle).openPopup();
gls_marker.bindPopup(gls_popup, popupStyle).openPopup();
tac_marker.bindPopup(tac_popup, popupStyle).openPopup();
crc_marker.bindPopup(crc_popup, popupStyle).openPopup();
staller_marker.bindPopup(staller_popup, popupStyle).openPopup();
ncs_marker.bindPopup(ncs_popup, popupStyle).openPopup();
ess_marker.bindPopup(ess_popup, popupStyle).openPopup();
harriman_marker.bindPopup(harriman_popup, popupStyle).openPopup();



// highlight selected building
/*var _mouseDownPoint = null;

map.on("mousedown", onMouseDown);
map.on("mouseup", onMouseUp);

function onMouseDown(event) {
    _mouseDownPoint = event.layerPoint;
}

function onMouseUp(event) {
    var mouseUpPoint = event.layerPoint;
    var mouseMoved = mouseUpPoint.distanceTo(_mouseDownPoint) > 5;

    if (!mouseMoved) {
        var result = map.buildings.findBuildingAtScreenPoint(event.layerPoint);
        if (result.found) {
            var buildingHighlight = L.Wrld.buildings.buildingHighlight(
                L.Wrld.buildings.buildingHighlightOptions()
                    .highlightBuildingAtScreenPoint(event.layerPoint)
                    .color([255, 255, 0, 128])
                )
                .addTo(map);

            setTimeout(function() {
                buildingHighlight.remove();
            }, 4000);
        }

    }
}*/