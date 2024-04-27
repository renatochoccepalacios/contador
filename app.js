let contadorElemento = document.querySelector("#contador");
let contador = 0;

function decrementarButton() {
    if (contador > 0) { // si contador es mayor a cero va a decrementar
        contador--;
    }else {
        console.log("no se pueden decrementar numeros negativos")
    }
    contadorElemento.textContent = contador;
    console.log(contador);

}
function incrementarButton() {
    contador++
    contadorElemento.textContent = contador;
    console.log(contador);
}
