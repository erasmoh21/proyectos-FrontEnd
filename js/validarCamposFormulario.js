export default function validarCamposFormulario(...inputs) {
    let contadorDeInputsRealizados = 0
    if(inputs[0] === null) {
        contadorDeInputsRealizados++;
    }
    if(inputs[1].value.trim().length == 0) {
        contadorDeInputsRealizados++
    }

    return contadorDeInputsRealizados;
}