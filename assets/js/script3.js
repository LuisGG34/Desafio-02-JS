botonIngresar = document.querySelector("#boton");

botonIngresar.addEventListener('click', function() {
    let inputContenedor1 = document.getElementById('valores1').value;
    let inputContenedor2 = document.getElementById('valores2').value;
    let inputContenedor3 = document.getElementById('valores3').value;

    let respuesta = document.querySelector("#respuesta");

    let concatenarNumeros = inputContenedor1 + inputContenedor2+ inputContenedor3;

    if (concatenarNumeros === "911") {
        respuesta.innerHTML = "password 1 correcto";
    } else if (concatenarNumeros === "714") {
        respuesta.innerHTML = "password 2 correcto";
    } else {
        respuesta.innerHTML = "password incorrecto";
    }
});



