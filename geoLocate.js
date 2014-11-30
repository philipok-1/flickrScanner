var glat=null
var glon=null
var locUrl=""

var iconUrl=""

function geoLocate(){

navigator.geolocation.watchPosition(GetLocation);

function GetLocation(location) {


  glat=(location.coords.latitude).toPrecision(8);
 glon=(location.coords.longitude).toPrecision(8);


};

};

function drawMap(){

  var myLatlng = new google.maps.LatLng(glat, glon);
  var mapOptions = {
    zoom: 12,
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);

};

function putMarker(inputMap, lat, lon){

  var myLatlng = new google.maps.LatLng(lat, lon);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: inputMap,
      title: 'Hello World!'});

};