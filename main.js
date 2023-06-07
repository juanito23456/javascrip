
//var edad = 35;
//var edad = 36;

//let nombreUsuario = "juan ignacio";
//nombreUsuario = "maria";

//console.log ("la edad del usuario/a es : " + edad);
//console.log ("el nombre de usuario/a es : " + nombreUsuario);
 
//const EMAIL = "hola@chau.com";
//const IVA = 21;
//console.log("IVA : " + IVA);
//console.log("el email del usuario es : " + EMAIL);

//let nombreIngresado = prompt("ingrese su nombre : ");
//alert("el nombre ingresado fue : " + nombreIngresado);

//operaciones basicas: + - * /

//let numero1 = 10;
//let numero2 = 20;
//const NUMEROC = 15; 
//+ es concatenar texto o string con variable
//suma 

//let resultadoSuma = numero1 + numero2;
//console.log("el resultado de la suma es :" + resultadoSuma);

//let resultadoResta = numero1 - NUMEROC;
//console.log("el resultado de la resta es:" + resultadoResta);

//let resultadoMulti = numero1 * numero2;
//console.log("el resultado de la multi es:" + resultadoMulti);

//let resultadoDiv = numero1 / numero2;
//console.log("el resultado de la div es:" + resultadoDiv);

//cadena de carateres

//let textoA = "Coder";
//let textoB = "House";

//const BLANCO = " ";

//let resultado = textoA + BLANCO + textoB;
//alert(resultado);

//console.log ( typeof textoA)

//le pedimos datos al usuario, suma en enteros

//let numero3 = parseInt (prompt("ingrese un numero:"));
//let numero4 = parseInt (prompt("ingrese otro numero:"));
//let resultadoOperacion = numero3 + numero4; 
//alert("el resultado de la operacion es :" + resultadoOperacion);
//console.log ("resultado operacion:"+ resultadoOperacion);

//parseo con number, decimales


//let numero5 = Number (prompt("ingrese un numero:"));
//let numero6 = Number (prompt("ingrese otro numero:"));
//let resultadoOperacion2 = numero5 + numero6; 
//alert("el resultado de la operacion 2 es :" + resultadoOperacion2);
//console.log ("resultado operacion 2:"+ resultadoOperacion2);

//parseFloat, redondea enteros

//let numero7 = parseFloat (prompt("ingrese un numero:"));
//let numero8 = parseFloat (prompt("ingrese otro numero:"));
//let resultadoOperacion3 = numero7 + numero8; 
//alert("el resultado de la operacion 3 es :" + resultadoOperacion3);
//console.log ("resultado operacion 3:"+ resultadoOperacion3);

//estructuras de control
// true or false

//if(true){
  //  console.log("vas a ver este mensaje");
//}
//si fuera false no se mostraria el mensaje
// if evalua la condicion dentro del parentesis y ejecuta o no

//operacion de equivalencia

//let unNumero = 5;

//if(unNumero == 4){
  //  console.log("el numero es igual a 5");
//} else{ console.log("el numero es distinto de 5");}

//el sino o el camino del falso se muestra con el else 

//let nombreUsuario = prompt("ingrese su usuario: ");

//if (nombreUsuario == ""){
  //  alert("no ingresaste nombre de usuario");
//} else{ alert("el nombre de usuario es : " + nombreUsuario)};

//IF anidados

//let precioProducto = Number (prompt("ingrese el precio del producto:"));

//if (precioProducto < 20){
  //  console.log("el precio del producto es menor a 20 pesos ");
//} else if (precioProducto < 50){
  //  console.log("el precio ingresado es menor a 50 pesos");
//} else if (precioProducto <100){
  //  console.log("el precio ingresado es menor a 100");
//} else {
  //  console.log("el precio ingresado es mayor a 100 pesos");
//}

//variables booleanas

//let edad = Number (prompt("ingrese su edad"));
//const ESMAYOR = (edad >= 18);

//if (ESMAYOR){
//    alert("BIENVENID@ AL SITIO");
//} else {alert("debes ser mayor de edad para ingresar")}


//let numero = Number (prompt("ingrese un numero:"));
//const MAYOR = (numero > 1000);

//if (MAYOR){alert("Bien Hecho")};

//let text = prompt("I45ngrese una palabra:");
//if (text == "hola"){console.log("bien hecho")}


//operadores logicos



// carrito


let precio1 = parseFloat(prompt("Ingresa el precio 1:"));
let precio2 = parseFloat(prompt("Ingresa el precio 2:"));
let precio3 = parseFloat(prompt("Ingresa el precio 3:"));



let suma = precio1 + precio2 + precio3;

alert("La suma de los precios es: " + suma);
 

//cuotas


let precioTotal = parseFloat(prompt("Ingresa el precio total:"));
let numCuotas = parseInt(prompt("Ingresa el número de cuotas:"));

let precioCuota = precioTotal / numCuotas;

alert("El precio por cuota es: " + precioCuota.toFixed(2));



//iva y 10%


let precio = parseFloat(prompt("Ingresa el precio del producto:"));

let impuesto = precio * 0.22;
let descuento = precio * 0.1;

let precioFinal = precio + impuesto - descuento;

alert("El precio final con impuestos y descuentos incluidos es: " + precioFinal.toFixed(2));

//turno


let numTurnos = parseInt(prompt("Ingresa el número de su turno:"));

if (numTurnos > 7) {
  alert("Lo siento, no se pueden atender más turnos.");
} else {
  let tiempoEspera = numTurnos ;

  alert("El tiempo de espera estimado es de " + tiempoEspera + " horas desde las 8am.");
}

// edades

let numPersonas = parseInt(prompt("Ingresa el número de personas registradas:"));
let sumaEdades = 0;

for (let i = 1; i <= numPersonas; i++) {
  let edad = parseInt(prompt("Ingresa la edad de la persona " + i + ":"));
  sumaEdades += edad;
}

let edadPromedio = sumaEdades / numPersonas;

alert("La edad promedio de las personas registradas es: " + edadPromedio.toFixed(2));



//alumno 

let numMaterias = 5;
let sumaCalificaciones = 0;

for (let i = 1; i <= numMaterias; i++) {
  let calificacion = parseInt(prompt("Ingresa la calificación de la materia " + i + " (del 1 al 12):"));
  sumaCalificaciones += calificacion;
}

let promedioCalificaciones = sumaCalificaciones / numMaterias;
let notaFinal = (promedioCalificaciones * 10) / 12;

alert("La nota final del alumno es: " + notaFinal.toFixed(2));

var elemento = document.getElementById('miElemento');

elemento.innerHTML = 'Nuevo contenido'; // Cambiar el contenido del elemento
elemento.style.color = 'red'; // Cambiar el color de fuente del elemento
elemento.appendChild(nuevoElemento); // Agregar un nuevo elemento como hijo

elemento.addEventListener('click', miFuncion); // Agregar un evento de clic al elemento

var elemento = document.getElementById('miElemento');

function miFuncion() {
  // Código a ejecutar cuando ocurra el evento
}

elemento.addEventListener('click', miFuncion);

function miFuncion() {
  console.log('El evento ha ocurrido');
  // Otras acciones a realizar
}

elemento.addEventListener('click', function() {
  // Código a ejecutar cuando ocurra el evento
});
