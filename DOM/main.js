 const rootNode = window.document
console.log(rootNode)
// const htmlElement =document.documentElement
// console.log(htmlElement)
const divElement = document.getElementById('exampleElement')
console.log(divElement)
const divChild = divElement.childNodes
console.log(divChild)
console.log("divChild length",divChild.length)
// divChild.forEach((child) => {
//  console.log(child.nodeName)
//  console.log(child.nodeType)
//  console.log(child.nodeValue)
//  })

// let div = document.createElement("div");
// div.textContent = "Hello, this is my new div!";
// document.body.appendChild(div)

const element = document.getElementById('exampleElement')
console.log(element.nodeType)
console.log(element.attributes[0].ownerElement)

const el = document.getElementById("demo")
console.log(el.textContent)

const parent = document.getElementById("parent")
console.log(parent.firstChild)        // <p>First</p>
console.log(parent.lastChild)         // <p>Second</p>
console.log(parent.firstChild.nextSibling) // <p>Second</p>
console.log(parent.lastChild.previousSibling) // <p>First</p>
console.log(parent.firstChild.parentNode) // <div id="parent">
console.log(parent.childElementCount)
console.log(parent.firstElementChild)
console.log(parent.lastElementChild)
