var l1 = [1,235,124,1,0];
l1 = ordenar(l1);
const mitadl1 = parseInt(l1.length / 2);

let mediana;

if (par(l1.lenght)) {
    const e1 = l1[mitadl1];
    const e2 = l1[mitadl1-1];
    mediana = media([e1,e2]);
    console.log("par");
} else {
    mediana = l1[mitadl1];
    console.log("no par");
}

function ordenar(l1) {
    const l2 = [];
    const lenght = l1.length;
    for (let i = 0; i < lenght; i++) {
        let menor = l1[0];
        let index = 0;
        for (let j = 0; j < l1.length; j++) {
            if (l1[j] < menor) {
                menor = l1[j];
                index = j;
            }
        }
        l2.push(menor);
        l1.splice(index, 1);
    }
    return l2;
}
function par(n) {
    return (n%2 === 0);
}
function media(l) {
    const sumal = l.reduce(
        function (valorAcumulado = 0, elemento) {
            return valorAcumulado + elemento;
        }
    );
    const promedio =  (sumal/l.length).toFixed(2);
    return promedio;
 }