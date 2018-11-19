const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;
function shadow(e) {
  //   console.log(e);
  //   const width = hero.offsetWidth;
  //   const height = hero.offsetHeight;
  const { offsetHeight: height, offsetWidth: width } = hero;
  //   Use 'let' because we reassign the values when cursor enters child element
  let { offsetX: x, offsetY: y } = e;
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  console.log(x, y);
  const xWalk = (x / width) * walk - walk / 2;
  const yWalk = (y / height) * walk - walk / 2;
  console.log(xWalk, yWalk);
  text.style.textShadow = `${xWalk}px ${yWalk}px rgba(255,0,255,0.7)`;
}

hero.addEventListener("mousemove", shadow);
