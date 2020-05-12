(() => {
    console.log("inicio")

        const prom1 = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject("Se termino el timeOur");
            },1000)
        });
    prom1
        .then(mensaje => console.log(mensaje))
        .catch(err =>console.log(err))
    console.log("final")
})();
