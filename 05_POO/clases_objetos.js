class Persona{
    nombre;
    edad;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad; 
    }

    imprimir(){
        console.log(`${this.nombre} tiene ${this.edad} años`);
    }
}

const p1= new Persona('Juan', 20);
const p2= new Persona('Pedro', 30);

console.log(p1);
console.log(p2);