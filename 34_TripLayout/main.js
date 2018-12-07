console.log('mainjs has loaded');
// Save query to local storage
function save_data() {
  const city = document.getElementById('city');
  const date = document.getElementById('date');
  const endDate = document.getElementById('endDate');
  const interest = document.getElementById('interest');
  const travelInfo = {
    city: city.value,
    date: date.value,
    endDate: endDate.value,
    interest: interest.value
  };
  console.log('saving');
  localStorage.setItem('travelInfo', JSON.stringify(travelInfo));
}

// build our API URL
const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
const eventfulAPI = 'https://api.eventful.com/json/events/search';
const apiKey = 'GwkZSkkp4pntM7gp';

// retrieve our data from local storage
const data = localStorage.getItem('travelInfo');
// const lat = localStorage.getItem('latInput');
// const lng = localStorage.getItem('lngInput');
const travelData = JSON.parse(data);
console.log(`City from our local storage ${travelData.city}`);

//   // get events from API
const eventfulUrl = `${corsApiUrl}${eventfulAPI}?app_key=${apiKey}&keywords=${
  travelData.interest
}&location=${travelData.city}&date=${travelData.date}to${travelData.endDate}`;

console.log(eventfulUrl);

const eventResponse = fetch(eventfulUrl);
eventResponse
  .then(res => res.json())
  .then(res => {
    const [...eventArr] = res.events.event;
    console.log(eventArr);

    const markup = `
    ${eventArr
      .map(
        event => `
          <li>${event.title}</li>
        `
      )
      .join('')}
    `;
    const resultDiv = document.getElementById('results-list');
    resultDiv.innerHTML = markup;
    // const map = new google.maps.Map(document.getElementById('map'));
    // const locations = eventArr.map(event => `${event.latitude},${event.title},${event.longitude}`);
    // console.log(locations);
    // New MAP
    // const center = JSON.parse(localStorage.getItem('center'));
    // console.log(`center retrieved in autocomplete ${center}`);
    const locations = [];
    for (let i = 0; i < eventArr.length; i++) {
      const location = [
        eventArr[i].title,
        parseFloat(eventArr[i].latitude),
        parseFloat(eventArr[i].longitude)
      ];
      locations.push(location);
    }

    // const locations = [
    //   ['Los Angeles', 34.052235, -118.243683],
    //   ['Santa Monica', 34.024212, -118.496475],
    //   ['Redondo Beach', 33.849182, -118.388405],
    //   ['Newport Beach', 33.628342, -117.927933],
    //   ['Long Beach', 33.77005, -118.193739]
    // ];
    return locations;
  })
  .then(locations => {
    console.log(locations);
    const infowindow = new google.maps.InfoWindow({});
    let marker;
    let count;
    for (count = 0; count < locations.length; count++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][1], locations[count][2]),
        map,
        title: locations[count][0]
      });
      google.maps.event.addListener(
        marker,
        'click',
        (function(marker, count) {
          return function() {
            infowindow.setContent(locations[count][0]);
            infowindow.open(map, marker);
          };
        })(marker, count)
      );
    }
  })
  .catch(err => console.error(err));
