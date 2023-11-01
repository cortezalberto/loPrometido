const miPromesa = new Promise((resolve, reject) => {
    // Realiza algún trabajo asincrónico
    setTimeout(() => {
      const exito = true; // Cambia esto para simular un éxito o un error
      if (exito) {
        resolve("¡Éxito!"); // Resuelve la promesa si todo va bien
      } else {
        reject("Hubo un error."); // Rechaza la promesa en caso de error
      }
    }, 2000);
  });
  
  miPromesa
    .then((resultado) => {
      console.log("Promesa resuelta con éxito:", resultado);
    })
    .catch((error) => {
      console.error("Promesa rechazada:", error);
    });