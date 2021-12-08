//cuadrado
function perimCuadrado(lado) {
    return lado*4;
}
function areaCuadrado(lado) {
    return lado**2;
}

//triangulo
function perimTri(lado1,lado2,base) {
    return lado1+lado2+base;
}
function areaTri(base,altura) {
    return base*altura/2;
}

//Circulo
console.group("Circulo");
const PI = Math.PI;
function diametro(r) {
    return r*2;
}
function circunferencia(r) {
    const d = diametro(r);
    return PI * d;
}
function areaCirculo(r) {
    return PI*r**2;
}

//TRIGGERS
//cuadrado
function CalPeriCuadrado() {
    const res_peri = document.getElementById("res_peri_cua");
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimCuadrado(value);
    res_peri.innerHTML = perimetro.toFixed(2) + " cm";
}
function CalAreaCuadrado() {
    const res_area = document.getElementById("res_area_cua");
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    res_area.innerHTML = area.toFixed(2) + " cm^2";
}
//triangulo
function CalPeriTri() {
    const res_peri = document.getElementById("res_peri_tri");
    var input = document.getElementById("InputLado1");
    const lado1 = parseFloat(input.value);
    var input = document.getElementById("InputLado2");
    const lado2 = parseFloat(input.value);
    var input = document.getElementById("InputBase");
    const base = parseFloat(input.value);
    const perimetro = perimTri(lado1,lado2,base);
    res_peri.innerHTML = perimetro.toFixed(2) + " cm";
}
function CalAreaTri() {
    const res_area = document.getElementById("res_area_tri");
    var input = document.getElementById("InputBase");
    const base = input.value;
    var input = document.getElementById("InputAltura");
    const h = input.value;
    const area = areaTri(base,h);
    res_area.innerHTML = area.toFixed(2) + " cm^2";
}
//circulo
function CalPeriCir() {
    const res_peri = document.getElementById("res_peri_cir");
    var input = document.getElementById("InputCir")
    const r = input.value;
    const perimetro = circunferencia(r);
    res_peri.innerHTML = perimetro.toFixed(2) + " cm";
}
function CalAreaCir() {
    const res_area = document.getElementById("res_area_cir");
    var input = document.getElementById("InputCir")
    const r = input.value;
    const area = areaCirculo(r);
    res_area.innerHTML = area.toFixed(2) + " cm^2";
}