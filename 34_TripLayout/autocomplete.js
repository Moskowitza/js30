let latInput;
let lngInput;
// Initialize gets our autocomplete working and runs initMap
function initialize() {
  initMap();
  console.log('initialized');
  const address = document.querySelector('#city');
  const dropdown = new google.maps.places.Autocomplete(address);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput = place.geometry.location.lat();
    lngInput = place.geometry.location.lng();
    localStorage.setItem('latInput', JSON.stringify(latInput));
    localStorage.setItem('lngInput', JSON.stringify(lngInput));
    drawMap(latInput, lngInput);
  });
  // if someone hits enter on the address field, don't submit the form
  input.on('keydown', e => {
    if (e.keyCode === 13) e.preventDefault();
  });
}

let map;
function drawMap(lat, lng) {
  console.log(`drawing new map ${lat}, ${lng}`);
  const center = { lat, lng };
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center
  });
}

function initMap() {
  const center = { lat: 34.052235, lng: -118.243683 };
  const locations = [
    [
      'Philz Coffee<br>\
      801 S Hope St A, Los Angeles, CA 90017<br>\
     <a href="https://goo.gl/maps/L8ETMBt7cRA2">Get Directions</a>',
      34.046438,
      -118.259653
    ],
    [
      'Philz Coffee<br>\
      525 Santa Monica Blvd, Santa Monica, CA 90401<br>\
     <a href="https://goo.gl/maps/PY1abQhuW9C2">Get Directions</a>',
      34.017951,
      -118.493567
    ],
    [
      'Philz Coffee<br>\
      146 South Lake Avenue #106, At Shoppers Lane, Pasadena, CA 91101<br>\
      <a href="https://goo.gl/maps/eUmyNuMyYNN2">Get Directions</a>',
      34.143073,
      -118.13204
    ],
    [
      'Philz Coffee<br>\
      21016 Pacific Coast Hwy, Huntington Beach, CA 92648<br>\
      <a href="https://goo.gl/maps/Cp2TZoeGCXw">Get Directions</a>',
      33.655199,
      -117.99864
    ],
    [
      'Philz Coffee<br>\
      252 S Brand Blvd, Glendale, CA 91204<br>\
     <a href="https://goo.gl/maps/WDr2ef3ccVz">Get Directions</a>',
      34.142823,
      -118.254569
    ]
  ];
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center
  });
  // const infowindow = new google.maps.InfoWindow({});
  // let marker;
  // let count;
  // for (count = 0; count < locations.length; count++) {
  //   marker = new google.maps.Marker({
  //     position: new google.maps.LatLng(locations[count][1], locations[count][2]),
  //     map,
  //     title: locations[count][0]
  //   });
  //   google.maps.event.addListener(
  //     marker,
  //     'click',
  //     (function(marker, count) {
  //       return function() {
  //         infowindow.setContent(locations[count][0]);
  //         infowindow.open(map, marker);
  //       };
  //     })(marker, count)
  //   );
  // }
}
