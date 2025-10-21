const sectionDdiv = document.getElementById('sections')
console.log(sectionDdiv)
const sectionDivFirst = sectionDdiv.firstElementChild
console.log(sectionDivFirst.textContent)
console.log(sectionDivFirst.nextElementSibling.textContent)
const sectionClass = document.getElementsByClassName('section')
console.log(sectionClass)
const sectionSelectorAll = document.querySelectorAll('.section')
console.log(sectionSelectorAll)

const div = document.createElement('div')
div.className = 'section'
div.textContent ='section 5'
sectionDdiv.appendChild(div)
console.log(sectionClass.length)
console.log(sectionSelectorAll.length)