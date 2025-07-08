let $ = document
let tapSwapCoinCenter = $.querySelector(".TS")
let coin = $.querySelector("#coin")
let charge = $.querySelector("#charge")
let chargeTime = $.querySelector(".chargeTime")
let coinplus = $.querySelector(".coinplus")

window.onload = function() {
 coin.innerHTML = localStorage.getItem("charge" , coin.innerHTML)
}

tapSwapCoinCenter.addEventListener("mousedown", function(event){
 tapSwapCoinCenter.style.transform = "skewX(5deg)"
})


tapSwapCoinCenter.addEventListener("mouseup", function(){
 tapSwapCoinCenter.style.transform = "skewX(0deg)"
 if (charge.innerHTML > 0){
  coin.innerHTML++
  charge.innerHTML--
  localStorage.setItem("charge", coin.innerHTML)
  coinplus.style.display = "block"
  coinplus.style.top = Math.floor(event.pageY - 40) + "px"
  coinplus.style.left = Math.floor(event.pageX / 70) + "rem"
  coinplus.style.right = Math.floor(event.pageX / 70) + "rem"
  coinplus.style.animation = "coinplusHidden 0.5s ease-in-out 0.05s"
  setTimeout(function(){
   coinplus.style.cssText = "animation: none; display: none; opacity: 0;"
  }, 500)
 } else {}
 
})
setInterval(function(){
  if (charge.innerHTML < 250){
   charge.innerHTML++
   chargeTime.style.width = (charge.innerHTML * 4 / 10) + "%"
  }
 }, 3330)