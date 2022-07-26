const inputTexto = document.querySelector(".input");
const outputTexto = document.querySelector(".output");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    
    outputTexto.value = textoEncriptado;
    inputTexto.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    
    outputTexto.value = textoDesencriptado;
    inputTexto.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}


function btnCopiar() {
    let inputTexto = document.querySelector(".input");
    let outputTexto = document.querySelector(".output");

    outputTexto.select();
    document.execCommand("copy");
    outputTexto.value = "";
}

/*Validação*/

inputTexto.addEventListener("keypress", function(e){
    if(!checarCaractere(e)) {
        e.preventDefault();
    }
});

function checarCaractere(e) {
    const car = String.fromCharCode(e.keyCode);

    const padrao = "[a-z- -0-9]";

    if(car.match(padrao)) {
        console.log(car);
        return true;
    }
}