let action = document.querySelector(".action")
let time = document.querySelector('.time')
let article = document.querySelector(".article")
let number = 1

action.addEventListener(
  'click',
  function() {
    setInterval(decollage, 1000);
  }, false);

  function decollage() {
    if(number > 1) {
      time.innerHTML = (number -= 1)
    } else {
      time.innerHTML = 0
      article.style.transform = "translateX(1000px) translateY(-410px) scale(0.08) rotate(360deg)"
      article.style.transition = "all 0.6s"
    }
  }
