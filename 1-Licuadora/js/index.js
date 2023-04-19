var estadoLicuadora = "apagado";
var licuadora = document.getElementById("blender");
var sonidoBoton = document.getElementById("blender-button-sound");
var sonidoLicuadora = document.getElementById("blender-sound");


function estado(){
    if(estadoLicuadora == "apagado"){
        estadoLicuadora = "encendido";
        sonidos();
        licuadora.classList.add("active");
    }
    else{
        estadoLicuadora = "apagado";
        sonidos();
        licuadora.classList.remove("active");
    }
}

function sonidos(){
    if (sonidoLicuadora.paused){
        sonidoBoton.play();
        sonidoLicuadora.play();
    }
    else{
        sonidoBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}