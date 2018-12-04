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
    ${responseArray.map(
      event => `
        <div class="event">
          <h2>${event.title}</h2>
          <p>${event.descripiton}</p>
        </div>`
    )}
    `;
    const resultDiv = document.getElementById('results');
    resultDiv.innerHTML = markup;
  })
  .catch(err => console.error(err));
