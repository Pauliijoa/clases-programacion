const numbers = [1, 20, 19, 29, 67, 28, 90,]

let index = 0
let suma = 0

do {
    suma +=  numbers[index]
    console.log(suma)
    index++

} while (index < numbers.length)
console.log("el total es: ",suma)

