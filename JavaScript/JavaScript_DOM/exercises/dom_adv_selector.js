  //// Exercise 1

/* const divEx1 = document.createElement("div")
divEx1.id = "divEx1"
document.body.appendChild(divEx1)

divEx1.appendChild(document.createTextNode("The "))

const firstStrong = document.createElement("strong")
firstStrong.textContent = "World Wide Web Consortium"
divEx1.appendChild(firstStrong)

divEx1.appendChild(document.createTextNode(", abbreviated as acronym"))

const secondStrong = document.createElement("strong")
secondStrong.textContent = "W3C"
divEx1.appendChild(secondStrong)

divEx1.appendChild(document.createTextNode(", is an "))

const firstLink = document.createElement("a")
firstLink.href = "https://en.wikipedia.org/wiki/Standards_organization"
firstLink.title = "standards organization"
firstLink.textContent = "standards organization"
divEx1.appendChild(firstLink)

divEx1.appendChild(document.createTextNode("non-profit organization responsible for promoting the compatibility of the "))

const secondLink = document.createElement("a")
secondLink.href = "https://en.wikipedia.org/wiki/World_Wide_Web_Consortium "
secondLink.title = "World Wide Web"
secondLink.textContent = "World Wide Web"
divEx1.appendChild(secondLink)



console.log(divEx1.childNodes) */

  //// Exercise 2 + 3
/* const listArray = []
listArray.push(ecmaLanguage("JavaScript", "JavaScript is a scripting language mainly used in interactive web pages but also server-side. "))
listArray.push(ecmaLanguage("Node", "Node is a low level backend server based on the javascript language "))
listArray.push(ecmaLanguage("Vue", "Vue.js is a framework for JavaScript used to build web interfaces and one-page applications "))
listArray.push(ecmaLanguage("ReactJS", "ReactJS is a declarative, efficient, and flexible JavaScript library for building user interfaces "))

function ecmaLanguage(name, describtion)
{
    const newLanguage = {}
    newLanguage.name = name
    newLanguage.describtion = describtion
    return newLanguage
}

const divEx2 = document.createElement("div")
divEx2.id = "divEx2"
document.body.appendChild(divEx2)

const myP = document.createElement("p")
myP.textContent = "Languages based on ECMAScript :"
divEx2.appendChild(myP)

const unOrdered = document.createElement("dl")

for(let obj of listArray)
{
    tempDT = unOrdered.appendChild(document.createElement("dt"))
    tempDD = unOrdered.appendChild(document.createElement("dd"))
    tempDT.textContent = obj.name
    tempDD.textContent = obj.describtion
}

divEx2.appendChild(unOrdered) */

/// Exercise 4
const divEx3 = document.createElement("div")
divEx3.id = "divEx3"
document.body.appendChild(divEx3)

const form = document.createElement("form")
form.enctype = "multipart/form-data"
form.method = 'post'
form.action = 'upload.php'

const fieldset = document.createElement("fieldset")

const legend = document.createElement("legend")
legend.textContent = 'Upload an image'

const centerDiv = document.createElement("div")
centerDiv.style.textAlign = 'center'


console.log(divEx3 )
















/// Exercise 9

/* const outputElement = document.getElementById('output');

while (outputElement.firstChild()) {
  outputElement.removeChild(outputElement.firstChild())
} */