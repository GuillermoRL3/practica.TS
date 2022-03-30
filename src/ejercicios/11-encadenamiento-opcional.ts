/*
    ===== Código de TypeScript =====
*/

//ENCADENAMIENTO OPCIONAL   
 
interface Pasajero{
    nombre:string,
    hijos?:string [], //?= opcional
    destino:string,
    horadeLLegada: number
}

const pasajero1: Pasajero ={
    nombre: 'Guillermo',
    destino: 'Mexìco',
    horadeLLegada: 10
}

const pasajero2: Pasajero ={
    nombre: 'Ricardo',
    hijos: ['joaquin', 'Fatima', 'Perla'],
    destino: 'Tijuana',
    horadeLLegada: 22
} 

function imprimeHijos(pasajero:Pasajero):void{
    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1)

