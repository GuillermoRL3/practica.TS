/*
    ===== Código de TypeScript =====
*/

//el metodo class
/* el metodo class es mui parecido al metodo de interface
pero el metod class entiende mas ya que se pueden crear metodos
y en una interface no se puede*/

class personaNormal{
    constructor(
        public nombre: string,
        public nacionalidad: string,
        public anioNacimiento: number
        ){}
}

class Heroe extends personaNormal {
    // nombreSuper: string;
    // edad: number; //cuando no tiene un nivel de acceso se tomo como publica
    // nombreReal: string;

    constructor (
        public nombreSuper: string,
        public edad: number,
        public nombreReal: string
        ){
            super(nombreReal, 'Cancun', 2000)
        }
}

/*las interfces son como clases tontas ya que nomas se le puede delcarar que tipo de parametro regresara
ya sea string, number, boolean*/

const iroman = new Heroe('Flash', 20, 'Barry Alen');

console.log(iroman)