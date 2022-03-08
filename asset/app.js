let name = prompt("Quale è il tuo nome?" , "Matteo");
let surname = prompt("Quale è il tuo cognome?" , "Nuvoloni");
let color = prompt("Quale è il tuo colore preferito?" , "Verde");

const psw = `${name}${surname}${color}21`; 
// const psw = name + surname + color + "21";

console.log(psw)

document.getElementById('password').innerHTML= `<h2> La tua super segretissima password è ${psw}</h2>`