function promisificarTareaAsincronica(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Paso ${ms / 1000} completado`);
        resolve();
      }, ms);
    });
  }
  
  async function ejecutarTareasAsincronicas() {
    try {
      await promisificarTareaAsincronica(2000);
      await promisificarTareaAsincronica(1000);
      await promisificarTareaAsincronica(1500);
      await promisificarTareaAsincronica(500);

      console.log("Todas las tareas se han completado.");
    } catch (error) {
      console.error("Ocurrió un error: ", error);
    }
  }
  
  ejecutarTareasAsincronicas();
  