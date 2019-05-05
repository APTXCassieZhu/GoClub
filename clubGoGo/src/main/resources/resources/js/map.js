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
    this._div.innerHTML = '<h4>SBU Club Event Map</h4>' +  (props ?
        '<b>Building Name: ' + props
        : 'Click your target building to view events in that building');
};

info.addTo(map);

// define club event
var sac_popup = "<b>Club event in SAC</b>"+
"<br>11:30 Lobby Bake Sale@<a onclick=\"jumpToClub('Dance Team')\"><u>Dance Team</u></a>"+
"<br>12:00 Room311 Dementor-A-Thon@<a onclick=\"jumpToClub('Dumbledore's Army')\"><u>Dumbledore's Army</u></a>"+
"<br>12:30 Lobby Bake Sale@<a onclick=\"jumpToClub('SBU Junoon')\"><u>SBU Junoon</u></a>"+
"<br>17:00 Room304 General Body Meeting @<a onclick=\"jumpToClub('Buddhist Meditation Club')\"><u>Buddhist Meditation Club</u></a>"+
"<br>17:30 SEA Presents: Last Night Out@<a onclick=\"jumpToClub('Undergraduate Social Welfare Alliance')\"><u>Undergraduate Social Welfare Alliance</u></a>"+
"<br>18:00 Room304 General Body Meeting@<a onclick=\"jumpToClub('Buddhist Meditation Club1')\"><u>Buddhist Meditation Club1</u></a>"+
"<br>18:30 Room304 Krispy Kreme Fundraiser@<a onclick=\"jumpToClub('Watsi')\"><u>Watsi</u></a>"+
"<br>19:00 BallroomA Casino Royale Semi-Formal@<a onclick=\"jumpToClub('Asian Students Alliance')\"><u>Asian Students Alliance</u></a>"+
"<br>19:00 Room306 Peking Duck Bao Night@<a onclick=\"jumpToClub('Cantonese Club')\"><u>Cantonese Club</u></a>"+
"<br>19:00 BallroomB JNight@<a onclick=\"jumpToClub('Japanese Student Organization')\"><u>Japanese Student Organization</u></a>"+
"<br>19:00 Room311 Capoeira Class@<a onclick=\"jumpToClub('Capoeira Club')\"><u>Capoeira Club</u></a>"+
"<br>20:00 Room302 General Body Meeting@<a onclick=\"jumpToClub('Carribean Student Organization')\"><u>Carribean Student Organization</u></a>"+
"<br>20:00 Room307 General Body Meeting@<a onclick=\"jumpToClub('SBU-TV')\"><u>SBU-TV</u></a>"+
"<br>21:00 Room305 Phi Iota Alpha Fraternity Movie Night@<a onclick=\"jumpToClub('MALK Fraternity, Inc.')\"><u>MALK Fraternity, Inc.</u></a>"+
"<br>";
var wangCenter_popup = "<b>Club event in Wang Center</b>"+
"<br>13:00 The Chinese Exclusion Act@<a onclick=\"jumpToClub('Charles B. Wang Center')\"><u>Charles B. Wang Center</u></a>"+
"<br>";
var library_popup = "<b>Club event in Melville Library</b>"+
"<br>18:00 N5580 General Body Meeting@<a onclick=\"jumpToClub('Jewish Student Association')\"><u>Jewish Student Association</u></a>"+
"<br>18:30 N4006 Socialist Reading Group: What is to be Done? Burning Questions of Our Movement@<a onclick=\"jumpToClub('Young Democratic Socialists of Stony Brook University (Formerly Coalition of University Students for Progress or CUSP)')\"><u>Young Democratic Socialists of Stony Brook University (Formerly Coalition of University Students for Progress or CUSP)</u></a>"+
"<br>19:00 N3063 General Body Meeting@<a onclick=\"jumpToClub('The Play it Forward Project')\"><u>The Play it Forward Project</u></a>"+
"<br>19:00 E4320 General Body Meeting@<a onclick=\"jumpToClub('Peer Mental Health Alliance')\"><u>Peer Mental Health Alliance</u></a>"+
"<br>19:00 N5560 General Body Meeting@<a onclick=\"jumpToClub('Newman Club')\"><u>Newman Club</u></a>"+
"<br>";
var lds_popup = "<b>Club event in LDS Center</b>"+
"<br>19:00 General Body Meeting@<a onclick=\"jumpToClub('CASB Dance Team')\"><u>CASB Dance Team</u></a>"+
"<br>20:00 SAYAW@<a onclick=\"jumpToClub('Philippine United Student Organization')\"><u>Philippine United Student Organization</u></a>"+
"<br>";
var gls_popup = "<b>Club event in GLS Center</b>"+
"<br>12:00 Battle of the Brook@<a onclick=\"jumpToClub('League of Legends Club')\"><u>League of Legends Club</u></a>"+
"<br>13:00 The Beauty Bar@<a onclick=\"jumpToClub('Hairitage')\"><u>Hairitage</u></a>"+
"<br>19:00 Spirit of Saigon@<a onclick=\"jumpToClub('Vietnamese Student Association')\"><u>Vietnamese Student Association</u></a>"+
"<br>20:00 Kompa Night@<a onclick=\"jumpToClub('Haitian Student Organization')\"><u>Haitian Student Organization</u></a>"+
"<br>";
var tac_popup = "<b>Club event in Tabler Activities Center</b>"+
"<br>12:00 Chinese Drama Fair@<a onclick=\"jumpToClub('Chinese Association at Stony Brook')\"><u>Chinese Association at Stony Brook</u></a>"+
"<br>19:00 Spring Final Concert@<a onclick=\"jumpToClub('Vocalists')\"><u>Vocalists</u></a>"+
"<br>19:30 NPHC Open House@<a onclick=\"jumpToClub('National Pan-Hallenic Council')\"><u>National Pan-Hallenic Council</u></a>"+
"<br>20:00 Spring Invitational@<a onclick=\"jumpToClub('Stony Brook Pipettes')\"><u>Stony Brook Pipettes</u></a>"+
"<br>";
var crc_popup = "<b>Club event in Campus Recreational Center</b>"+
"<br>17:00 Belly Dance Workshop@<a onclick=\"jumpToClub('Belly Dance')\"><u>Belly Dance</u></a>"+
"<br>17:00 Practice@<a onclick=\"jumpToClub('Kumdo Club')\"><u>Kumdo Club</u></a>"+
"<br>";
var staller_popup = "<b>Club event in Staller Center</b>"+
"<br>19:30 University Orchestra@<a onclick=\"jumpToClub('Stony Brook Broadway Orchestra')\"><u>Stony Brook Broadway Orchestra</u></a>"+
"<br>";
var ncs_popup = "<b>Club event in New Computer Science</b>"+
"<br>15:00 General Body Meeting@<a onclick=\"jumpToClub('WPhD Computer Science')\"><u>WPhD Computer Science</u></a>"+
"<br>";
var ess_popup = "<b>Club event in Earth and Space Sciences</b>"+
"<br>17:00 General Body Meeting@<a onclick=\"jumpToClub('Earth and Planetary Science Club')\"><u>Earth and Planetary Science Club</u></a>"+
"<br>";
var harriman_popup = "<b>Club event in Harriman Hall</b>"+
"<br>15:00 Room104 General Body Meeting@<a onclick=\"jumpToClub('American Marketing Association')\"><u>American Marketing Association</u></a>"+
"<br>19:00 Room104 General Body Meeting@<a onclick=\"jumpToClub('American Marketing Association1')\"><u>American Marketing Association1</u></a>"+
"<br>19:00 Room243 General Body Meeting@<a onclick=\"jumpToClub('Stony Brook Chess Club')\"><u>Stony Brook Chess Club</u></a>"+
"<br>19:00 Room105 Project Sunshine@<a onclick=\"jumpToClub('Project Sunshine')\"><u>Project Sunshine</u></a>"+
"<br>";

function jumpToClub(str){
    console.log(str);
    $.cookie('clubname', str);
    document.location.href="/clubDetail.html";
}

// add club event into map
sac_marker.bindPopup(sac_popup).openPopup();
wangCenter_marker.bindPopup(wangCenter_popup).openPopup();
library_marker.bindPopup(library_popup).openPopup();
lds_marker.bindPopup(lds_popup).openPopup();
gls_marker.bindPopup(gls_popup).openPopup();
tac_marker.bindPopup(tac_popup).openPopup();
crc_marker.bindPopup(crc_popup).openPopup();
staller_marker.bindPopup(staller_popup).openPopup();
ncs_marker.bindPopup(ncs_popup).openPopup();
ess_marker.bindPopup(ess_popup).openPopup();
harriman_marker.bindPopup(harriman_popup).openPopup();

// remove markers
function mapInit() {
    sac_marker.bindPopup(sac_popup);
    wangCenter_marker.bindPopup(wangCenter_popup);
    library_marker.bindPopup(library_popup);
    lds_marker.bindPopup(lds_popup);
    gls_marker.bindPopup(gls_popup);
    tac_marker.bindPopup(tac_popup);
    crc_marker.bindPopup(crc_popup);
    staller_marker.bindPopup(staller_popup);
    ncs_marker.bindPopup(ncs_popup);
    ess_marker.bindPopup(ess_popup);
    harriman_marker.bindPopup(harriman_popup); 
    map.removeLayer(sac_marker); 
    map.removeLayer(wangCenter_marker); 
    map.removeLayer(library_marker);
    map.removeLayer(lds_marker);
    map.removeLayer(gls_marker);
    map.removeLayer(tac_marker);
    map.removeLayer(crc_marker);
    map.removeLayer(staller_marker);
    map.removeLayer(ncs_marker);
    map.removeLayer(ess_marker);
    map.removeLayer(harriman_marker);
}

// click select button
function academic(){
    mapInit();
    harriman_marker.addTo(map);
    ess_marker.addTo(map);
    ncs_marker.addTo(map);
    var ess_popup1 = "<b>Club event in Earth and Space Sciences</b>"+
    "<br>17:00 General Body Meeting@<a onclick=\"jumpToClub('Earth and Planetary Science Club')\"><u>Earth and Planetary Science Club</u></a>"+
    "<br>";
    var harriman_popup1 = "<b>Club event in Harriman Hall</b>"+
    "<br>19:00 Room104 General Body Meeting@<a onclick=\"jumpToClub('American Marketing Association1')\"><u>American Marketing Association1</u></a>"+
    "<br>"; 
    ess_marker.bindPopup(ess_popup1);
    harriman_marker.bindPopup(harriman_popup1);
}
function culture(){
    mapInit();
    sac_marker.addTo(map);
    crc_marker.addTo(map);
    tac_marker.addTo(map);
    gls_marker.addTo(map);
    lds_marker.addTo(map);
    library_marker.addTo(map);
    wangCenter_marker.addTo(map);
}
function fraternity(){
    mapInit();
    tac_marker.addTo(map);
}
function media(){
    mapInit();
    ess_marker.addTo(map);
    sac_marker.addTo(map);
    staller_marker.addTo(map);
    library_marker.addTo(map);
}
function performance(){
    mapInit();
    lds_marker.addTo(map);
    sac_marker.addTo(map);
    tac_marker.addTo(map);
    library_marker.addTo(map);
}
function activism(){
    mapInit();
    sac_marker.addTo(map);
}
function religion(){
    mapInit();
    sac_marker.addTo(map);
    library_marker.addTo(map);
}
function leisure(){
    mapInit();
    harriman_marker.addTo(map);
    gls_marker.addTo(map);
}
function service(){
    mapInit();
    harriman_marker.addTo(map);
    library_marker.addTo(map);
}
function sport(){
    mapInit();
    sac_marker.addTo(map);
}

function select0() {
    mapInit();
}

function select1(){
    mapInit();
    sac_marker.addTo(map);
    tac_marker.addTo(map);
    wangCenter_marker.addTo(map);
    gls_marker.addTo(map);
    var sac_popup1 = "<b>Club event in SAC</b>"+
    "<br>11:30 Lobby Bake Sale@<a onclick=\"jumpToClub('Dance Team')\"><u>Dance Team</u></a>"+
    "<br>12:00 Room311 Dementor-A-Thon@<a onclick=\"jumpToClub('Dumbledore's Army')\"><u>Dumbledore's Army</u></a>"+
    "<br>12:30 Lobby Bake Sale@<a onclick=\"jumpToClub('SBU Junoon')\"><u>SBU Junoon</u></a>"+
    "<br>";
    var wangCenter_popup1 = "<b>Club event in Wang Center</b>"+
    "<br>13:00 The Chinese Exclusion Act@<a onclick=\"jumpToClub('Charles B. Wang Center')\"><u>Charles B. Wang Center</u></a>"+
    "<br>";
    var gls_popup1 = "<b>Club event in GLS Center</b>"+
    "<br>12:00 Battle of the Brook@<a onclick=\"jumpToClub('League of Legends Club')\"><u>League of Legends Club</u></a>"+
    "<br>13:00 The Beauty Bar@<a onclick=\"jumpToClub('Hairitage')\"><u>Hairitage</u></a>"+
    "<br>";
    var tac_popup1 = "<b>Club event in Tabler Activities Center</b>"+
    "<br>12:00 Chinese Drama Fair@<a onclick=\"jumpToClub('Chinese Association at Stony Brook')\"><u>Chinese Association at Stony Brook</u></a>"+
    "<br>";
    sac_marker.bindPopup(sac_popup1);
    tac_marker.bindPopup(tac_popup1);
    wangCenter_marker.bindPopup(wangCenter_popup1);
    gls_marker.bindPopup(gls_popup1);
}
function select2(){
    mapInit();
    harriman_marker.addTo(map);
    ess_marker.addTo(map);
    ncs_marker.addTo(map);
    crc_marker.addTo(map);
    sac_marker.addTo(map);
    library_marker.addTo(map);
    var sac_popup2 = "<b>Club event in SAC</b>"+
    "<br>17:00 Room304 General Body Meeting @<a onclick=\"jumpToClub('Buddhist Meditation Club')\"><u>Buddhist Meditation Club</u></a>"+
    "<br>17:30 SEA Presents: Last Night Out@<a onclick=\"jumpToClub('Undergraduate Social Welfare Alliance')\"><u>Undergraduate Social Welfare Alliance</u></a>"+
    "<br>18:00 Room304 General Body Meeting@<a onclick=\"jumpToClub('Buddhist Meditation Club1')\"><u>Buddhist Meditation Club1</u></a>"+
    "<br>18:30 Room304 Krispy Kreme Fundraiser@<a onclick=\"jumpToClub('Watsi')\"><u>Watsi</u></a>"+
    "<br>";
    var library_popup2 = "<b>Club event in Melville Library</b>"+
    "<br>18:00 N5580 General Body Meeting@<a onclick=\"jumpToClub('Jewish Student Association')\"><u>Jewish Student Association</u></a>"+
    "<br>18:30 N4006 Socialist Reading Group: What is to be Done? Burning Questions of Our Movement@<a onclick=\"jumpToClub('Young Democratic Socialists of Stony Brook University (Formerly Coalition of University Students for Progress or CUSP)')\"><u>Young Democratic Socialists of Stony Brook University (Formerly Coalition of University Students for Progress or CUSP)</u></a>"+
    "<br>";
    var gls_popup2 = "<b>Club event in GLS Center</b>"+
    "<br>13:00 The Beauty Bar@<a onclick=\"jumpToClub('Hairitage')\"><u>Hairitage</u></a>"+
    "<br>";
    var crc_popup2 = "<b>Club event in Campus Recreational Center</b>"+
    "<br>17:00 Belly Dance Workshop@<a onclick=\"jumpToClub('Belly Dance')\"><u>Belly Dance</u></a>"+
    "<br>17:00 Practice@<a onclick=\"jumpToClub('Kumdo Club')\"><u>Kumdo Club</u></a>"+
    "<br>";
    var ncs_popup2 = "<b>Club event in New Computer Science</b>"+
    "<br>15:00 General Body Meeting@<a onclick=\"jumpToClub('WPhD Computer Science')\"><u>WPhD Computer Science</u></a>"+
    "<br>";
    var ess_popup2 = "<b>Club event in Earth and Space Sciences</b>"+
    "<br>17:00 General Body Meeting@<a onclick=\"jumpToClub('Earth and Planetary Science Club')\"><u>Earth and Planetary Science Club</u></a>"+
    "<br>";
    var harriman_popup2 = "<b>Club event in Harriman Hall</b>"+
    "<br>15:00 Room104 General Body Meeting@<a onclick=\"jumpToClub('American Marketing Association')\"><u>American Marketing Association</u></a>"+
    "<br>";
    harriman_marker.bindPopup(harriman_popup2);
    ess_marker.bindPopup(ess_popup2);
    ncs_marker.bindPopup(ncs_popup2);
    crc_marker.bindPopup(crc_popup2);
    sac_marker.bindPopup(sac_popup2);
    library_marker.bindPopup(library_popup2);
}
function select3(){
    mapInit();
    sac_marker.addTo(map);
    gls_marker.addTo(map);
    library_marker.addTo(map);
    lds_marker.addTo(map);
    tac_marker.addTo(map);
    staller_marker.addTo(map);
    var sac_popup3 = "<b>Club event in SAC</b>"+
    "<br>19:00 BallroomA Casino Royale Semi-Formal@<a onclick=\"jumpToClub('Asian Students Alliance')\"><u>Asian Students Alliance</u></a>"+
    "<br>19:00 Room306 Peking Duck Bao Night@<a onclick=\"jumpToClub('Cantonese Club')\"><u>Cantonese Club</u></a>"+
    "<br>19:00 BallroomB JNight@<a onclick=\"jumpToClub('Japanese Student Organization')\"><u>Japanese Student Organization</u></a>"+
    "<br>19:00 Room311 Capoeira Class@<a onclick=\"jumpToClub('Capoeira Club')\"><u>Capoeira Club</u></a>"+
    "<br>20:00 Room302 General Body Meeting@<a onclick=\"jumpToClub('Carribean Student Organization')\"><u>Carribean Student Organization</u></a>"+
    "<br>20:00 Room307 General Body Meeting@<a onclick=\"jumpToClub('SBU-TV')\"><u>SBU-TV</u></a>"+
    "<br>21:00 Room305 Phi Iota Alpha Fraternity Movie Night@<a onclick=\"jumpToClub('MALK Fraternity, Inc.')\"><u>MALK Fraternity, Inc.</u></a>"+
    "<br>";
    var library_popup3 = "<b>Club event in Melville Library</b>"+
    "<br>19:00 N3063 General Body Meeting@<a onclick=\"jumpToClub('The Play it Forward Project')\"><u>The Play it Forward Project</u></a>"+
    "<br>19:00 E4320 General Body Meeting@<a onclick=\"jumpToClub('Peer Mental Health Alliance')\"><u>Peer Mental Health Alliance</u></a>"+
    "<br>19:00 N5560 General Body Meeting@<a onclick=\"jumpToClub('Newman Club')\"><u>Newman Club</u></a>"+
    "<br>";
    var lds_popup3 = "<b>Club event in LDS Center</b>"+
    "<br>19:00 General Body Meeting@<a onclick=\"jumpToClub('CASB Dance Team')\"><u>CASB Dance Team</u></a>"+
    "<br>20:00 SAYAW@<a onclick=\"jumpToClub('Philippine United Student Organization')\"><u>Philippine United Student Organization</u></a>"+
    "<br>";
    var gls_popup3 = "<b>Club event in GLS Center</b>"+
    "<br>19:00 Spirit of Saigon@<a onclick=\"jumpToClub('Vietnamese Student Association')\"><u>Vietnamese Student Association</u></a>"+
    "<br>20:00 Kompa Night@<a onclick=\"jumpToClub('Haitian Student Organization')\"><u>Haitian Student Organization</u></a>"+
    "<br>";
    var tac_popup3 = "<b>Club event in Tabler Activities Center</b>"+
    "<br>19:00 Spring Final Concert@<a onclick=\"jumpToClub('Vocalists')\"><u>Vocalists</u></a>"+
    "<br>19:30 NPHC Open House@<a onclick=\"jumpToClub('National Pan-Hallenic Council')\"><u>National Pan-Hallenic Council</u></a>"+
    "<br>20:00 Spring Invitational@<a onclick=\"jumpToClub('Stony Brook Pipettes')\"><u>Stony Brook Pipettes</u></a>"+
    "<br>";
    var staller_popup3 = "<b>Club event in Staller Center</b>"+
    "<br>19:30 University Orchestra@<a onclick=\"jumpToClub('Stony Brook Broadway Orchestra')\"><u>Stony Brook Broadway Orchestra</u></a>"+
    "<br>";
    var harriman_popup3 = "<b>Club event in Harriman Hall</b>"+
    "<br>19:00 Room104 General Body Meeting@<a onclick=\"jumpToClub('American Marketing Association1')\"><u>American Marketing Association1</u></a>"+
    "<br>19:00 Room243 General Body Meeting@<a onclick=\"jumpToClub('Stony Brook Chess Club')\"><u>Stony Brook Chess Club</u></a>"+
    "<br>19:00 Room105 Project Sunshine@<a onclick=\"jumpToClub('Project Sunshine')\"><u>Project Sunshine</u></a>"+
    "<br>";
    sac_marker.bindPopup(sac_popup3);
    gls_marker.bindPopup(gls_popup3);
    library_marker.bindPopup(library_popup3);
    lds_marker.bindPopup(lds_popup3);
    tac_marker.bindPopup(tac_popup3);
    staller_marker.bindPopup(staller_popup3);
}
