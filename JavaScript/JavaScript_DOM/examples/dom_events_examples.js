/* const mySpan = document.querySelector("#span")


document.addEventListener('keyup', function(event) {
    console.log("what did I press?", event.code)
})
 */

/* const mySpan = document.querySelector("#span")


document.addEventListener('click', function() {
    console.log("You clicked once")
})

document.addEventListener('click', function() {
    console.log("You doubled clicked the span")
})

console.log(mySpan)
 */

/* const mySpan = document.querySelector("span")

mySpan.style.backgroundColor = "red"

mySpan.addEventListener("click", function(event) {
    console.log("You clicked span", mySpan)
    event.stopPropagation()
}, true) */

/* function deleteElement(element) {
    element.parentNode.removeChild(element)
}

const liArray = document.querySelector("li")

liArray.array.forEach(element => {
    liArray.addEventListener("click", deleteElement)
}); */



//// Exercise to-do list

const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')

let tasks = []

function renderTasks() {
    todoList.innerHTML = ''
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li')
        listItem.className = 'todo- item'
        listItem.textContent = task

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', () => {
            deleteTask(index)
        })

        listItem.appendChild(deleteButton)
        todoList.appendChild(listItem)
    })
}

function addTask(task) {
    tasks.push(task)
    renderTasks()
}

function deleteTask(index) {
    tasks.splice(index, 1)
    renderTasks()
}

form.addEventListener('submit', (eventt) => {
    eventt.preventDefault()
    const task = input.value.trim()
    if (task !== '') {
        addTask(task)
        input.value = ''
    }
})