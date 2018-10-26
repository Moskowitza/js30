console.log("script loaded")
window.addEventListener('keydown',function(e){
    // Don't forget we need quotes around the attribute value
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(audio)
    console.log(key)
    if(!audio) return; //if there is nothing to play, stop function
    audio.currentTime=0;//this resets the audio time, see comment below
    audio.play(); //play will not play same element if still playing file
    key.addClass('playing'); //we'll add a new class for CSS to animate 
})
const keys= document.querySelectorAll('.key');
// loop over each key we're listenign to
function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    console.log(e)
}

keys.forEach(key=>key.addEventListener('transitionend',removeTransition));