function cargarIngresoyGasto(pTipoDato) {
  if (pTipoDato === "ingreso") {
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

let totalGastos = 2;

function balanceCuentas(pIngresos, pGastos){
    let diferencia = pIngresos - pGastos;
    if(pIngresos < pGastos){
        alert(`Tus gastos son mayores a tus ingresos, esa situación no es sostenible en el tiempo. Necesitás reducir tus gastos en $${diferencia*-1} o buscar incrementar tus ingresos en ese monto. A continuación intentaremos ver dónde está el desequilibrio.`);
    } else if(pIngresos > pGastos){
        alert(`Tus cuentas están balanceadas ya que tus gastos son menores a tus ingresos. Todos los meses tienes a tu favor un resto de $${diferencia} que bien puedes destinar a ahorro o a mejorar la calidad de algunos de tus gastos. A continuación intentaremos ver que tan oportunos son tus gastos en función de tus ingresos.`);
    } else {
        alert(`Tus gastos y tus ingresos son equivalentes. Esto puede generar la ilusión de un presupuesto balanceado, pero un presupuesto sano debería tener algún margen de ahorro para imprevistos. A continuación intentaremos ver dónde está el desequilibrio.`);
    }
  }