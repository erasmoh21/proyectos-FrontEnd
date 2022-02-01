const elementosDelDom = {
    header : document.querySelector('.contenedorHeader'),
    main : document.getElementsByTagName('main')[0],
    footer : document.querySelector('.contenedorFooter'),
    formulario : document.getElementById('form'),
    botonEnvio : document.getElementById('botonEnvio'),
    contenedorDeTareas : document.querySelector('.tasks'), 
    logoLuna : document.getElementById('luna'),
    logoSol : document.getElementById('sol'),
    botonEliminar: document.getElementById('btn-delete'),
    botonActualizar: document.getElementById('btn-update'),
    contenedorCheckbox : document.getElementById('checkboxTask'),
    opcionesTarea: document.querySelector('.opcionesTareas'),
    tareasEspecificas: document.querySelectorAll('.tareas'),
    actualizacionTarea: document.querySelector('.actualizacionTarea'),
    descripcionTarea: document.getElementById('descripcion'),
    formActualizarTarea: document.getElementById('formActualizarTarea'),
    cerrarFormularioActualizacion: document.getElementById('cerrarFormularioActualizacion'),
    sugerencia: document.querySelector('.sugerencia')
}

export default elementosDelDom