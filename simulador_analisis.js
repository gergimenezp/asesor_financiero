//SELECTORES DOM
const analisis = document.getElementById("analisis");

//FUNCIONES

//CALCULA UN PORCENTAJE SOBRE UN TOTAL
const porcentaje = (pTotal, pPorcion) => pTotal * (pPorcion / 100); 

const restar = (a, b) => a - b;

const convertirNumeroPositivo = (pValor) => pValor * -1;

//CALCULA LA DIFERENCIA ENTRE EL GASTO IDEAL Y EL REAL EN UN RUBRO DETERMINADO
function gastoRubro(gastoReal, gastoOptimo) { 
  let diferencia = restar(gastoReal, gastoOptimo);
  return diferencia;
}

//CALCULA LOS GASTOS OPTIMOS EN CADA RUBRO DE ACUERDO A LOS INGRESOS DECLARADOS
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

//DEVUELVE UN MENSAJE ANALIZANDO SI LOS GASTOS SON MAYORES O MENORES QUE LOS INGRESOS
function balanceCuentas(pIngresos, pGastos) {
  let diferencia = pIngresos - pGastos;

  if (pIngresos < pGastos) {
    $('#analisis').append(`
      <div class="mensaje sangria">  
        <p>Tus gastos son mayores a tus ingresos, <span>esta situación no es sostenible en el tiempo</span>. Necesitás reducir tus gastos en $${
          diferencia.toFixed() * -1
        } o buscar incrementar tus ingresos en ese monto. </br>A continuación intentaremos ver dónde está el desequilibrio.</p>
        <p>
          En función de unos ingresos mensuales totales de $${ingresoMensual.toFixed()}, tus gastos óptimos serían:
          <ul>
            <li>$${gastoViviendaIdeal.toFixed()} en vivienda;
            <li>$${gastoAlimentacionTransporteyServcioIdeal.toFixed()} en alimentación, transporte y servicios;
            <li>$${gastoOcioIdeal.toFixed()} para ocio y diversión.
          </ul>
          Eso te dejaría un margen de <strong>ahorro</strong> mensual de $${gastoAhorroIdeal.toFixed()}
        </p>
        <h5 class="subtitulo">
          A continuación intentaremos ver que tan oportunos son tus gastos en función de tus ingresos.
        </h5>
        <button id="btnBalanceCuentas" class="btn btn-light mt-3 mb-3">
          CONTINUAR >> 
        </button>
      </div>
    `)
  } else if (pIngresos > pGastos) {
    $('#analisis').append(`
      <div class="mensaje sangria"> 
        <p>
          Tus cuentas <span>están balanceadas</span> ya que tus gastos son menores a tus ingresos. Todos los meses tienes a tu favor un resto de $${diferencia.toFixed()} que bien puedes destinar a ahorro o a mejorar la calidad de algunos de tus gastos.
        </p>
        <p>
          En función de unos ingresos mensuales totales de $${ingresoMensual.toFixed()}, tus gastos óptimos serían:
          <ul>
            <li>$${gastoViviendaIdeal.toFixed()} en vivienda;
            <li>$${gastoAlimentacionTransporteyServcioIdeal.toFixed()} en alimentación, transporte y servicios;
            <li>$${gastoOcioIdeal.toFixed()} para ocio y diversión.
          </ul>
          Eso te dejaría un margen de <span>ahorro</span> mensual de $${gastoAhorroIdeal.toFixed()}</p>
        <h5 class="subtitulo">
          A continuación intentaremos ver que tan oportunos son tus gastos en función de tus ingresos.
        </h5>
        <button id="btnBalanceCuentas" class="btn btn-light mt-3 mb-3">
          CONTINUAR >> 
        </button>
      </div>
    `)
  } else {
    $('#analisis').append(`
      <div class="mensaje sangria">
        <p>
          Tus gastos y tus ingresos son equivalentes. Esto puede generar la <span>ilusión de un presupuesto balanceado</span>, pero un presupuesto sano debería tener algún margen de ahorro para imprevistos. </br>A continuación intentaremos ver dónde está el desequilibrio.
        </p>
        <p>
          En función de unos ingresos mensuales totales de $${ingresoMensual.toFixed()}, tus gastos óptimos serían:
          <ul>
            <li>$${gastoViviendaIdeal.toFixed()} en vivienda;
            <li>$${gastoAlimentacionTransporteyServcioIdeal.toFixed()} en alimentación, transporte y servicios;
            <li>$${gastoOcioIdeal.toFixed()} para ocio y diversión.
          </ul>
          Eso te dejaría un margen de <span>ahorro</span> mensual de $${gastoAhorroIdeal.toFixed()}
        </p>
        <h5 class="subtitulo">
          A continuación intentaremos ver que tan oportunos son tus gastos en función de tus ingresos.
        </h5>
        <button id="btnBalanceCuentas" class="btn btn-light mt-3 mb-3">
          CONTINUAR >> 
        </button>
      </div>
    `)
  }
}

//DEVUELVE UN MENSAJE DE ACUERDO A SI EL TIPO DE GASTO ESTÁ O NO DENTRO DE PRESUPUESTO
function analisisGastosReales(pTipoGasto, pAnalisis, pGastoReal, pGastoBajo, pPorcentaje) {
  if (pAnalisis < 0) {
    $('#analisis').append(`
      <div class="analisisTipoGasto">  
        <img src="./img/ok.png" alt="ok">
        <p class="mensaje">
          El monto total de tus gastos en ${pTipoGasto} es de $${pGastoReal.toFixed()}. Lo que te deja un excedente de $${pGastoBajo.toFixed()} para algo de ahorro extra o para aumentar tus gastos en otra categoría.
        </p>
      </div>
    `)
  } else if (pAnalisis > 0) {
    $('#analisis').append(`
      <div class="analisisTipoGasto">
        <img src="./img/caution.png" alt="cuidado">
        <p class="mensaje">
          El monto total de tus gastos en ${pTipoGasto} es de $${gastoRealenATyS.toFixed()}. El mismo está un poco fuera de tu presupuesto. Deberías reducir este conjunto de gastos en $${analisisATyS.toFixed()} o buscar aumentar tus ingresos en ese mismo monto a fin de equilibrar tu presupuesto.
        </p>
      </div>
    `)
  } else {
    $('#analisis').append(`
      <div class="analisisTipoGasto">
       <img src="./img/ok.png" alt="ok">
       <p class="mensaje">
        El monto total de tus gastos en ${pTipoGasto} es de $${gastoRealenATyS.toFixed()}. El mismo está perfectamente equilibrado ya que coincide exactamente con el ${pPorcentaje} de los ingresos que declaraste.
       </p>
      </div>
    `)
  }
}

//DATOS ALMACENADOS EN LS
const ingresosEnLS = localStorage.getItem("ingresos");
const gastosEnLS = localStorage.getItem("gastos");
const nombre = localStorage.getItem("nombre");
const grupoFamiliar = Number(localStorage.getItem("grupoFamiliar"));

//ARRAYS
const ingresos = JSON.parse(ingresosEnLS);
const gastos = JSON.parse(gastosEnLS);

const gastosVivienda = gastos.filter((gto) => gto.tipo == "vivienda");
const gastosAlimentacionTransporteyServicios = gastos.filter(
  (gto) => gto.tipo == "ATyS"
);
const gastosOcio = gastos.filter((gto) => gto.tipo == "ocio");

//VARIABLES DE ANALISIS DE DATOS

//CALCULA EL TOTAL DE LOS INGRESOS EN UNA BASE MENSUAL
let ingresoMensual = ingresos.reduce(
  (suma, dato) => suma + dato.montoMensualizado, 0);

//CALCULA EL TOTAL DE LOS GASTOS EN VIVINEDA EN UNA BASE MENSUAL
let gastoRealenVivienda = gastosVivienda.reduce( 
  (suma, gto) => suma + gto.montoMensualizado, 0);

//CALCULA EL TOTAL DE LOS GASTOS EN ATyS EN UNA BASE MENSUAL  
let gastoRealenATyS = gastosAlimentacionTransporteyServicios.reduce(
  (suma, gto) => suma + gto.montoMensualizado, 0);

//CALCULA EL TOTAL DE LOS GASTOS EN OCIO EN UNA BASE MENSUAL
let gastoRealenOcio = gastosOcio.reduce(
  (suma, gto) => suma + gto.montoMensualizado, 0);

//CALCULA EL TOTAL DE LOS GASTOS EN UNA BASE MENSUAL  
let gastoMensual = gastos.reduce( 
  (suma, gto) => suma + gto.montoMensualizado, 0);

var gastoViviendaIdeal = gastoIdealRubro(ingresoMensual, "vivienda");
var gastoAlimentacionTransporteyServcioIdeal = gastoIdealRubro(ingresoMensual, "ATyS");
var gastoOcioIdeal = gastoIdealRubro(ingresoMensual, "ocio");
var gastoAhorroIdeal = gastoIdealRubro(ingresoMensual, "ahorro");
var analisisVivienda = gastoRubro(gastoRealenVivienda, gastoViviendaIdeal);
var gastoBajoVivienda = convertirNumeroPositivo(analisisVivienda);
var analisisATyS = gastoRubro( gastoRealenATyS, gastoAlimentacionTransporteyServcioIdeal);
var gastoBajoATyS = convertirNumeroPositivo(analisisATyS);
var analisisOcio = gastoRubro(gastoRealenOcio, gastoOcioIdeal);
var gastoBajoOcio = convertirNumeroPositivo(analisisOcio);

//ANÁLISIS DE DATOS ESTÁTICOS ASINCRÓNICOS
const decilIngresos = () =>{
  $.get('./decilesIngreso.json', (res)=>{
    //ENCUENTRA A QUE DECIL DE INGRESOS PERTENECE EL SUJETO
    const decilPertenencia = res.find((ingr) => ingr.iMaximo >= (ingresoMensual/grupoFamiliar))
    const decil = decilPertenencia.decil
    const iPromedio = decilPertenencia.iPromedio

    $('#analisis').append(`
      <div class="mensaje sangria">
      <p>
        De acuerdo a los datos estadísticos más recientes del INDEC, por el nivel 
        de ingresos per cápita de tu grupo familiar, perteneces al decil nº ${decil} de la población.</br>
        En promedio, las familias que están en ese decil tienen un ingreso per cápita de $${iPromedio}. 
        Eso significa que hay cerca de un ${100-(decil*10)}% de la población que tiene ingresos similares o superiores a los tuyos. 
        Cuanto más chico es ese porcentaje implica que estadísticamente tienes menos posibiidades de aumentar tus ingresos.
      </p>
      <p>
        En un presupuesto ideal, debería haber un margen mínimo de ahorro del 10% de los ingresos que ayuden 
        a afrontar imprevistos o a planear gastos excepcionales o inversiones infraestructurales. 
        La idea de este asesor financiero es ayudarte a conocer tu matriz de ingresos y gastos alos fines de que 
        puedas empezar a tener un presupuesto consciente y una planificación financiera que te ayude a lograr tus metas.
      </p>
      <div class="text-right">
        <a href="./index.html" class="btnFinalizar">
          <button class="btn btn-danger mt-3 mb-3">
            REINICIAR SIMULADOR 
        </button> 
        </a>
      </div>
    `)

  })
} 

//RETORNO AL USUARIO
balanceCuentas(ingresoMensual, gastoMensual);

$('#btnBalanceCuentas').on("click", () => {
  analisisGastosReales("vivienda", analisisVivienda, gastoRealenVivienda, gastoBajoVivienda, "35%");
  analisisGastosReales("alimentación, transporte y servicios", analisisATyS, gastoRealenATyS, gastoBajoATyS, "40%");
  analisisGastosReales("ocio", analisisOcio, gastoRealenOcio, gastoBajoOcio, "15%");

  $('#analisis').append(`
    <div class="mensaje sangria">
      <h5 class="subtitulo">
        Veamos como se ubica tu nivel de ingresos en la estadística
      </h5>
      <button id="btnEstadisticas" class="btn btn-light mt-3 mb-3">
        CONTINUAR >> 
      </button>
    </div>
  `)
  
  $('#btnBalanceCuentas').remove();

  $('#btnEstadisticas').on('click', () =>{
    decilIngresos()

    $('#btnEstadisticas').remove()
  })
});