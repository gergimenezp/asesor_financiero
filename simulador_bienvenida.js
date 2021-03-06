//LIMPIEZA DEL STORAGE PARA VOLVER A SIMULAR DESDE CERO
localStorage.clear();

//INTERACCION

$('#datosPersonales').submit((e) =>{
  e.preventDefault()

  const nombre = $('#nombre').val().trim()
  const apellido = $('#apellido').val().trim()
  const email = $('#email').val().trim()

  if (nombre !== "" && apellido !== "" && email.includes("@") && email.includes(".")) {
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("email", email);

    $('#bienvenida').html(`
        <div id="welcome" class="mensaje">
        <h2 class="tituloSecundario">
            ¡Hola ${nombre}!
        </h2>
        <p>
            Ya estamos listos para empezar tu análisis financiero. Cuando estés listo, presioná continuar
        </p>
        <a href="./ingresos.html">
            <button class="btn btn-light mt-3 mb-3">
                CONTINUAR >> 
            </button>
        </a>
        </div>    
    `)
  } else {
    $('#alertaMail').removeClass("noMostrar");
  }
})