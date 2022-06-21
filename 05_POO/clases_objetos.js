class Persona{
    nombre;
    edad;

    imprimir(){
        console.log(`${this.nombre} tiene ${this.edad} años`);
    }
}

const p1= new Persona();
p1.nombre = 'Juan';
p1.edad = 20;
const p2= new Persona();
p2.nombre = 'Pedro';
p2.edad = 30;

console.log(p1);