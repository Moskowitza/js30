// debounce puts a speedlimit on our event listener
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  // loop over all the images and decide when it needs to be shown
  sliderImages.forEach(sliderImage=>{
    // use window.scrollY to find where you are on a page
    // window.innerHeight will tell you the window position
    //add them to gether to get the bottom position
    // get the image height and come in half way slideImage.height/2
    const slideInAt=(window.scrollY+window.innerHeight)-sliderImage.height/2
    console.log(slideInAt);
    // get some calculations on where the image is
    const imageBottom=(sliderImage.offsetTop + sliderImage.height);
    const isHalfShown=slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast= window.scrollY < imageBottom;
    if(isHalfShown && isNotScrolledPast){
      sliderImage.classList.add('active')
    }else{
      sliderImage.classList.remove('active')
    }
  })
  console.log(e);
};
window.addEventListener("scroll", debounce(checkSlide));