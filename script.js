// Implementar el código aqui
let form = document.forms["formulario"];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Vamos a comprobar si de verdad me pasa un número para la altura
    let pattern = /[0-9]{2,3}/


    let height = document.forms["formulario"].elements["height"].value;
    let weight = document.forms["formulario"].elements["weight"].value;

    if (!pattern.test(height)) {
        alert("Pásame un número en la alutra!");
        return;
    }

    const imc = (weight / ((height * height) / 10000));


    let results = document.querySelector("#results");
    results.textContent = Math.round(imc);


})
// Escuchar el evento 'submit'
