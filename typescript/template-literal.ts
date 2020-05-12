(function () {
    const variable1 = "Brayan";
    const variable2 = 33;
    const variable3 = "Otro string";
    
    function get() {
        return 100
    }

    //const salida = variable1 + " " + variable3 + " (Edad: " + variable2 + ")";
    const salida = `${variable1} ${variable3} (Edad: ${get()})`;
    console.log(salida)
})();
