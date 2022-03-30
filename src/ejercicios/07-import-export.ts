import { TypeFormatFlags } from 'typescript';
import { Productos, calculaISV } from './06-desestructuracion-funcion';
/*
    ===== Código de TypeScript =====
*/

//importar

const carritoCompras:Productos[] = [
    {
        nombre: 'carro',
        descirpcion: 'aveo',
        precio: 3000
    },
    {
        nombre: 'moto',
        descirpcion: 'italika DM200',
        precio: 2000
    }
];


const [total,isv] = calculaISV( carritoCompras );

console.log('Total: ', total);
console.log('ISV: ', isv);