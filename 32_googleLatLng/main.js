const latInput = document.querySelector('#latInput');
const lngInput = document.querySelector('#lngInput');
function initialize() {
  const address = document.querySelector('#address');
  const dropdown = new google.maps.places.Autocomplete(address);

  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });
  // if someone hits enter on the address field, don't submit the form
  input.on('keydown', e => {
    if (e.keyCode === 13) e.preventDefault();
  });
}
window.onload.initialize();
