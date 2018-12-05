console.log('mainjs has loaded');
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

console.log('connected to eventful.js');
const corsApiUrl = 'https://cors-anywhere.herokuapp.com/';
const eventfulAPI = 'https://api.eventful.com/json/events/search';
const apiKey = 'GwkZSkkp4pntM7gp';

const data = localStorage.getItem('travelInfo');
const travelData = JSON.parse(data);
console.log(`City from our local storage ${travelData.city}`);

//   // get events from API
const eventfulUrl = `${corsApiUrl}${eventfulAPI}?app_key=${apiKey}&keywords=${
  travelData.interest
}&category=${travelData.category ? travelData.category : 'music'}&location=${
  travelData.city
}&date=${travelData.date}to${travelData.endDate}`;

console.log(eventfulUrl);

const eventResponse = fetch(eventfulUrl);
eventResponse
  .then(res => res.json())
  .then(res => {
    console.log(res.events);
    const responseArray = Array.from(res.events.event, event => ({
      title: event.title,
      description: event.description,
      lat: event.latitude,
      lng: event.longitude
    }));
    console.table(responseArray);
    const markup = `
    ${responseArray
      .map(
        event => `
          <li>${event.title}</li>
        `
      )
      .join('')}
    `;
    const resultDiv = document.getElementById('results-list');
    resultDiv.innerHTML = markup;
    const infowindow = new google.maps.InfoWindow({});
    let marker;
    let count;
    for (count = 0; count < responseArray.length; count++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(responseArray[count][2], responseArray[count][3]),
        map,
        title: responseArray[count][0]
      });
      google.maps.event.addListener(
        marker,
        'click',
        (marker, count) =>
          function() {
            infowindow.setContent(responseArray[count][0]);
            infowindow.open(map, marker);
          }
      )(marker, count);
    }
  })
  .catch(err => console.error(err));
