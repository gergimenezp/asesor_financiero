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
function crearGasto(nombreDelGasto, tipoDeGasto, montoDelGasto, frecuenciaDelGasto) {
  let nombre = nombreDelGasto;
  let tipo = tipoDeGasto;
  let montoIngresado = montoDelGasto;
  let frecuencia = frecuenciaDelGasto;

  return new Gasto(nombre, tipo, montoIngresado, frecuencia);
}

//DATOS DESDE LOCAL STORAGE
const nombre = localStorage.getItem("nombre");

//INTERACCIÓN
$('#saludoGastos').append(`
  <p class="mensaje">Ahora necesito que cargues tus gastos. Al igual que con tus ingresos, es importante que seas tan exhaustivo y preciso como sea posible en la carga de los datos. Recuerda que si los gastos no son fijos, es importante que hagas un promedio de ese valor de los últimos periodos para que el análisis sea más completo.
  </br>También es importante que asignes correctamente los gastos a las categorías de "tipo de gasto".
  </br> <span>Vamos ${nombre}, carguemos los gastos:</span></p>
`)

$('#formGastos').submit((e) => {
  e.preventDefault();

  const nombreDelGasto = $('#nombreGasto').val().trim()
  const tipoDeGasto = $('#tipoGasto').val().trim()
  const montoDelGasto = Number($('#montoGasto').val());
  const frecuenciaDelGasto = Number($('#frecuenciaGasto').val());

  if (nombreDelGasto !== "" && montoDelGasto !== isNaN()) {
    gastos.push(
      crearGasto(nombreDelGasto, tipoDeGasto, montoDelGasto, frecuenciaDelGasto)
    );

    $('#formGastos').trigger('reset')

    $('#alertaGastos').addClass('noMostrar')

    $('#msjGastos1').removeClass('noMostrar')

    $('#listaGastos').append(`
      <li class="mensaje sangria">
      <strong>${gastos[gastos.length-1].nombre.toUpperCase()}:</strong> $${gastos[gastos.length-1].monto} 
      </li>
    `)

  } else {
    $('#alertaGastos').removeClass('noMostrar');
  }
});

$('#botonCargarGastos').on('click', () => {
  localStorage.setItem("gastos", JSON.stringify(gastos));

  $('#gastos').hide();
  $('#msjGastos1').hide();

  let totalGastos = gastos.reduce((suma, gto) => suma + gto.montoMensualizado, 0);

  $('#msjGastos2').show()
  $('#msjGastos2').html(`
    <div class="mensaje mensaje-centrado"> 
      <p>Perfecto ${nombre}, el total de los gastos que has informado en una base mensual es de $${totalGastos.toFixed(2)}.</p>
      <p>Con esto ya tenemos todos los datos necesarios, presiona "continuar" cuando estés listo para que procedamos a realizar el análisis de tu situación financiera.</p>
    </div>
    <div class="text-right">
      <a href="./analisis.html">
        <button class="btn btn-light mt-3 mb-3">
          CONTINUAR >> 
        </button>
      </a>
    </div>
    <div class="text-left">
      <button id="masGastos" class="btn btn-warning mt-3 mb-3">
        Seguir cargando gastos<< 
      </button>
    </div> 
  `)

  $('#masGastos').on('click', () =>{
    $('#msjGastos2').hide()
    $('#gastos').show();
    $('#msjGastos1').show();
  })
});
