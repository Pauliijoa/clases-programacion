const saludar = () => {
    console.log("hello world")
}

//const getSalute = (name) => {//
    //return "hola " + name}//

/*
    const getSalute = (nombre,apellido) => {
    return "hola " + nombre+ apellido
}

console.log(getSalute('paulina ',' sanchez ')) */

//saludar()
//console.log(getSalute('paulina Sanchez'))
//console.log(getSalute('joaquin aaron'))
//console.log("hola")//


const getfullname = (name, apellido1, apellido2) => {
    return name + "" + apellido1+ "" + apellido2
}
    const fullname = getfullname(' pauli ', ' sanchez ', ' vasquez ');
    console.log(fullname)


const espar = (Number) => {
    if(Number % 2 ==0){
        return true
    } else {
        return false
    }
 

}
console.log(espar(2))



const numbers =[1,2,5,6,9]

for(let i = 0; i < numbers.lenght; i++){
if(espar(numbers[i])){
    console.log("el numero", numbers[i], 'es par')
}else {

    console.log("el numero", numbers[i], 'es impar')
}
}















