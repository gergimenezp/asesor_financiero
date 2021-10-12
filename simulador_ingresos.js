//CLASES
class Ingreso {
  constructor(nombre, montoIngresado, frecuencia) {
    this.nombre = nombre;
    this.montoIngresado = montoIngresado;
    this.frecuencia = frecuencia;
    this.montoMensualizado = montoIngresado / frecuencia;
  }
}

//ARRAY
const ingresos = [];

//FUNCIONES
function crearIngreso(nombreDelIngreso, montoDelIngreso, frecuenciaDelIngreso) {
  let nombre = nombreDelIngreso;
  let monto = montoDelIngreso;
  let frecuencia = frecuenciaDelIngreso;

  return new Ingreso(nombre, monto, frecuencia);
}

//DATOS
const nombre = localStorage.getItem("nombre");
const alertaIngresos = document.getElementById("alertaIngresos");
const contenedorIngresos = document.getElementById("ingresos");
const contenedorSaludoInicial = document.getElementById("saludoInicial");
const listaIngresos = document.getElementById("listaIngresos");
const formularioIngresos = document.getElementById("formIngresos");
const inputNombreIngreso = document.getElementById("nombreIngreso");
const inputMontoIngreso = document.getElementById("montoIngreso");
const selectFrecuenciaIngreso = document.getElementById("frecuenciaIngreso");
const botonCargarIngresos = document.getElementById("botonCargarIngresos");
const mensajes1 = document.getElementById("mensajes1");
const mensajes2 = document.getElementById("mensajes2");

//INTERACCIÓN
let saludo = document.createElement("p");
saludo.innerHTML = `${nombre}, para poder realizar un análisis de tus finanzas te solicitaré datos vinculados a tus ingresos y tus gastos. Es importante que seas tan exhaustivo y preciso como sea posible en la carga de los datos. Si esos ingresos o gastos no son fijos, te pido que hagas un promedio de ese valor de los últimos periodos para que el análisis sea más completo.
</br> <span>Empecemos por cargar tus ingresos:</span>`;
contenedorSaludoInicial.appendChild(saludo);
saludo.classList.add("mensaje");

formularioIngresos.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreDelIngreso = inputNombreIngreso.value;
  const montoDelIngreso = Number(inputMontoIngreso.value);
  const frecuenciaDelIngreso = Number(selectFrecuenciaIngreso.value);

  if (nombreDelIngreso !== "" && montoDelIngreso !== isNaN()) {
    ingresos.push(
      crearIngreso(nombreDelIngreso, montoDelIngreso, frecuenciaDelIngreso)
    );

    formularioIngresos.reset();
    alertaIngresos.classList.add("noMostrar");

    let cDatos = document.createElement("li");
    cDatos.innerHTML = `<strong>${
      ingresos[ingresos.length - 1].nombre
    }:</strong> $${ingresos[ingresos.length - 1].montoIngresado}`;
    listaIngresos.appendChild(cDatos);
    cDatos.classList.add("mensaje");
    cDatos.classList.add("sangria");
  } else {
    alertaIngresos.classList.remove("noMostrar");
  }
});

botonCargarIngresos.addEventListener("click", () => {
  localStorage.setItem("ingresos", JSON.stringify(ingresos));

  contenedorIngresos.remove();
  mensajes1.remove();

  let totalIngresos = ingresos.reduce(
    (suma, ingr) => suma + ingr.montoMensualizado,
    0
  );

  let mostrarTotalIngresos = document.createElement("div");
  mostrarTotalIngresos.innerHTML = `
    <p>OK ${nombre}, el total de los ingresos que has informado en una base mensual es de $${totalIngresos.toFixed(
    2
  )}.</p>
    <p>Presiona continuar cuando estés listo para cargar tus gastos</p>
    <a href="./gastos.html">
      <button class="btn btn-light mt-3 mb-3">
        CONTINUAR >> 
      </button>
    </a>  
  `;
  mensajes2.appendChild(mostrarTotalIngresos);
  mostrarTotalIngresos.classList.add("mensaje");
  mostrarTotalIngresos.classList.add("mensaje-centrado");
});
