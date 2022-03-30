/*
    ===== Código de TypeScript =====
*/

//funcion

function persona(a: number, b: number):number{
    return a + b;
};

const sumaFlechas = (a: number , b: number): number =>{
    return a + b;
};
const suma = persona(20, 20);

console.log(suma);
console.log(typeof suma);


function multiplicar(numero: number, otronumero?: number, base: number = 1): number{
    return numero * base;
}

const resultado = multiplicar(5);
console.log(resultado);


interface PersonajeGuille{
    nombre: string,
    puntodeVida: number,
    mostrarhp: () => void //es una manera de declarar un funcion
    
} 

//una funcion que no regrese nada se le coloca como void
function curar(personaje: PersonajeGuille , curaX: number):void{
    personaje.puntodeVida += curaX;

}

const nuevoPersonaje: PersonajeGuille = {
    nombre: 'Super man',
    puntodeVida: 50,
    mostrarhp(){
        console.log('puntos de vida', this.puntodeVida);
    }
}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarhp();