const slider=document.querySelector(".items")
let isDown=false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown',(e)=>{
    isDown=true;
    slider.classList.add('active')
    console.log(e.pageX)
    startX= e.pageX-slider.offsetLeft;
    scrollLeft=slider.scrollLeft;
})
slider.addEventListener('mouseleave',()=>{
    isDown=false;
    slider.classList.remove('active')

})
slider.addEventListener('mouseup',()=>{
    slider.classList.remove('active')
    isDown=false;
})
slider.addEventListener('mousemove',(e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x= e.pageX-slider.offsetLeft;
    console.log({x,startX});
    const walk=(x-startX)* 3 ;//we can use a multiplier
    console.log(walk)
    slider.scrollLeft=scrollLeft-walk;
})