let propulsion = document.querySelector(".lancement")
let interrogation = document.querySelector(".dot")
let countdown = document.querySelector('.comptearebours')
let rocket = document.querySelector(".fusee")
let number = 10
let bonus = document.querySelector(".bonus")
let isActive = 0
let choix1 = document.querySelector(".choix1")
let choix2 = document.querySelector(".choix2")

propulsion.addEventListener(
  'click',
  ()=>{
  setInterval(decollage, 1000);
}, false);

function decollage(){
  if(number > 0){
    countdown.innerHTML = (number -=1)
  } else {
    rocket.style.transform = "translateY(-15000px)"
    rocket.style.transition ="all 15s"
    interrogation.style.transform = "translateY(-15000px)"
    interrogation.style.transition ="all 15s"
  }
}

interrogation.addEventListener(
  "click",
  ()=>{
    if (isActive == 0){
      bonus.style.display = "block"
      isActive = 1
    } else {
      bonus.style.display = "none"
      isActive = 0
    }
  }
)

choix1.addEventListener(
  'click',
  ()=>{
    rocket.setAttribute("src","images/rocket.png")
  }
)

choix2.addEventListener(
  'click',
  ()=>{
    rocket.setAttribute("src","images/satellite.png")
  }
)



let bigImg = document.querySelector('.primarySlide img')
let title = document.querySelector('.primarySlide h2')
let thumbnail = document.querySelector('.slides img')

for (let i = 0; i < thumbnail.length; i++) {
  thumbnail[i].addEventListener(
    'click',
    function() {
      let altTxt = this.getAttribute('alt')
      let srcBigImg = this.getAttribute('data-srcbigImg')
      bigImg.setAttribute('alt', altTxt)
      bigImg.setAttribute('src', srcBigImg)
      title.innerHTML = altTxt
    }
  )
}

let news = document.querySelector(".okk")
let ok = document.querySelector('.news')
news.addEventListener(
  'click',
  function() {
    ok.style.display = "block"
  }
)
