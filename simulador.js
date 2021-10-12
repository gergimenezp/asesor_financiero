//CLASES
class Ingreso {
  constructor(nombre, monto) {
    this.nombre = nombre;
    this.monto = monto;
  }
}

class Gasto {
  constructor(nombre, tipo, monto) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.monto = monto;
  }
}

//FUNCIONES
const saludar = (pNombre) =>
  alert(
    `Bienvenido ${pNombre}! Para poder realizar un análisis de tus finanzas te solicitaré datos vinculados a tus ingresos y tus gastos. Te pido que los datos que ingreses en referencia a los mismos sean en una base mensual, si esos ingresos o gastos no son fijos, te pido que hagas un promedio de ese valor de los últimos meses para que el análisis sea más completo.`
  );

const detalleSolicitud = (pClaseDato) =>
  alert(
    `A continuación detalla todos tus ${pClaseDato} colocándole un nombre específico que permita identificarlo.`
  );

const finCargaTipoDato = (pClaseDato, pProximoPaso) =>
  alert(`He registrado tus ${pClaseDato}. ${pProximoPaso}`);

const pedirDato = (pSolicitud) => prompt(pSolicitud);

const porcentaje = (pTotal, pPorcion) => pTotal * (pPorcion / 100);

const restar = (a, b) => a - b;

const convertirNumeroPositivo = (pValor) => pValor * -1;

function gastoRubro(gastoReal, gastoOptimo) {
  let diferencia = restar(gastoReal, gastoOptimo);
  return diferencia;
}

function crearIngreso() {
  let nombre = nombreDelDato;
  let monto = Number(prompt("Indique el monto del ingreso"));

  return new Ingreso(nombre, monto);
}

function crearGastoVivienda() {
  let nombre = nombreDelDato;
  let monto = Number(prompt("Indique el monto de dicho gasto"));

  return new Gasto(nombre, "ATyS", monto);
}

function crearGastoAlimentacionTransporteyServicios() {
  let nombre = nombreDelDato;
  let monto = Number(prompt("Indique el monto de dicho gasto"));

  return new Gasto(nombre, "vivienda", monto);
}

function crearGastoOcio() {
  let nombre = nombreDelDato;
  let monto = Number(prompt("Indique el monto de dicho gasto"));

  return new Gasto(nombre, "ocio", monto);
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

function cargarIngresoyGasto(pTipoDato) {
  if (pTipoDato === "ingresos") {
    do {
      var consulta = prompt(
        `Indique el nombre del ingreso o escriba fin para dejar de agregar datos en esta categoría`
      );
      if (consulta.toLocaleLowerCase() === "fin") {
        break;
      } else {
        nombreDelDato = consulta;
        ingresos.push(crearIngreso());
      }
    } while (consulta.toLocaleLowerCase() != "fin");
  } else if (pTipoDato === "vivienda") {
    do {
      var consulta = prompt(
        `Indique el nombre del gasto vinculado a la vivienda o escriba fin para dejar de agregar datos en esta categoría`
      );
      if (consulta.toLocaleLowerCase() === "fin") {
        break;
      } else {
        nombreDelDato = consulta;
        gastosVivienda.push(crearGastoVivienda());
      }
    } while (consulta.toLocaleLowerCase() != "fin");
  } else if (pTipoDato === "ATyS") {
    do {
      var consulta = prompt(
        `Indique el nombre del gasto vinculado a alimentación transporte y servicios o escriba fin para dejar de agregar datos en esta categoría`
      );
      if (consulta.toLocaleLowerCase() === "fin") {
        break;
      } else {
        nombreDelDato = consulta;
        gastosAlimentacionTransporteyServicios.push(
          crearGastoAlimentacionTransporteyServicios()
        );
      }
    } while (consulta.toLocaleLowerCase() != "fin");
  } else if (pTipoDato === "ocio") {
    do {
      var consulta = prompt(
        `Indique el nombre del gasto vinculado al ocio o escriba fin para dejar de agregar datos en esta categoría`
      );
      if (consulta.toLocaleLowerCase() === "fin") {
        break;
      } else {
        nombreDelDato = consulta;
        gastosOcio.push(crearGastoOcio());
      }
    } while (consulta.toLocaleLowerCase() != "fin");
  }
}

function balanceCuentas(pIngresos, pGastos) {
  let diferencia = pIngresos - pGastos;
  if (pIngresos < pGastos) {
    alert(
      `Tus gastos son mayores a tus ingresos, esa situación no es sostenible en el tiempo. Necesitás reducir tus gastos en $${
        diferencia * -1
      } o buscar incrementar tus ingresos en ese monto. A continuación intentaremos ver dónde está el desequilibrio.`
    );
  } else if (pIngresos > pGastos) {
    alert(
      `Tus cuentas están balanceadas ya que tus gastos son menores a tus ingresos. Todos los meses tienes a tu favor un resto de $${diferencia} que bien puedes destinar a ahorro o a mejorar la calidad de algunos de tus gastos. A continuación intentaremos ver que tan oportunos son tus gastos en función de tus ingresos.`
    );
  } else {
    alert(
      `Tus gastos y tus ingresos son equivalentes. Esto puede generar la ilusión de un presupuesto balanceado, pero un presupuesto sano debería tener algún margen de ahorro para imprevistos. A continuación intentaremos ver dónde está el desequilibrio.`
    );
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
    alert(
      `El monto total de tus gastos en ${pTipoGasto} es de $${pGastoReal}. Puedes usar el excedente de $${pGastoBajo} para algo de ahorro extra!`
    );
  } else if (pAnalisis > 0) {
    alert(
      `El monto total de tus gastos en ${pTipoGasto} es de $${gastoRealenATyS}. El mismo está un poco fuera de tu presupuesto. Deberías reducir este conjunto de gastos en $${analisisATyS} o buscar aumentar tus ingresos en ese mismo monto a fin de equilibrar tu presupuesto.`
    );
  } else {
    alert(
      `El monto total de tus gastos en ${pTipoGasto} es de $${gastoRealenATyS}. El mismo está perfectamente equilibrado ya que coincide exactamente con el ${pPorcentaje} de los ingresos que declaraste.`
    );
  }
}
//ARRAYS
const ingresos = [];
const gastosVivienda = [];
const gastosAlimentacionTransporteyServicios = [];
const gastosOcio = [];

//INGRESO DATOS

var nombre = prompt(`Ingrese su nombre`);

saludar(nombre);
detalleSolicitud("ingresos");
cargarIngresoyGasto("ingresos");
finCargaTipoDato(
  "ingresos",
  "Ahora ingresa tus gastos vinculados a la vivienda"
);

cargarIngresoyGasto("vivienda");

finCargaTipoDato(
  "gastos vinculados a la vivienda",
  "Ahora ingresa los gastos vinculados a tu alimentación, transporte y servicios"
);

cargarIngresoyGasto("ATyS");

finCargaTipoDato(
  "gastos vinculados a alimentación, transporte y servicios",
  "Ahora ingresa los gastosgastos vinculados al ocio"
);

cargarIngresoyGasto("ocio");

finCargaTipoDato(
  "gastos vinculados al ocio",
  "A continuación analizaré tu situación financiera."
);

//VARIABLES DE ANALISIS DE DATOS

let ingresoMensual = ingresos.reduce((suma, dato) => suma + dato.monto, 0);
let gastoRealenVivienda = gastosVivienda.reduce(
  (suma, gto) => suma + gto.monto,
  0
);
let gastoRealenATyS = gastosAlimentacionTransporteyServicios.reduce(
  (suma, gto) => suma + gto.monto,
  0
);
let gastoRealenOcio = gastosOcio.reduce((suma, gto) => suma + gto.monto, 0);

let gastoMensual = gastoRealenVivienda + gastoRealenATyS + gastoRealenOcio;

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

alert(`En función de unos ingresos mensuales totales de $${ingresoMensual}, tus gastos óptimos serían:
$${gastoViviendaIdeal.toFixed()} en vivienda;
$${gastoAlimentacionTransporteyServcioIdeal.toFixed()} en alimentación, transporte y servicios;
$${gastoOcioIdeal.toFixed()} para ocio y diversión.
Eso te dejaría un margen de ahorro mensual de $${gastoAhorroIdeal.toFixed()}`);

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
