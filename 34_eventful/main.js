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
fetch(eventfulUrl)
  .then(res => res.json())
  .then(res => {
    // console.log(res.events[event]);
    res.events.event.map(event => {
      const eventObj = {
        title: event.title,
        description: event.description
      };
      const responseArray = [...eventObj];
      console.log(responseArray);
    });

    // console.log(responseArray);
  })
  .catch(err => console.error(`OH NO!${err}`));
// if (res.events.event) {
// Object.keys(res.events.event).forEach(event => console.log(event.title));
// }

// console.log(events);
// Object.keys(events).forEach(event => {
//   if (event.title) {
//     console.log(event.title);
//   }
// });

//   const requestUrl = corsApiUrl + eventfulUrl;
//   $.ajax({
//     url: requestUrl
//   })
//     .error(error => {
//       // we'll have to do our own error handling
//       response = JSON.parse(error.responseText);
//       if (response.events) {
//         const parsedResults = response.events.event.map(event => ({
//           title: event.title,
//           city: event.city_name,
//           state: event.region_name,
//           description: event.description,
//           venue: event.venue_name,
//           venueAddress: event.venue_address,
//           venueUrl: event.venue_url,
//           lat: event.latitude,
//           lon: event.longitude,
//           startTime: event.start_time
//         }));
//         // add the results to our interes object
//         interest.events = parsedResults;
//         // and add our interest object to our vacation object
//         vacation.dateWindows[dateIndex].interests.push(interest);
//       }
//       if (interests.length !== 0) {
//         appendInterests(vacation, dateIndex, callback);
//       } else {
//         callback();
//       }
//     })
//     .done(data => {});
// }
