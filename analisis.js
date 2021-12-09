// Helpers
function par(n) {
  return (n % 2 === 0);
}

function media(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// Calculadora de mediana
function mediana(lista) {
  const mitad = parseInt(lista.length / 2);

  if (par(lista.length)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = media([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

// Mediana General
const salarios = colombia.map(
  function (personita) {
    return personita.salary;
  }
);

const salariosSort = salarios.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

const medianaGeneralCol = mediana(salariosSort);

// Mediana del top 10%
const spliceStart = (salariosSort.length * 90) / 100;
const spliceCount = salariosSort.length - spliceStart;

const salariosColTop10 = salariosSort.splice(
  spliceStart,
  spliceCount,
);

const medianaTop10Col = mediana(salariosColTop10);

console.log({
  medianaGeneralCol,
  medianaTop10Col,
});