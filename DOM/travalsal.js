const soupMenu = document.querySelector('#soup')
console.log(soupMenu)
const soupMenuAll = document.querySelectorAll('#soup')
console.log("SoupMenuAll",soupMenuAll)

const firstIngredains = soupMenu.firstElementChild
console.log(firstIngredains.ATTRIBUTE_NODE)
console.log(firstIngredains.nextElementSibling)
const lastIngredains = soupMenu.lastElementChild
console.log(lastIngredains)
console.log(lastIngredains.previousElementSibling)

const AllmeatMenu = document.querySelectorAll(".meat")
console.log(AllmeatMenu)
AllmeatMenu.forEach((AllmeatMenu)=> console.log(AllmeatMenu.textContent))

const appetrizerMenu = document.querySelector("#appetizer")
console.log(appetrizerMenu.textContent)
// const appetrizerMenuAll = document.querySelectorAll('#appetizer')
// console.log(appetrizerMenuAll)
// appetrizerMenuAll.forEach((appetrizerMenuAll)=> console.log(appetrizerMenuAll))
// appetrizerMenu.forEach((appetrizerMenu) =>console.log(ppetrizerMenu))
let currentAppetizer = appetrizerMenu.firstElementChild
console.log(currentAppetizer)
console.log(currentAppetizer.textContent)

while (currentAppetizer !== null){
    console.log(currentAppetizer)
    currentAppetizer = currentAppetizer.nextElementSibling
}

