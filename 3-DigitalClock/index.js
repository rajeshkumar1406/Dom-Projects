const clock=document.getElementById('clock'); 

//for console use
// let date = new Date();
// console.log(date.toLocaleTimeString());
// ab koi interview m puchhe tb cron job nhi bolna h 

//isme apn method ka use krege setInterval isse vo ek interval baad run hota rhega 


// interview m isko likhte time diyan rakhna h isme do paratmeter hote h 
setInterval(function(){
    let date = new Date();
    //console.log(date.toLocaleTimeString()); apn ko consol m nhi chalna apn ko window pr chahiye 
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)  