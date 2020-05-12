(function () {
    const funcion1 = function (a:string) {
        return a.toUpperCase();
    }

    const funcionFlecha = (a:string) =>{
        return a.toUpperCase();
    }

    const sumarn = function(numero1: number, numero2: number){
        return numero1 + numero2;
    }

    const sumarflecha = (numero1:number, numero2:number) =>{
        return numero1 + numero2;
    }

    const hulk =  {
        nombre:"Hulk",

        smach(){
            setTimeout(() => {
                console.log(`${this.nombre} smash!!`)
            }, 1000)
        }

    }
    hulk.smach();

    console.log(funcion1("lina"))
    console.log(funcionFlecha("debbies"))
    console.log(sumarn(1,2))
    console.log(sumarflecha(1, 2))

})();
