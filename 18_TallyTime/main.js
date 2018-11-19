const times = document.querySelectorAll("[data-time]");
console.log(times);
const timeNodes = Array.from(times);
console.log(timeNodes);
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeNode => {
    const [mins, sec] = timeNode.split(":").map(parseFloat);
    // console.log(`timeNode ${timeNode}`);
    // console.log(`mins ${mins}`);
    // console.log(`sec ${sec}`);
    // console.log(mins * 60 + sec);
    return mins * 60 + sec;
  })
  .reduce((total, seconds) => total + seconds);
let secondsLeft = seconds;
console.log(`secondsLeft ${secondsLeft}`);
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
console.log(`hours ${hours}`);
console.log(`secondsLeft ${secondsLeft}`);
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(`minutes ${minutes}`);
console.log(`secondsLeft ${secondsLeft}`);

console.log(`Total Time hr:${hours} min:${minutes} sec:${secondsLeft}`);
