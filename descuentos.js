function precioFinal(precio, descuento) {
    precio = precio*(100-descuento)/100;
    return precio;
}
function CalPrecioFinal() {
    var res_precio = document.getElementById("res_precio");
    var ori_precio = document.getElementById("precio");
    var ori_desc = document.getElementById("desc")
    var input = document.getElementById("InputPrecio");
    const precio = input.value;
    var input = document.getElementById("InputDesc");
    const desc = input.value;
    ori_precio.innerHTML = precio;
    ori_desc.innerHTML = desc; 
    res_precio.innerHTML = precioFinal(precio,desc);
}