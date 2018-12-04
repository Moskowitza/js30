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

let map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

// api key xmnsRKbacpmsh6ZB83cvLNMQc4LTp1Znb3fjsngAa5M9Bt400S
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
        <div class="event">
          <p>${event.title}</p>
          <p>${event.descripiton}</p>
        </div>`
      )
      .join('')}
    `;
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = markup;
  })
  .catch(err => console.error(err));
