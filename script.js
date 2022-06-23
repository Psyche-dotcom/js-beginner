const nameSpace = document.getElementById("name");
const heightSpace = document.getElementById("height");
const countrySpace = document.getElementById("country");

let nameInput = prompt("Please enter your Name: ").toUpperCase();
let heightInput = prompt("Please enter your Height: ");
let countryInput = prompt("Please enter your Country: ").toUpperCase();

nameSpace.innerHTML = `<span>${nameInput}</span>`;
heightSpace.innerHTML = `<span>${heightInput}</span>`;
countrySpace.innerHTML = `<span>${countryInput}</span>`;

console.log(`My name is ${nameInput}`);
console.log(`My height is ${heightInput}`);
console.log(`My country is ${countryInput}`);

alert(
  `My name is ${nameInput} \n My height is ${heightInput} \n My country is ${countryInput}`
);
