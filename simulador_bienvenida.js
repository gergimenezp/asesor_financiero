//VARIABLES
const contenedorBienvenida = document.getElementById("bienvenida");
const formDatosPersonales = document.getElementById("datosPersonales");
const inputNombre = document.getElementById("nombre");
const inputApellido = document.getElementById("apellido");
const inputEmail = document.getElementById("email");
const alertaMail = document.getElementById("alertaMail");

//LIMPIEZA DEL STORAGE PARA VOLVER A SIMULAR DESDE CERO
localStorage.clear();

//INTERACCION

formDatosPersonales.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = inputNombre.value;
  const apellido = inputApellido.value;
  const email = inputEmail.value;

  if (
    nombre !== "" &&
    apellido !== "" &&
    email.includes("@") &&
    email.includes(".")
  ) {
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("email", email);

    formDatosPersonales.reset();

    alertaMail.classList.add("noMostrar");

    let aviso = document.createElement("div");
    aviso.innerHTML = `
        <p>
            ¡Hola ${nombre}!
        </p>
        <p>
            Ya estamos listos para empezar tu análisis financiero. Cuando estés listo, presioná continuar
        </p>
        <a href="./ingresos.html">
            <button class="btn btn-light mt-3 mb-3">
                CONTINUAR >> 
            </button>
        </a>    
        `;
    contenedorBienvenida.appendChild(aviso);
    aviso.classList.add("mensaje");

  } else {
    alertaMail.classList.remove("noMostrar");
  }
});
