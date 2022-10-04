const numero1 = 10
const numero2 = 20

const imprimir = (resultado) => {
    console.log("tu resultado es:", resultado)
    }
const multiplicar = ( a, b) => {
    imprimir (a* b)
}
const dividir = (a,b) => {
    imprimir(a /b)
    }
    const sumar =(a,b) => {
        imprimir(a+b)
    }
    const restar =(a,b) => {
        imprimir(a-b)
    }
    const nombrecompleto =( primernombre,segundonombre) => {
        imprimir(primernombre+ " " + segundonombre)
    }
multiplicar(10,20)
dividir(10,20)
sumar(10,20)
restar(10,20)
sumar(" hola " , " mundo ")
nombrecompleto(" paulina", "sanchez")








