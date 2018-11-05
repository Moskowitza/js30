const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
console.log(checkboxes);
// add this check listener to each one
checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

let lastChecked;
let inBetween = false;
function handleCheck(e) {
  // check if shift key is down and checking
  if (e.shiftKey && this.checked) {
    // loop over each checkBox and see if it's inBetween
    checkboxes.forEach(checkbox => {
      console.log(checkbox.checked);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log(`Checking In Between the two checks ${this.parentNode.innerHTML}`)
      }
      if(inBetween){
          checkbox.checked=true
      }
    });
  }
  lastChecked = this;
}
