//CLASES
class Gasto {
  constructor(nombre, tipo, montoIngresado, frecuencia) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.monto = montoIngresado;
    this.frecuencia = frecuencia;
    this.montoMensualizado = montoIngresado / frecuencia;
  }
}

//ARRAY
const gastos = [];

//FUNCIONES
function crearGasto(
  nombreDelGasto,
  tipoDeGasto,
  montoDelGasto,
  frecuenciaDelGasto
) {
  let nombre = nombreDelGasto;
  let tipo = tipoDeGasto;
  let montoIngresado = montoDelGasto;
  let frecuencia = frecuenciaDelGasto;

  return new Gasto(nombre, tipo, montoIngresado, frecuencia);
}

//DATOS
const nombre = localStorage.getItem("nombre");
const alertaGastos = document.getElementById("alertaGastos")
const contenedorSaludoGastos = document.getElementById("saludoGastos");
const contenedorGastos = document.getElementById("gastos");
const listaGastos = document.getElementById("listaGastos");
const formularioGastos = document.getElementById("formGastos");
const inputNombreGasto = document.getElementById("nombreGasto");
const inputMontoGasto = document.getElementById("montoGasto");
const selectFrecuenciaGasto = document.getElementById("frecuenciaGasto");
const selectTipoGasto = document.getElementById("tipoGasto");
const botonCargarGastos = document.getElementById("botonCargarGastos");
const msjGastos1 = document.getElementById("msjGastos1");
const msjGastos2 = document.getElementById("msjGastos2");

//INTERACCIÓN
let saludo = document.createElement("p");
saludo.innerHTML = `Ahora necesito que cargues tus gastos. Al igual que con tus ingresos, es importante que seas tan exhaustivo y preciso como sea posible en la carga de los datos. Recuerda que si los gastos no son fijos, es importante que hagas un promedio de ese valor de los últimos periodos para que el análisis sea más completo.
</br>También es importante que asignes correctamente los gastos a las categorías de "tipo de gasto".
</br> <span>Vamos ${nombre}, carguemos los gastos:</span>`;
contenedorSaludoGastos.appendChild(saludo);
saludo.classList.add("mensaje");

formularioGastos.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreDelGasto = inputNombreGasto.value;
  const tipoDeGasto = selectTipoGasto.value;
  const montoDelGasto = Number(inputMontoGasto.value);
  const frecuenciaDelGasto = Number(selectFrecuenciaGasto.value);

  if (nombreDelGasto !== "" && montoDelGasto !== isNaN()) {
    gastos.push(
      crearGasto(nombreDelGasto, tipoDeGasto, montoDelGasto, frecuenciaDelGasto)
    );

    formularioGastos.reset();
    alertaGastos.classList.add("noMostrar");

    let cDatos = document.createElement("li");
    cDatos.innerHTML = `<strong>${
      gastos[gastos.length - 1].nombre
    }:</strong> $${gastos[gastos.length - 1].monto} `;
    listaGastos.appendChild(cDatos);
    cDatos.classList.add("mensaje");
    cDatos.classList.add("sangria");
  } else {
    alertaGastos.classList.remove("noMostrar");
  }
});

botonCargarGastos.addEventListener("click", () => {
  localStorage.setItem("gastos", JSON.stringify(gastos));

  contenedorGastos.remove();
  msjGastos1.remove();

  let totalGastos = gastos.reduce(
    (suma, gto) => suma + gto.montoMensualizado,
    0
  );

  let mostrarTotalGastos = document.createElement("div");
  mostrarTotalGastos.innerHTML = `
    <p>Perfecto ${nombre}, el total de los gastos que has informado en una base mensual es de $${totalGastos.toFixed(
    2
  )}.</p>
    <p>Con esto ya tenemos todos los datos necesarios, presiona "continuar" cuando estés listo para que procedamos a realizar el análisis de tu situación financiera.</p>
    <a href="./analisis.html">
            <button class="btn btn-light mt-3 mb-3">
                CONTINUAR >> 
            </button>
        </a>  
  `;
  msjGastos2.appendChild(mostrarTotalGastos);
  mostrarTotalGastos.classList.add("mensaje");
  mostrarTotalGastos.classList.add("mensaje-centrado");
});
