const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    nombreCompleto() {
     return `${this.nombre} ${this.apellido}`;
    },
    trajes:['camisa', 'pantalon', 'zapatos'],
    
    direccion: {
        zip: '12345',
        pais: 'Argentina',
        depart: 'Buenos Aires'
    }

}

console.log(persona.nombreCompleto());
console.log(persona.edad);
console.log(persona.trajes);
console.log(persona.direccion.pais);