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
const panels = document.querySelectorAll(".panel");
//panel.clientHeight [384,216,250, 448]
// panel.offsettop [80, 480, 712,978]
// when top windowhight>top of the element AND the element height
// --active
// when the panel is half off the page
// --inactive

function checkSlide(e) {
  // console.log(window.scrollY) //starts at 0 and goes up
  // loop over all the images and decide when it needs to be shown
  panels.forEach(panel => {
    console.log(panel.dataset.color);
    if (
      panel.offsetTop <= window.scrollY &&
      panel.offsetTop + panel.clientHeight > window.scrollY
    ) {
     document.body.removeAttribute("style")

      document.body.setAttribute(
        "style",
        "background-color:" + panel.dataset.color + ";"
      );
    }
    console.log(panel.dataset.color);
    console.log(panel.clientHeight);
    console.log(panel.offsetTop);
    // use window.scrollY to find where you are on a page
    // window.innerHeight will tell you the window position
    //add them to gether to get the bottom position
    //   // get the image height and come in half way slideImage.height/2
    //   const slideInAt=(window.scrollY+window.innerHeight)-panel.clientHeight/2
    //   // console.log(slideInAt);
    // //   // get some calculations on where the image is
    //   const imageBottom=(panel.offsetTop + panel.clientHeight);
    //   const isHalfShown=slideInAt > panel.offsetTop;
    //   const isNotScrolledPast= window.scrollY < imageBottom/2;
    //   if(isHalfShown && isNotScrolledPast){
    //     panel.classList.add('active')
    //   }else{
    //     panel.classList.remove('active')
    //   }
  });
}
window.addEventListener("scroll", debounce(checkSlide));
