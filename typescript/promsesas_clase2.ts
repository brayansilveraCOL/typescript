(() => {
    const retirardinero = (monto:number): Promise<number> =>{
        let dinero = 1000;

        return new Promise((resolve, reject)=>{
            if(monto>dinero){
                reject("No hay Fondos")
            }else {
                dinero = dinero-monto;
                resolve(dinero);
            }
        })
    }
    retirardinero(1500)
        .then(monto => console.log(`Me queda ${monto}`))
        .catch(err =>console.warn(err))

})();
