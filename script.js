const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const aviso = document.querySelector(".aviso");
const copiar = document.querySelector(".copiar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let llaves = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];

function encriptar(textoEncriptar){

    textoEncriptar = textoEncriptar.toLowerCase();

    for(let i = 0 ; i < llaves.length ; i++) {
        if(textoEncriptar.includes(llaves[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(llaves[i][0] , llaves[i][1]);
        }
    }
    return textoEncriptar;
}

function botonEncriptar(){
    const encriptado = encriptar(inputTexto.value);
    mensaje.value = encriptado;
    mensaje.style.backgroundImage = "none";
    aviso.style.visibility = "hidden";
    copiar.style.visibility = "visible";
    inputTexto.value = "";
}

function desencriptar(textoDesencriptar){
  
    textoDesencriptar = textoDesencriptar.toLowerCase();

    for(let i = 0 ; i < llaves.length ; i++) {
        if(textoDesencriptar.includes(llaves[i][1])){
            textoDesencriptar = textoDesencriptar.replaceAll(llaves[i][1] , llaves[i][0]);
        }
    }
    return textoDesencriptar;
}

function botonDesencriptar(){
    const desencriptado = desencriptar(inputTexto.value);
    mensaje.value = desencriptado;
    mensaje.style.backgroundImage = "none";
    aviso.style.visibility = "hidden";
    copiar.style.visibility = "visible";
    inputTexto.value = "";
}

function botonCopiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    alert("Mensaje copiado: " + mensaje.value);
    mensaje.value = "";
}