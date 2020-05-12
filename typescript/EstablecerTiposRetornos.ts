(() => {
    const sumar  =  (a:number, b:number):number =>{
        return a+b;
    }
    const holamundo = ():string =>{
        return"Hola mundo"
    }
    const obtener = ():Promise<string> =>{
        return new Promise((resolve, reject)=>{
            resolve("fernando");
        })
    }
    obtener().then(a =>console.log(a.toUpperCase()))
})();
