class Persona{
    nombre;
    edad;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad; 
    }
    detallePersona(){
        console.log(`${this.nombre} tiene ${this.edad} años`);
    }
}
class Empleado extends Persona{
    sueldo;
    constructor(nombre, edad, sueldo){
        super(nombre, edad);
        this.sueldo = sueldo;
    }
    detalleEmpleado(){
        super.detallePersona();
        console.log(`${this.nombre} tiene ${this.sueldo}`);
    }
}

const em1=new Empleado('Juan', 20, 1000);
const em2=new Empleado('Pedro', 30, 2000);
console.log(em1);
console.log(em2);