(() => {
    //destrucutra propiedades de un objeto
    const avengers = {
        nombre: "Steve",
        clave: "CP",
        poder: "Fuerza"
    }

    // extraer propiedades en una funcion flecha
    const extraer = ({nombre, poder, clave}: any) =>{
        //const {nombre,clave} = avengers;

        console.log(nombre)
        console.log(clave)
        //console.log(poder)
    }

    const {nombre,clave} = avengers;

    console.log(nombre)
    console.log(clave)
    //console.log(poder)
    extraer(avengers);
    // Arreglos Abajo

    const avenger: string[] = ["Thor", "Spiderman", "CP"];

    const [thor, , cp] = avenger;

    console.log(thor)
    //console.log(spiderman)
    console.log(cp)

    const extraerarr = ([loki,spiderman,cp]:string[]) =>{
        console.log(loki)
        console.log(spiderman)
        console.log(cp)
    }

    extraerarr(avenger);


})();
