const okButton = document.querySelector("button")

okButton.addEventListener("click", (e) => {
  console.log(`event.target: ${e.target}`)
  console.log(`event.currentTarget: ${e.currentTarget}`)
  console.log(`event.eventPhase: ${e.eventPhase}`)
  console.log(`event.type: ${e.type}`)
  console.log("Button was clicked!")
})
const divElement = document.querySelector("div")
divElement.addEventListener("click", (event) => {
  console.log(`event.target: ${event.target}`)
  console.log(`event.currentTarget: ${event.currentTarget}`)
  console.log(`event.eventPhase: ${event.eventPhase}`)
  console.log(`event.type: ${event.type}`)
  console.log("Div element was clicked!")
})

const bodyElement = document.body
bodyElement.addEventListener("click", (event) => {
  console.log(`event.target: ${event.target}`)
  console.log(`event.currentTarget: ${event.currentTarget}`)
  console.log(`event.eventPhase: ${event.eventPhase}`)
  console.log(`event.type: ${event.type}`)
  console.log("Body element was clicked!")
})