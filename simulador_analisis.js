//SELECTORES DOM
const analisis = document.getElementById("analisis");

//FUNCIONES
const porcentaje = (pTotal, pPorcion) => pTotal * (pPorcion / 100);

const restar = (a, b) => a - b;

const convertirNumeroPositivo = (pValor) => pValor * -1;

const limpiar = () => localStorage.clear();

function gastoRubro(gastoReal, gastoOptimo) {
  let diferencia = restar(gastoReal, gastoOptimo);
  return diferencia;
}

function gastoIdealRubro(ingresos, rubro) {
  switch (rubro) {
    case "vivienda":
      return porcentaje(ingresos, 35);
    case "ATyS":
      return porcentaje(ingresos, 40);
    case "ocio":
      return porcentaje(ingresos, 15);
    case "ahorro":
      return porcentaje(ingresos, 10);
  }
}

function balanceCuentas(pIngresos, pGastos) {
  let diferencia = pIngresos - pGastos;
  let btnBalanceCuentas = document.getElementById("btnBalanceCuentas");

  if (pIngresos < pGastos) {
    let cDatos = document.createElement("div");
    cDatos.innerHTML = `
        <p>Tus gastos son mayores a tus ingresos, <span>esta situación no es sostenible en el tiempo</span>. Necesitás reducir tus gastos en $${
          diferencia.toFixed() * -1
        } o buscar incrementar tus ingresos en ese monto. </br>A continuación intentaremos ver dónde está el desequilibrio.</p>
        <p>En función de unos ingresos mensuales totales de $${ingresoMensual.toFixed()}, tus gastos óptimos serían:
        <ul>
        <li>$${gastoViviendaIdeal.toFixed()} en vivienda;
        <li>$${gastoAlimentacionTransporteyServcioIdeal.toFixed()} en alimentación, transporte y servicios;
        <li>$${gastoOcioIdeal.toFixed()} para ocio y diversión.
        </ul>
        Eso te dejaría un margen de <strong>ahorro</strong> mensual de $${gastoAhorroIdeal.toFixed()}</p>
        <h5 class="subtitulo">A continuación intentaremos ver que tan oportunos son tus gastos en función de tus ingresos.</h5>
        <button id="btnBalanceCuentas" class="btn btn-light mt-3 mb-3">
            CONTINUAR >> 
        </button>
        `;
    analisis.appendChild(cDatos);
    cDatos.classList.add("mensaje");
    cDatos.classList.add("sangria");
  } else if (pIngresos > pGastos) {
    let cDatos = document.createElement("div");
    cDatos.innerHTML = `
        <p>Tus cuentas <span>están balanceadas</span> ya que tus gastos son menores a tus ingresos. Todos los meses tienes a tu favor un resto de $${diferencia.toFixed()} que bien puedes destinar a ahorro o a mejorar la calidad de algunos de tus gastos.</p>
        <p>En función de unos ingresos mensuales totales de $${ingresoMensual.toFixed()}, tus gastos óptimos serían:
        <ul>
        <li>$${gastoViviendaIdeal.toFixed()} en vivienda;
        <li>$${gastoAlimentacionTransporteyServcioIdeal.toFixed()} en alimentación, transporte y servicios;
        <li>$${gastoOcioIdeal.toFixed()} para ocio y diversión.
        </ul>
        Eso te dejaría un margen de <span>ahorro</span> mensual de $${gastoAhorroIdeal.toFixed()}</p>
        <h5 class="subtitulo">A continuación intentaremos ver que tan oportunos son tus gastos en función de tus ingresos.</h5>
        <button id="btnBalanceCuentas" class="btn btn-light mt-3 mb-3">
            CONTINUAR >> 
        </button>
        `;
    analisis.appendChild(cDatos);
    cDatos.classList.add("mensaje");
    cDatos.classList.add("sangria");
  } else {
    let cDatos = document.createElement("div");
    cDatos.innerHTML = `
        <p>Tus gastos y tus ingresos son equivalentes. Esto puede generar la <span>ilusión de un presupuesto balanceado</span>, pero un presupuesto sano debería tener algún margen de ahorro para imprevistos. </br>A continuación intentaremos ver dónde está el desequilibrio.</p>
        <p>En función de unos ingresos mensuales totales de $${ingresoMensual.toFixed()}, tus gastos óptimos serían:
        <ul>
        <li>$${gastoViviendaIdeal.toFixed()} en vivienda;
        <li>$${gastoAlimentacionTransporteyServcioIdeal.toFixed()} en alimentación, transporte y servicios;
        <li>$${gastoOcioIdeal.toFixed()} para ocio y diversión.
        </ul>
        Eso te dejaría un margen de <span>ahorro</span> mensual de $${gastoAhorroIdeal.toFixed()}</p>
        <h5 class="subtitulo">A continuación intentaremos ver que tan oportunos son tus gastos en función de tus ingresos.</h5>
        <button id="btnBalanceCuentas" class="btn btn-light mt-3 mb-3">
            CONTINUAR >> 
        </button>
        `;
    analisis.appendChild(cDatos);
    cDatos.classList.add("mensaje");
    cDatos.classList.add("sangria");
  }
}

function analisisGastosReales(
  pTipoGasto,
  pAnalisis,
  pGastoReal,
  pGastoBajo,
  pPorcentaje
) {
  if (pAnalisis < 0) {
    let cDatos = document.createElement("div");
    cDatos.innerHTML = `
      <img src="./img/ok.png" alt="ok">
      <p class="mensaje">
        El monto total de tus gastos en ${pTipoGasto} es de $${pGastoReal.toFixed()}. Lo que te deja un excedente de $${pGastoBajo.toFixed()} para algo de ahorro extra o para aumentar tus gastos en otra categoría.
      </p>
      `;
    analisis.appendChild(cDatos);
    cDatos.classList.add("analisisTipoGasto");
  } else if (pAnalisis > 0) {
    let cDatos = document.createElement("div");
    cDatos.innerHTML = `
      <img src="./img/caution.png" alt="cuidado">
      <p class="mensaje">El monto total de tus gastos en ${pTipoGasto} es de $${gastoRealenATyS.toFixed()}. El mismo está un poco fuera de tu presupuesto. Deberías reducir este conjunto de gastos en $${analisisATyS.toFixed()} o buscar aumentar tus ingresos en ese mismo monto a fin de equilibrar tu presupuesto.
      </p>
      `;
    analisis.appendChild(cDatos);
    cDatos.classList.add("analisisTipoGasto");
  } else {
    let cDatos = document.createElement("div");
    cDatos.innerHTML = `
      <img src="./img/ok.png" alt="ok">
      <p class="mensaje">El monto total de tus gastos en ${pTipoGasto} es de $${gastoRealenATyS.toFixed()}. El mismo está perfectamente equilibrado ya que coincide exactamente con el ${pPorcentaje} de los ingresos que declaraste.
      </p>
      `;
    analisis.appendChild(cDatos);
    cDatos.classList.add("analisisTipoGasto");
  }
}

//DATOS ALMACENADOS EN LS
const ingresosEnLS = localStorage.getItem("ingresos");
const gastosEnLS = localStorage.getItem("gastos");
const nombre = localStorage.getItem("nombre");

//ARRAYS
const ingresos = JSON.parse(ingresosEnLS);
const gastos = JSON.parse(gastosEnLS);

const gastosVivienda = gastos.filter((gto) => gto.tipo == "vivienda");
const gastosAlimentacionTransporteyServicios = gastos.filter(
  (gto) => gto.tipo == "ATyS"
);
const gastosOcio = gastos.filter((gto) => gto.tipo == "ocio");

//VARIABLES DE ANALISIS DE DATOS
let ingresoMensual = ingresos.reduce(
  (suma, dato) => suma + dato.montoMensualizado,
  0
);

let gastoRealenVivienda = gastosVivienda.reduce(
  (suma, gto) => suma + gto.montoMensualizado,
  0
);
let gastoRealenATyS = gastosAlimentacionTransporteyServicios.reduce(
  (suma, gto) => suma + gto.montoMensualizado,
  0
);
let gastoRealenOcio = gastosOcio.reduce(
  (suma, gto) => suma + gto.montoMensualizado,
  0
);

let gastoMensual = gastos.reduce(
  (suma, gto) => suma + gto.montoMensualizado,
  0
);

var gastoViviendaIdeal = gastoIdealRubro(ingresoMensual, "vivienda");
var gastoAlimentacionTransporteyServcioIdeal = gastoIdealRubro(
  ingresoMensual,
  "ATyS"
);
var gastoOcioIdeal = gastoIdealRubro(ingresoMensual, "ocio");
var gastoAhorroIdeal = gastoIdealRubro(ingresoMensual, "ahorro");
var analisisVivienda = gastoRubro(gastoRealenVivienda, gastoViviendaIdeal);
var gastoBajoVivienda = convertirNumeroPositivo(analisisVivienda);
var analisisATyS = gastoRubro(
  gastoRealenATyS,
  gastoAlimentacionTransporteyServcioIdeal
);
var gastoBajoATyS = convertirNumeroPositivo(analisisATyS);
var analisisOcio = gastoRubro(gastoRealenOcio, gastoOcioIdeal);
var gastoBajoOcio = convertirNumeroPositivo(analisisOcio);

//RETORNO AL USUARIO
balanceCuentas(ingresoMensual, gastoMensual);

btnBalanceCuentas.addEventListener("click", () => {
  analisisGastosReales(
    "vivienda",
    analisisVivienda,
    gastoRealenVivienda,
    gastoBajoVivienda,
    "35%"
  );

  analisisGastosReales(
    "alimentación, transporte y servicios",
    analisisATyS,
    gastoRealenATyS,
    gastoBajoATyS,
    "40%"
  );

  analisisGastosReales(
    "ocio",
    analisisOcio,
    gastoRealenOcio,
    gastoBajoOcio,
    "15%"
  );

  let btnFinalizar = document.createElement("a");
  btnFinalizar.innerHTML = `
    <button class="btn btn-danger mt-3 mb-3">
    REINICIAR SIMULADOR 
    </button> 
    `;
  analisis.appendChild(btnFinalizar);
  btnFinalizar.classList.add("btnFinalizar");
  btnFinalizar.setAttribute("href", "./index.html");

  btnBalanceCuentas.remove();
});
