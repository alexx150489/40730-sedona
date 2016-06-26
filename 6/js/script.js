var navMain = document.querySelector(".main-nav");
var pageHeaderToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove("main-nav--opened");
navMain.classList.add("main-nav--closed");

pageHeaderToggle.classList.remove("page-header__toggle--nojs");
pageHeaderToggle.classList.add("page-header__toggle--closed");

pageHeaderToggle.addEventListener('click', function(event) {
  event.preventDefault();
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    pageHeaderToggle.classList.remove("page-header__toggle--closed");
    pageHeaderToggle.classList.add("page-header__toggle--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    pageHeaderToggle.classList.remove("page-header__toggle--opened");
    pageHeaderToggle.classList.add("page-header__toggle--closed");
  }
});



// Map-canvas

function initialize() {
  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(34.86917, -111.76168),
    scrollwheel: false
  }

  var map = new google.maps.Map(document.getElementById('map__canvas'), mapOptions);
  var myLatLng = new google.maps.LatLng(34.86917, -111.76168);
  var image = 'img/icon-map-marker.svg';
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
