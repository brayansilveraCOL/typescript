(() => {
  /*  class Avenger {
        nombre:string;
        equipo:string;
        nombreReal?:string;
        puedePelar:boolean;
        peleas:number;
        constructor(nombre:string, equipo:string, nombrereal:string,puedePelar:boolean,peleas:number) {
            this.nombre=nombre;
            this.equipo=equipo;
            this.nombreReal=nombrereal;
            this.puedePelar=puedePelar;
            this.peleas=peleas;


        }
    }*/
    class Avenger {
       /* nombre:string;
        equipo:string;
        nombreReal?:string;
        puedePelar:boolean;
        peleas:number;*/
        constructor(public nombre:string,
                    public equipo:string,
                    public nombreral?:string,
                    public puedepelear: boolean = true,
                    public peleas: number = 0,
                    ) {

        }
    }

    const atman = new Avenger('Atman','Cap');

    console.log(atman)


})();
