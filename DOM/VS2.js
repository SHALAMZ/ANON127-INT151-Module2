const divElement = document.getElementById('app')
console.log(divElement)
const divElementChild = divElement.children
console.log(divElementChild)
const divChildNodes = divElement.childNodes
console.log(divChildNodes)
Array.from(divElementChild).forEach((element)=>console.log(element,element.textContent))
divChildNodes.forEach((element)=>console.log(element,element.textContent))

const appSelector = document.querySelector('#app')
console.log(appSelector)