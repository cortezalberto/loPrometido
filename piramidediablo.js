function tareaAsincronica1(callback) {
    setTimeout(() => {
      console.log("Paso 1 completado");
      callback();
    }, 2000);
  }
  
  function tareaAsincronica2(callback) {
    setTimeout(() => {
      console.log("Paso 2 completado");
      callback();
    }, 1000);
  }
  
  function tareaAsincronica3(callback) {
    setTimeout(() => {
      console.log("Paso 3 completado");
      callback();
    }, 1500);
  }
  
  tareaAsincronica1(function () {
    tareaAsincronica2(function () {
      tareaAsincronica3(function () {
        console.log("Todas las tareas se han completado.");
      });
    });
  });
  