/*
    ===== Código de TypeScript =====
*/
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

//Decoradores
@reportableClassDecorator
class MiSuperClas{
    public miPropiedad: string = 'ABCD123456';

    //metodo
    imprimir(){
        console.log('Hola mundo');
    }
}

console.log(MiSuperClas);

const miClase = new MiSuperClas(); 


console.log(miClase.miPropiedad)