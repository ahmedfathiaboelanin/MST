// mode
let modeBtn = document.querySelector(".mode");
let logo = document.querySelector(".img");
let service = document.querySelector(".service");
modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("light");
//   if (
//     logo.src ===
//     "https://scontent.fcai19-1.fna.fbcdn.net/v/t39.30808-6/306126326_377142601296627_8194503176422583832_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Bs7BjYssHNgAX9cCuFy&tn=H7Whx7GS6P2wm3g7&_nc_ht=scontent.fcai19-1.fna&oh=00_AT86_TVb6S3TUmaCyWx9PKGwFIAjWO9cyL8bvdgNVupZvw&oe=6325E1C7"
//   ) {
//     logo.src = "imgs/logo2.jpg";
//   } else {
//     logo.src =
//       "https://scontent.fcai19-1.fna.fbcdn.net/v/t39.30808-6/306126326_377142601296627_8194503176422583832_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Bs7BjYssHNgAX9cCuFy&tn=H7Whx7GS6P2wm3g7&_nc_ht=scontent.fcai19-1.fna&oh=00_AT86_TVb6S3TUmaCyWx9PKGwFIAjWO9cyL8bvdgNVupZvw&oe=6325E1C7";
//   }
  // if(service.style.backgroundImage === "url('../imgs/logo2.jpg')"){
  //   service.style.backgroundImage = "url('https://scontent.fcai19-1.fna.fbcdn.net/v/t39.30808-6/306126326_377142601296627_8194503176422583832_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Bs7BjYssHNgAX9cCuFy&tn=H7Whx7GS6P2wm3g7&_nc_ht=scontent.fcai19-1.fna&oh=00_AT86_TVb6S3TUmaCyWx9PKGwFIAjWO9cyL8bvdgNVupZvw&oe=6325E1C7')";
  // }
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
