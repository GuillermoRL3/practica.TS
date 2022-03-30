/*
    ===== Código de TypeScript =====
*/

//export = puedes utilizar los parametros de Productos en otro archivo .Ts
export interface Productos {
    nombre: string,
    descirpcion: string,
    precio: number
};

const telefono: Productos = {
    nombre: 'Iphone 13pro max',
    descirpcion: 'Color gris',
    precio: 130000
};

const laptop: Productos = {
    nombre: 'hp',
    descirpcion: 'Color negro y teclado RGB',
    precio: 7000
};

const procesador: Productos = {
    nombre: 'Raizen 3200G',
    descirpcion: 'Graficas integradas',
    precio: 3500
};


export function calculaISV(productos: Productos []): [number, number]{
    
    let total = 0;

    productos.forEach( ({precio})=> {
        total += precio;
    });

    return [total, total * 0.15];
};

const articulos = [laptop, procesador];

const [total, isv] = calculaISV(articulos);

console.log('Total: ', total);
console.log('ISV: ', isv);
