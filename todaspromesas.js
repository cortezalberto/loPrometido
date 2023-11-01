const promesa1 = Promise.resolve("Promesa 1 completada");

const promesa2 = new Promise((resolve, reject) => {
  console.log("Estoy haciendo lo de la promesa 2")
  setTimeout(() => {
    resolve("Promesa 2 completada");
  }, 7000);
});

const promesa3 = Promise.resolve("Promesa 3 completada");

const promesa4 = new Promise((resolve, reject) => {
  console.log("Estoy haciendo lo de la promesa 4")
  setTimeout(() => {
    resolve("Promesa 4 completada");
  }, 2000);
});

Promise.all([promesa1, promesa2, promesa3,promesa4])
  .then((resultados) => {
    console.log("Todas las promesas se han completado:", resultados);
  })
  .catch((error) => {
    console.error("Al menos una promesa fue rechazada:", error);
  });


  /*
  Las primeras dos promesas, promesa1 y promesa2, se crean inmediatamente con la función Promise.resolve. Esto significa que estas promesas se resuelven inmediatamente con los valores proporcionados como argumentos y no involucran ninguna operación asincrónica. En otras palabras, se completan de inmediato y se resuelven con los valores proporcionados. Aquí está el código relevante:

javascript

const promesa1 = Promise.resolve("Promesa 1 completada");
const promesa2 = Promise.resolve("Promesa 2 completada");

En este caso, ambas promesas (promesa1 y promesa2) 
se crean y se resuelven de inmediato con los valores de cadena proporcionados, 
"Promesa 1 completada" y "Promesa 2 completada", respectivamente. Estos valores se convierten en el resultado de las promesas.

*/