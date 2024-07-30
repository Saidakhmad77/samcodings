const specialText = document.getElementById("special-item")  /// Single object
const getDivs = document.getElementsByTagName("div")  //// HTML collection
const getButton = document.getElementsByName("click-me") //Node list
const firstIntro = document.querySelector(".intro") /// single object
const allHighlight = document.querySelectorAll(".highlight")  /// Nodelist --> Static collector
const allP = document.getElementsByTagName("p")   ////HTML collection

console.log(specialText)
console.log(getDivs)
console.log(getButton)
console.log(firstIntro)
console.log(allHighlight)



const myLink = document.querySelector("#myGoogleLink")
myLink.href = "https://www.wcoding.com"
myLink.innerHTML = "<strong>Lets go to wcoding</strong>"
console.log(allHighlight[0].classList)
console.log(allHighlight[0].className)
console.log(allP[1])

allHighlight[0].className = "intro"
allHighlight[0].classList.add("highlight")
console.log(allHighlight[0].classList)
console.log(allHighlight[0].className)

getDivs[1].classList.add("container ")

/* let href = myLink.getAttribute("href")

console.log(href)

href = "https://www.wcoding.com"
myLink.setAttribute("href", href) */