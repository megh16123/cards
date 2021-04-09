const card = document.querySelector(".container");
const container = document.querySelector(".pop");

container.addEventListener("mousemove",(e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX)/30;
    let yAxis = (window.innerHeight/2 - e.pageY)/30;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})