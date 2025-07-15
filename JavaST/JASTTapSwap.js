let $ = document
let tapSwapCoinCenter = $.querySelector(".TS")
let coin = $.querySelector("#coin")
let charge = $.querySelector("#charge")
let chargeTime = $.querySelector(".chargeTime")
let coinplus = $.querySelector(".coinplus")

window.onload = function () {
  coin.innerHTML = localStorage.getItem("charge", coin.innerHTML) || 0
  const chargeLocal = localStorage.getItem("battery", charge.innerHTML) || 250
  charge.innerHTML = chargeLocal
  chargeTime.style.width = (chargeLocal * 4 / 10) + "%"
}

tapSwapCoinCenter.addEventListener("mousedown", function (event) {
  tapSwapCoinCenter.style.transform = "skewX(5deg)"
})


tapSwapCoinCenter.addEventListener("mouseup", function () {
  tapSwapCoinCenter.style.transform = "skewX(0deg)"
  if (charge.innerHTML > 0) {
    coin.innerHTML++
    charge.innerHTML--
    localStorage.setItem("charge", coin.innerHTML)
    localStorage.setItem("battery", charge.innerHTML)
    coinplus.style.display = "block"
    coinplus.style.top = Math.floor(event.pageY - 40) + "px"
    coinplus.style.left = Math.floor(event.pageX / 70) + "rem"
    coinplus.style.right = Math.floor(event.pageX / 70) + "rem"
    coinplus.style.animation = "coinplusHidden 0.5s ease-in-out 0.05s"
    setTimeout(function () {
      coinplus.style.cssText = "animation: none; display: none; opacity: 0;"
    }, 500)
  } else { }

})
setInterval(function () {
  if (charge.innerHTML < 250) {
    const chargeNow = charge.innerHTML++
    localStorage.setItem("battery", chargeNow)
    chargeTime.style.width = (chargeNow * 4 / 10) + "%"
  }
}, 3330)