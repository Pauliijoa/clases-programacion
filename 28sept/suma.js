

const notas = [10, 20, 60, 40]

let suma = 0

for (let indice = 0; indice <notas.length; indice++) {
    const actual = notas[indice]
    if (actual%2==0){
        suma += actual
        
    }
}
console.log("el resultado total es:", suma)










