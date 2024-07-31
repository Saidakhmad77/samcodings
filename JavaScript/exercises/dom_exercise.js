const myDiv = document.getElementById("myDiv")

myDiv.innerHTML = `<p class="main-text"> Hello, World </p`
myDiv.innerHTML += `<img id="moon" src="./image/moon.jpg"></img>`

const myImg = document.querySelector("#moon")

myImg.src = "./image/sun.jpg"
myImg.classList.add("image")
myDiv.className = "container"

const myP = document.querySelector(".main-text")
myP.style.backgroundColor = 'black'
myP.style.color = "white"
 