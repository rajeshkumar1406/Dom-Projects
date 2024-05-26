
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
