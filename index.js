const header = document.querySelector('.contenedorHeader')
const main = document.getElementsByTagName('main')[0]
const footer = document.querySelector('.contenedorFooter')
const formulario = document.getElementById('form')
const botonEnvio = document.getElementById('botonEnvio')
const contenedorDeTareas = document.querySelector('.tasks') 
const logoLuna = document.getElementById('luna')
const logoSol = document.getElementById('sol')

function colorDePrioridad(task) {
    if(task.tipoPrioridad == "Inmediately") {
        return "red";
    }
    if(task.tipoPrioridad == "Today") {
        return "blue";
    }
    if(task.tipoPrioridad == "Tomorrow") {
        return "green";
    }
    if(task.tipoPrioridad == "Next Week") {
        return "yellow";
    }
}

botonEnvio.addEventListener('click',(e) => {
    e.preventDefault()
    const form = new FormData(formulario)  
    let tipoTarea = form.get('tipoTarea')  
    let tipoPrioridad = form.get('tipoPrioridad')
    let descripcionTask = descripcion.value

    let task = {
        tipoTarea, 
        tipoPrioridad,
        descripcionTask
    }

    let contenedorTareas = `
        <div class="tareas">
            <div class="tituloPrioridad">
                <h2>${task.tipoTarea}</h2>
                <h4 style=color:${colorDePrioridad(task)};>${task.tipoPrioridad}</h4>
            </div>
            <p>${task.descripcionTask}</p>
        </div>
    `
    contenedorDeTareas.innerHTML += contenedorTareas

})


logoLuna.addEventListener('click',(e) => {
    e.preventDefault()
    header.classList.toggle('headerOscuro')
    main.classList.toggle('mainOscuro')
    footer.classList.toggle('footerOscuro')
    logoLuna.style.visibility = "hidden"
    logoSol.style.visibility = "visible"
})

logoSol.addEventListener('click',(e) => {
    e.preventDefault();
    logoSol.style.visibility = "hidden"
    logoLuna.style.visibility = "visible"
    main.classList.toggle('mainOscuro')
    header.classList.toggle('headerOscuro')
    footer.classList.toggle('footerOscuro')
})