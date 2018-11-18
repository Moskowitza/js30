const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
// Fetch is an in broweser ajax! it returns a promise. WOW!
fetch(endpoint)
  .then(res => res.json())
  .then(data => cities.push(...data)); //spread data into the cities array

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
function cityFilter(input, cities) {
  return cities.filter(place => {
    const regex = new RegExp(input, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  //  console.log(this.value)
  const matchArr = cityFilter(this.value, cities);
  console.log(matchArr);
  const html = matchArr.map(place => {
      const regex= new RegExp(this.value,'gi')
      const cityName=place.city.replace(regex,`<span class="hl">${this.value}</span>`);
      const stateName=place.state.replace(regex,`<span class="hl">${this.value}</span>`);

      return `
    <li>
        <span class='name'>${cityName}, ${stateName}</span>
        <span class='population'>Pop: ${numberWithCommas(place.population)}</span>
    </li>
    `;
  }).join("");//remove the comma from array
  suggestions.innerHTML=html;
}
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
