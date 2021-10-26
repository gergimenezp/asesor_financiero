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

//DATOS DESDE LOCAL STORAGE
const nombre = localStorage.getItem("nombre");

//INTERACCIÓN
$('#saludoInicial').append(`<p>${nombre}, para poder realizar un análisis de tus finanzas te solicitaré datos vinculados a tus ingresos y tus gastos. Es importante que seas tan exhaustivo y preciso como sea posible en la carga de los datos. Si esos ingresos o gastos no son fijos, te pido que hagas un promedio de ese valor de los últimos periodos para que el análisis sea más completo.
</br> <span>Empecemos por cargar tus ingresos:</span></p>`);
$('#saludoInicial').addClass('mensaje');

$('#formIngresos').submit((e) => {
  e.preventDefault();

  const nombreDelIngreso = $('#nombreIngreso').val().trim()
  const montoDelIngreso = Number($('#montoIngreso').val());
  const frecuenciaDelIngreso = Number($('#frecuenciaIngreso').val());

  if (nombreDelIngreso !== "" && montoDelIngreso !== isNaN()) {
    ingresos.push(
      crearIngreso(nombreDelIngreso, montoDelIngreso, frecuenciaDelIngreso)
    );

    $('#formIngresos').trigger('reset')
    $('#alertaIngresos').addClass("noMostrar")
    $('#mensajes1').removeClass('noMostrar')

    $('#listaIngresos').append(
      `<li class="mensaje sangria" >
        <strong>${ingresos[ingresos.length-1].nombre.toUpperCase()}:</strong> $${ingresos[ingresos.length-1].montoIngresado}
      </li>
    `)

  } else {
    $('#alertaIngresos').removeClass("noMostrar");
  }
});

$('#botonCargarIngresos').on("click", () => {
  localStorage.setItem("ingresos", JSON.stringify(ingresos));

  $('#ingresos').hide();
  $('#mensajes1').hide();

  let totalIngresos = ingresos.reduce((suma, ingr) => suma + ingr.montoMensualizado, 0);

  $('#mensajes2').show()
  $('#mensajes2').html(`
    <div class="mensaje mensaje-centrado">  
      <p>OK ${nombre}, el total de los ingresos que has informado en una base mensual es de $${totalIngresos.toFixed(2)}.</p>
      <div class="form-group row">
        <label for="inputGrupoFamiliar" class="col-sm-8 col-form-label text-right">Por favor indica cuántas personas viven de dichos ingresos:</label>
        <div class="col-sm-2 text-left">
        <input type="number" class="form-control" id="inputGrupoFamiliar"> 
        </div>
      </div>
    </div>
    <div class="text-right">
      <button id="btnMantenidos" class="btn btn-light mt-3 mb-3">
          CONTINUAR >> 
      </button>
    </div>
    <div class="text-left">
      <button id="masIngresos" class="btn btn-warning mt-3 mb-3">
        Seguir cargando ingresos<< 
      </button>
    </div>  
  `)

  $('#btnMantenidos').on('click', () =>{
    const grupoFamiliar = $('#inputGrupoFamiliar').val()
    localStorage.setItem("grupoFamiliar", grupoFamiliar)

    $('#mensajes2').html(`
      <div class="mensaje mensaje-centrado"> 
        <p>¡Perfecto! Presiona continuar cuando estés listo para cargar tus gastos...</p>
        <div class="text-right">
          <a href="./gastos.html">
            <button class="btn btn-light mt-3 mb-3">
              CONTINUAR >> 
            </button>
          </a>
        </div>
      </div>
    `)
  })

  $('#masIngresos').on('click', () =>{
    $('#mensajes2').hide()
    $('#ingresos').show();
    $('#mensajes1').show();
  })
});
