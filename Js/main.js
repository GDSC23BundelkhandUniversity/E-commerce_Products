const header= document.querySelector('header');
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>50)
});

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".new4").appendChild(copy);
   