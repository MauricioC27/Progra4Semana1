//Comentar una linea

/*
Abre comentario


Cierra el comentario
*/

//Variable

/*
Lenguaje de programacion tipados: Java, c++, c#
Integer
String
Boolean

Lenguaje de programacion no tipado: javascript
--superset TypeScript

let-> declara la variable en su entorno local
var-> declara la variable en un entorno global
const-> es una variable estatica o fija
this
*/

const Numerodia=5;

//Numerodia=10;
console.log(Numerodia)

let nombre='Pedro';
console.log(nombre)
nombre='Luis';
console.log(nombre)
if(true){
    let nombre='Juan';
    nombre='Maria';
    
}
console.log(nombre)

if(true){
    let edad=20;
    console.log(edad)
}
//edad=25
//(console.log(edad)

var saludo= 'Hola';
console.log(saludo)

function saludar(){
    this.nombre='Gustavo';
    console.log(this.nombre);
    let nombre='Linda';
    console.log(this.nombre,'Y',nombre)
} 
saludar();