const secondHand=document.querySelector('.second-hand');
const minuteHand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const seconds= now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) +90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //remove transition when seconds=0, do it for all hands
    if(seconds===0){
        secondHand.style.transition='none';
        minuteHand.style.transition='none';
        hourHand.style.transition='none';
    }else{
        secondHand.style.transition = '';
        minuteHand.style.transition = '';
        hourHand.style.transition = '';
    }
    

    // Minutes
    const minutes= now.getMinutes();
    const minuteDegrees = ((minutes/60)*360) +90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    // Hour 
    const hour= now.getHours();
    const hourDegrees = ((hour/12)*360) +90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

} 

setInterval(setDate,1000);
setDate();