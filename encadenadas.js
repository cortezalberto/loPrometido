function tareaAsincronica() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Hago todo lo que tengo que hacer acá")
        resolve("Paso 1 completado");
      }, 2000);
    });
  }
  
  tareaAsincronica()
    .then((resultado) => {
      console.log(resultado);
      return "Paso 2 completado";
    })
    .then((resultadoFinal) => {
      console.log("Final " + resultadoFinal);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
    /*
El código  demuestra cómo funcionan las promesas en JavaScript y 
cómo puedes encadenar múltiples pasos asincrónicos de manera secuencial. 
A continuación, te explicaré paso a paso cómo funciona:

    La función tareaAsincronica() retorna una promesa. Dentro de esta promesa, 
    hay un temporizador (setTimeout) que simula una operación asincrónica que toma
     2 segundos en completarse.

    Luego, se llama a tareaAsincronica().

    Cuando la promesa generada por tareaAsincronica() se resuelve después de 2 segundos, se ejecuta el primer .then(). 
    El resultado de la promesa resuelta se pasa como argumento a la
     función de flecha (resultado) => { ... }.

    En el primer .then(), se muestra en la consola el mensaje "Paso 1 completado"
     utilizando console.log(resultado);. 
     Luego, el .then() retorna la cadena "Paso 2 completado".

    Después de que el primer .then() se ha completado, el segundo .then() 
    se ejecuta automáticamente. En este caso, el valor que se pasó ("Paso 2 completado") se muestra en la consola.

    Como ambas etapas se completaron con éxito, no se ejecuta el catch(),
     y no se muestra ningún mensaje de error en la consola.

En resumen, este código simula una secuencia de dos pasos asincrónicos (representados por las dos resoluciones de promesa) y utiliza .then() para encadenarlos de manera que el segundo paso se ejecute después de que el primero se haya completado con éxito. Esto demuestra cómo puedes realizar operaciones asincrónicas en secuencia utilizando promesas
 en JavaScript, lo que hace que el código sea más legible y mantenible.
    */