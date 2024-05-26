var arr = [
    {
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj6IHDYQ4-8mkUzTgS3W9AJNoKuJP_y7rw7Q&usqp=CAU", story:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
    },

    {
        dp:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg", story:"https://us.123rf.com/450wm/photochicken/photochicken2008/photochicken200800065/153425631-pritty-jeune-photographe-asiatique-fille-adolescente-voyage-avec-appareil-photo-prendre-une-photo-de.jpg?ver=6"
    },
    {
        dp:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg", story:"https://us.123rf.com/450wm/photochicken/photochicken2008/photochicken200800065/153425631-pritty-jeune-photographe-asiatique-fille-adolescente-voyage-avec-appareil-photo-prendre-une-photo-de.jpg?ver=6"
    },
    {
        dp:"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg", story:"https://us.123rf.com/450wm/photochicken/photochicken2008/photochicken200800065/153425631-pritty-jeune-photographe-asiatique-fille-adolescente-voyage-avec-appareil-photo-prendre-une-photo-de.jpg?ver=6"
    },
]


var clutter=""

arr.forEach(function(elem,index){
    clutter += `<div class="story">
    <img id="${index}" src="${elem.dp}" alt="">
    </div>`
})

document.querySelector("#storiyan").innerHTML = clutter

document.querySelector("#storiyan").addEventListener("click", function(dets){
    document.querySelector("#full-screen").style.display="block"
    document.querySelector("#full-screen").style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none"
    },3000)
})