console.log("hola mundo")

const saludos= "hola mundo"

const peso = 82
const altura = 1.70

let persona = {
    nombre: "paulina",
    apellido: "sanchez",
    peso: 68,
}
const imc = peso / ( altura * altura)
//indice masa corporal / match.pow(altura, 2)
console.log(persona.nombre, persona.apellido)

persona.nombreCompleto = persona.nombre + " " + persona.apellido
const div = document.write(persona.nombreCompleto)




const calcularimc = () => {

const pesoinput = document.getElementById("peso")
const estaturainput = document.getElementById("estatura")

const peso = Number(pesoinput.value)
const estatura = Number(estaturainput.value) / 100

const imc = peso / (estatura * estatura)
const div =document.getElementById("identificador")
div.innerHTML =
<p> tu imc es : $ (imc) </p>
}






