/*const callback = (element) => { 

    console.log(element)
    return element * 2
}

console.log(arr) */

/*const callback = (element, indice, arr1) => {
console.log(element, indice, arr1)
return element * 2
}
const arr = [1, 5, 6, 8].map(callback)
console.log(arr) */

const callback = (element) => {
    return element > 5
}
const arr = [1, 5, 6, 8].filter(callback)
console.log(arr) 





























