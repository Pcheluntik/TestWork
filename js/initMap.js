function initMap() {
  var body_js = document.querySelector("body");
  if (body_js.classList.contains("no-js")) {
    body_js.classList.remove("no-js");
  }
  var myLatLng = {
    lat: 59.938547,
    lng: 30.323491
  };
  var map = new google.maps.Map(document.getElementById("map-google"), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 17
  });
/*  var image = "img/marker.png";
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: "Gllacy",
    icon: image
  });*/
}
