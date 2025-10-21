const newElement =document.createElement("p")
newElement.textContent = "Hello I am NEW CONTENT"
document.body.appendChild(newElement)
const element = document.getElementsByTagName('p')
console.log(element.length)
const div = document.createElement("div")
div.textContent = "This is a new div"
document.body.appendChild(div)
// alert("Welcome to the website!")
// const confirmDelete = confirm("Are you sure you want to delete this?")
// console.log(confirmDelete)
// const name = prompt("Enter your name:")
const newElement2 = document.createElement("h1")
newElement2.textContent="HI IM VERY NEW"
const oldElememt = document.querySelector("p")
oldElememt.insertBefore(newElement2,oldElememt.firstChild)
