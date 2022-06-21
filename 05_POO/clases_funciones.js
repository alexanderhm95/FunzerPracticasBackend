
function Pesona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;


    this.imprimir = function(){
        console.log(`${this.nombre} tiene ${this.edad} años`);
    }
}

const p1= new Pesona('Juan', 20);
const p2= new Pesona('Pedro', 30);

console.log(p1.nombre);
console.log(p2.nombre);

p1.imprimir();
p2.imprimir();
