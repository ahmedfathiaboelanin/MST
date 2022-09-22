// mode
let modeBtn = document.querySelector(".mode");
let logo = document.querySelector(".img");
let service = document.querySelector(".service");
modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");
});
// bullets
let bullets = document.querySelectorAll(".bullets .bullet");
let section = document.querySelectorAll(".sec");
for(let i =0; i<bullets.length; i++){
    bullets[i].addEventListener("click", ()=>{
        for(let j =0; j<bullets.length; j++){
            bullets[j].classList.remove("active")
        }
        for(let k =0; k<section.length; k++){
            section[k].setAttribute("style","display:none")
        }
        section[i].setAttribute("style","display:flex");
        bullets[i].classList.add("active")
    })
}
// section buttons
let homeBtn = document.getElementById("homeBtn");
let trans =document.querySelector(".transformation");
let transBtn = document.getElementById("transBtn");
let contact = document.querySelector(".contact");
let about = document.querySelector(".about");
let aboutBtn = document.getElementById("aboutBtn");
let serviceBtn = document.querySelectorAll(".service button")

homeBtn.onclick = ()=>{
  for(let j =0; j<bullets.length; j++){
    bullets[j].classList.remove("active")
  }
  bullets[1].classList.add("active");
  for(let k =0; k<section.length; k++){
    section[k].setAttribute("style","display:none")
  }
about.setAttribute("style","display:flex")
}
aboutBtn.onclick = ()=>{
  for(let j =0; j<bullets.length; j++){
    bullets[j].classList.remove("active")
  }
  bullets[2].classList.add("active");
  for(let k =0; k<section.length; k++){
    section[k].setAttribute("style","display:none")
  }
trans.setAttribute("style","display:flex")
}
transBtn.onclick = ()=>{
  for(let j =0; j<bullets.length; j++){
    bullets[j].classList.remove("active")
  }
  bullets[3].classList.add("active");
  for(let k =0; k<section.length; k++){
    section[k].setAttribute("style","display:none")
  }
service.setAttribute("style","display:flex")
}
