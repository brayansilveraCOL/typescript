(() => {

    interface xmen{
        nombre: string,
        poder?: string, //opcional
        age:number,
    }
    const enviarMision = (xmen: xmen) => {
        console.log(`enviando a  ${xmen.nombre} a la mision`)
    }
    const regresarMision = (xmen: xmen) => {
        console.log(`enviando a  ${xmen.nombre} a la mision`)
    }
    const wolverine: xmen = {
        nombre:"wolverine",
        poder:"fuerza",
        age:25,
    }
    enviarMision(wolverine)
    regresarMision(wolverine)
})();
