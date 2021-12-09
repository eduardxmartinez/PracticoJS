const l1 = [
    1,
    2,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    4,
    5,
    2,
    1,
    2,
    3,
    4,
    2,
    3,
    1,
    10
];

const l1C = {};

l1.map(
    function(e) {
        if (l1C[e]) {
            l1C[e] += 1
        } else {
            l1C[e] = 1;
        }
    }
);

const l1A = Object.entries(l1C).sort(
    function(valorAcumulado, valor) {
        return valorAcumulado[1] - valor[1];
    }
);

const moda = l1A[l1A.length-1];