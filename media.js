 function Media(l) {
    // let sumal1 = 0;
    // for (let i = 0; i < l.length; i++) {
    //     sumal1 += l[i];
    // }
    const sumal = l.reduce(
        function (valorAcumulado = 0, elemento) {
            return valorAcumulado + elemento;
        }
    );
    const promedio =  (sumal/l.length).toFixed(2);
    return promedio;
 }