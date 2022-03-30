/*
    ===== Código de TypeScript =====
*/

import { createNoSubstitutionTemplateLiteral } from "typescript";

//Genericos


//<T> te permite que cuando declares una funcion pueda ser de cualquier tipo (number, string, boolena)
// function queTipoSoy(parametro:string|number|boolean){
//     return parametro;
// };


function queTipoSoy<T>(tipoDedato: T){
    return tipoDedato;
}

let soyString = queTipoSoy('Hola mundo, toy programando en TypeScript');
let soyNumero = queTipoSoy(20);
let soyArreglo = queTipoSoy ([1, 2, 3, 4])
let soyBoolena = queTipoSoy(true);

console.log(soyString);
console.log(typeof soyString);

console.log(soyNumero);
console.log(typeof soyNumero);

console.log(soyArreglo);
console.log(typeof soyArreglo);

console.log(soyBoolena);
console.log(typeof soyBoolena);