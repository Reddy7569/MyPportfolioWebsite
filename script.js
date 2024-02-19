const menuEl = document.getElementById("menu");
const closeEl = document.getElementById("closed");
const navEl = document.getElementById("nav")

menuEl.addEventListener('click',function(){
    navEl.classList.add('selected')
})
closeEl.addEventListener('click',function(){
    navEl.classList.remove('selected')
})

