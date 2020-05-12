(()=>{

  // Uso de Let y Const
  const nombre = 'Ricardo Tapia';
  const edad = 23;

  const PERSONAJE = {
    nombre: nombre,
    edad: edad
  };

  interface personaje{
      nombre:string,
      artesMarciales:string[]
  }

  // Cree una interfaz que sirva para validar el siguiente objeto
  const batman:personaje = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  // Convertir esta funcion a una funcion de flecha
  /*function resultadoDoble1( a, b ){
    return (a + b) * 2
  }*/

  const resultadoDoble = (a:number, b:number) => {
    return(a+b)*2
  }

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
/*  function getAvenger( nombre, poder?, arma='arco' ){
    var mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
  };*/

  const getAvenger2 = (nombre:string, poder?:string, arma:string = "arco") =>{
    let mensaje;
    if(poder){
      mensaje = `${nombre} Tiene el poder ${poder} y un arma ${arma}`
      console.log(mensaje)
    }else {
      mensaje = `${nombre} Tiene un ${arma}`
      console.log(mensaje)
    }
  }

  console.log(getAvenger2("Ironman", 'Luz'));

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class rectangulo{
    base:number;
    altura:number;
    constructor(base:number, altura:number) {
      this.base=base;
      this.altura=altura;
    }
    calcular(){

       return this.base * this.altura;
    }
  }

const calc = new rectangulo(1,2);
  console.log(calc.calcular())




})();