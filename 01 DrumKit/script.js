console.log("script loaded");
function playSound(e) {
  // Don't forget we need quotes around the attribute value
  let code;
  e.keyCode ? code = e.keyCode : code=this.dataset.key;
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  const key = document.querySelector(`.key[data-key="${code}"]`);
  console.log(audio);
  console.log(key);
  if (!audio) return; //if there is nothing to play, stop function
  audio.currentTime = 0; //this resets the audio time, see comment below
  audio.play(); //play will not play same element if still playing file
  key.classList.add("playing"); //we'll add a new class for CSS to animate
}
const keys = document.querySelectorAll(".key");
// loop over each key we're listenign to and remove the transform
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //we are only interested in the transform property
  // console.log(e);//transitionEvent
  this.classList.remove("playing");
}

keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
    key.classList.add("hi")
    key.addEventListener("click", playSound);
});
window.addEventListener("keydown", playSound);
// document.querySelectorAll('div.key').forEach((key)=>{
//     key.addEventListener('click',playSound);
// })