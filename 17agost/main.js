//const arreglo = [1,2,3,4,5]
//arreglo.length //largo del arreglo, en este caso 5
//   inicio          condicion              incremento


//console.log(suma)//

const funcion = () => {
    const formulaInput = document.getElementById('formula').value;
    // console.log ("se preciono el boton")//
    const arregloconnumeros = formulaInput.split('+')



    let suma = 0;
    for (let indice = 0; indice < arregloconnumeros.length; indice++) {
        suma = Number(arregloconnumeros[indice]) + suma;
    }
    console.log(suma)
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "<p>El resultado es <strong>" + suma

} 
