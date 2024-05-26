//for single element

// var elem1=document.querySelector("#elem1")
// var elemImage = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", function(event){
//     elemImage.style.left=event.x+ "px"
//     elemImage.style.top=event.y+ "px"
// })

// elem1.addEventListener("mouseenter", function(event){
//     elemImage.style.opacity=1;
// })


// elem1.addEventListener("mouseleave", function(event){
//     elemImage.style.opacity=0;
// })


// now for all elements
var elem = document.querySelectorAll(".elem");

elem.forEach(function(event){
    event.addEventListener("mouseenter", function(){
        // event.childNodes[3].style.backgroundColor="red"
        event.childNodes[3].style.opacity=1
    })
    event.addEventListener("mouseleave", function(){
        // event.childNodes[3].style.backgroundColor="transparent"
        event.childNodes[3].style.opacity=0
    })
    event.addEventListener("mousemove", function(dets){
        // event.childNodes[3].style.backgroundColor="transparent"
        event.childNodes[3].style.left=dets.x+"px" 
        event.childNodes[3].style.top=dets.y+"px"   
    })

})