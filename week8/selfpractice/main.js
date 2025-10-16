//alert
//confirm
//prompt
// const whom = prompt("what is your name?","typing your name")
// const confirmYourName = confirm(`You are ${whom}`)
// confirmYourName ? alert(`hello,${whom}`) :alert (`hello guest`)

const okButton = document.querySelector('div>button')
console.log(okButton)
//1.annonymous function
// okButton.addEventListener("click",()=>{
//     alert("Button was clicked")
// })
//2.named function
function getTarget(event){
    alert( `${event.target.nodeName} was fired!`)
}
function getMessage(){
    prompt(`what is your message , tpying your message....`)
}
//3. add more than one handle functions
okButton.addEventListener('click',getTarget)
okButton.addEventListener('click',getMessage)

//4.remove 
okButton.removeEventListener('click',getTarget)