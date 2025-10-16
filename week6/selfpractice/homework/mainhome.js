const drinks = document.querySelectorAll('#drink li');
console.log(drinks);  // NodeList of all <li> elements
const tea = drinks[1];  // second item: <li>Tea</li>
const previous = tea.previousElementSibling;
console.log(previous);  // <li>coffee</li>
const next = tea.nextElementSibling;
console.log(next);  // <li>Chocolate</li>
const parent = tea.parentElement;
console.log(parent);  // <ul id="drink">...</ul>


