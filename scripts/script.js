let bulle = document.querySelector(".bulle")
let tchat = document.querySelector(".tchat")
let isActive = 0

bulle.addEventListener(
  "click",
  ()=>{
    if (isActive == 0){
      tchat.style.display = "block"
      isActive = 1
    } else {
      tchat.style.display = "none"
      isActive = 0
    }
  }
)
