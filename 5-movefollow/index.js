var main= document.querySelector("#main");

var crsr = document.querySelector('.cursor');

main.addEventListener('mousemove', function(event){
    crsr.style.left= event.x + "px"
    crsr.style.top= event.y + "px"
})