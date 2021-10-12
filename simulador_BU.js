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
    `Bienvenido ${pNombre}! Para poder realizar un análisis de tus finanzas te solicitaré datos vinculados a tus ingresos y tus gastos. Te pido que los datos que ingreses en referencia a los mismos sean en una base mensual, si esos ingresos o gastos no son fijos, te pido que hagan un promedio de ese valor de los últimos meses para que el análisis dea más completo.`
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

finCargaTipoDato(
  "ingresos",
  "Ahora ingresa tus gastos vinculados a la vivienda"
);

do {
  var consulta = prompt(
    `Indique el nombre del gasto o escriba fin para dejar de agregar datos en esta categoría`
  );
  if (consulta.toLocaleLowerCase() === "fin") {
    break;
  } else {
    nombreDelDato = consulta;
    gastosVivienda.push(crearGastoVivienda());
  }
} while (consulta.toLocaleLowerCase() != "fin");

finCargaTipoDato(
  "gastos vinculados a la vivienda",
  "Ahora ingresa los gastos vinculados a tu alimentación, transporte y servicios"
);

do {
  var consulta = prompt(
    `Indique el nombre del gasto o escriba fin para dejar de agregar datos en esta categoría`
  );
  if (consulta === "fin" || consulta === "FIN" || consulta === "Fin") {
    break;
  } else {
    nombreDelDato = consulta;
    gastosAlimentacionTransporteyServicios.push(
      crearGastoAlimentacionTransporteyServicios()
    );
  }
} while (consulta != "fin" || consulta != "FIN" || consulta != "Fin");

finCargaTipoDato(
  "gastos vinculados a alimentación, transporte y servicios",
  "Ahora ingresa los gastosgastos vinculados al ocio"
);

do {
  var consulta = prompt(
    `Indique el nombre del gasto o escriba fin para dejar de agregar datos en esta categoría`
  );
  if (consulta === "fin" || consulta === "FIN" || consulta === "Fin") {
    break;
  } else {
    nombreDelDato = consulta;
    gastosOcio.push(crearGastoOcio());
  }
} while (consulta != "fin" || consulta != "FIN" || consulta != "Fin");

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

alert(`En función de unos ingresos mensuales totales de $${ingresoMensual}, tus gastos óptimos serían:
$${gastoViviendaIdeal} en vivienda;
$${gastoAlimentacionTransporteyServcioIdeal} en alimentación, transporte y servicios;
$${gastoOcioIdeal} para ocio y diversión.
Eso te dejaría un margen de ahorro mensual de $${gastoAhorroIdeal}`);

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
