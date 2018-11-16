const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp=false;
let score=0;
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
//   console.log(randomTime(0,2000))

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (hole === lastHole) {
    console.log("same hole, run again");
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}
console.log(randomHole(holes));

function peep(){
    const time=randomTime(200,1000);
    const hole=randomHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up')
        if(!timeUp)peep();
    },time)
}
function startGame(){
    score=0;
    scoreBoard.textContent=0;
    timeUp=false;
    peep();
    setTimeout(()=>timeUp=true,5000)
}
function bonk(e){
    if(!e.isTrusted)return;//someone is cheating in the console
    console.log(e)
    score++;
    this.classList.remove('up');
    scoreBoard.textContent=score;
}
moles.forEach(mole=>mole.addEventListener('click',bonk))

