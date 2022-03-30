/*
    ===== Código de TypeScript =====
*/

//funcion

interface Reproductor{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
};

interface Detalles{
    artista: string,
    anio: number,
    informacionCancion: string
};

const reproductor: Reproductor ={
    volumen: 92,
    segundo: 30,
    cancion: "El triste",
    detalles: {
        artista: "jose jose",
        anio: 2008,
        informacionCancion: "autoria de Jose Jose y yop"
    }
} ;

/*ejemplo
Si tubieramos una constante que se llame arteista generaria un erro
*/

// const artista  = "fulano";

// desestructuracion
// const {volumen, segundo, cancion, detalles: {artista:artistaDetalles}} = reproductor;

//esta es la forma mas facil de leer 
const{volumen: vol, segundo, detalles} = reproductor;
const {artista} = detalles; 

console.log("El volumne actual de la cancion es de: ",vol);
console.log("El segundo actual de la cancion es de : ", segundo);
console.log("El artista es: ", artista)


// console.log("El volumen actual es de: ", reproductor.volumen);
// console.log("El segundo actual es de: ", reproductor.segundo);
// console.log("La cancion es de: ", reproductor.detalles.artista);


// desestructuracion en arreglos (array)

const personajes: string[] = ["Goku", "Vegeta", "Picoro"];

// const[p1, p2, p3] = personajes;
const[ , , p3] = personajes;

console.log(p3);
// console.log();
// console.log(p2);