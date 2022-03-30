/*
    ===== Código de TypeScript =====
*/

//funcion

interface SuperHeroe{
    nombre: string,
    edad: number,
    direccion: Direccion, // {
    //     ciudad: string,
    //     municipio: string,
    //     estado: string
    // }
    mostrarDireccion:() => string
}

interface Direccion {
    ciudad: string,
    municipio: string,
     estado: string


}


const superHeroe: SuperHeroe = {
    nombre: "Guillermo",
    edad: 21,
    direccion :{
        ciudad: "Cancun",
        municipio: "Benito juarez",
        estado: "quintana Roo"
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.estado;
    }
};

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);