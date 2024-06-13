botonVerificar = document.querySelector("#botonVerificar");

botonVerificar.addEventListener('click', function() {
    let inputContenedor1 = document.getElementById('cantidadSticker1').valueAsNumber;
    let inputContenedor2 = document.getElementById('cantidadSticker2').valueAsNumber;
    let inputContenedor3 = document.getElementById('cantidadSticker3').valueAsNumber;

    let respuesta = document.querySelector("#parrafoRespuesta");

    let sumaContenedores = inputContenedor1 + inputContenedor2+ inputContenedor3;

    if (sumaContenedores > 10) {
        respuesta.innerHTML = "Llevas demasiados stickers";
        console.log("Entramos en mayor o igual a 10");
    } else {
        respuesta.innerHTML = "Llevas "+sumaContenedores+" stickers";
        console.log("Entramos en menor a 10");
    }
});