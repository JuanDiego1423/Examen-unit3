/*Para almacenar los nombres y edades*/

var nombres = [];
var edades = [];

/*Ingresar los nombres y edades*/

for (var i=0; i < 3; i++) {
    nombres.push(prompt("Ingresa el nombre " + (i + 1) + ":"));
    edades.push(parseInt(prompt("Ingresa la edad " + (i + 1) + ":")));
}

/*Enncontrar a la persona mayor*/

var mayorNombre = nombres[edades.indexOf(Math.max(...edades))];

/*Mostrar el resultado*/

console.log("La persona de mayor edad es : " + mayorNombre);

/*mostrar el resultado en la pagina*/ 
document.body.innerHTML = "<h2>La persona de mayor edad es: " + mayorNombre + "</h2>";