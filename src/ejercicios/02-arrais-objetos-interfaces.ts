/*
    ===== Código de TypeScript =====
*/

/*arreglos
los arreglos toman el valor del numero 0 en una tabla
*/
//any es cualquier tipo de dato
let habilidade: string[] = ['Bolar', 'Correr', 'nadar'];
habilidade.push("g")
console.log(habilidade);

//funciona con los tipos de objetos
interface Personaje{
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string
}

//objeto
const personaje: Personaje = {
    nombre: "guillermo",
    hp: 100,
    habilidades: ['bolar','correr', 'nadar']
}
personaje.puebloNatal = "Chechen Itza";

console.table(personaje);
