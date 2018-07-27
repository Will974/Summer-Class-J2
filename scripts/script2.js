let action = document.querySelector(".action")
let time = document.querySelector('.time')
let article = document.querySelector(".t_shirt_1")
let number = 10

action.addEventListener(
  'click',
  function() {
    setInterval(decollage, 1000);
  }, false);

  function decollage() {
    if(number > 0) {
      time.innerHTML = (number -= 1)
    } else {
      time.innerHTML = 0
      article.style.transform = "translateX(1010px) translateY(-410px) scale(0.08) rotate(360deg)"
      article.style.transition = "all 0.4s"
    }
  }
