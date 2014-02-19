// Google Map
var styles = [
	{
    "featureType": "transit.station.rail",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "transit.line",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#88BCD7" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      { "color": "#3E75BB" },
      { "saturation": 0 },
      { "lightness": 28 }
    ]
  },{
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#88BCD7" },
      { "saturation": 100 },
      { "lightness": -100 }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      { "color": "#e3e3e3" },
      { "lightness": -10 }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#000000" }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "color": "#3E75BB" },
      { "saturation": 0 },
      { "lightness": 28 }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "color": "#3E75BB" },
      { "saturation": 0 },
      { "lightness": 28 }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      { "saturation": -100 }
    ]
  },{
    "featureType": "transit.station.bus",
    "elementType": "labels.text.fill",
    "stylers": [
      { "saturation": -100 },
      { "color": "#36312f" }
    ]
  },{
    "featureType": "transit.station.bus",
    "elementType": "labels.icon",
    "stylers": [
      { "color": "#454a44" },
      { "saturation": -100 },
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.transit",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  }
];

      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(51.521335,-0.121604),
          zoom: 13,
          disableDefaultUI: false,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: styles,
          scrollwheel: false,
          draggable: false,
        };
        
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var infowindow = new google.maps.InfoWindow();

        //Marker 
        var marker1 = new google.maps.Marker({
          position: new google.maps.LatLng(51.521335,-0.121604),
          icon:'assets/img/map.png',
        });

        marker1.setMap(map);

        google.maps.event.addListener(marker1, 'click', function() {
          if (infowindow) {
            infowindow.close();
          }
          infowindow.setOptions({
            content:'<a href="#contact-details" class="pin">Bestmannlab</a>'
          })
          infowindow.open(map,marker1);
        });

      }

      google.maps.event.addDomListener(window, 'load', initialize);

