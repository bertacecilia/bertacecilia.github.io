// Valores declarados e inicializados, con cambios por delante.
let i_opt_0 = ["Las Eternidades (8)", "La Entrada (8)", "Los Nuevos (8)", "Bella Vista (8)", "Las Eternidades (4)", "La Entrada (4)", "Los Nuevos (4)", "Bella Vista (4)"];
let i_opt_1 = ["Las Eternidades (BC)", "Las Eternidades (AC)", "La Entrada (BC)", "La Entrada (AC)", "Los Nuevos (BC)", "Los Nuevos (AC)", "Los Nuevos (AB)", "Los Nuevos (AA)"];

let i_lugar = "Las Eternidades (8)"
let i_lugarValue = 0
let i_servicio = "Jardineras"
let i_servicioLugar = i_servicio + i_lugarValue

let i_descuento = 0.00.toFixed(2)
let i_descuento2 = 0.00.toFixed(2)
let i_descuentoTotal = 0.00.toFixed(2)
let i_precio = 22000.00.toFixed(2)
let i_precioTotal = 22000.00.toFixed(2)
let i_saldoFinanciar = 20900.00.toFixed(2)

let i_descuentoPorcentaje = 0;
let i_descuento2Value = 0;

let i_brand = "La Auxiliadora"


let integralChecked = document.getElementById("integral-checkbox")

let mantenimientoAnual = 4

// let serviciopdf = "Brillante"
// let preciopdf = 4500.00.toFixed(2)
// let descuentopdf = 0.00.toFixed(2)
// let especialpdf = 4500.00.toFixed(2)
// let primapdf = 225.00.toFixed(2)
// let financiarpdf = 4275.00.toFixed(2)
// let ano1pdf = 394.50.toFixed(2)
// let ano2pdf = 216.02.toFixed(2)
// let ano3pdf = 157.23.toFixed(2)
// let ano4pdf = 128.38.toFixed(2)
// let ano5pdf = 111.49.toFixed(2)
// let cantidadValor = 1
// let cantidadPdf = 1


// PRUEBAS
function i_prueba() {
    console.log(`Empresa: ${i_brand} 
    Servicio: ${i_servicio}
    Lugar: ${i_lugar} 
    Valor Numerico: ${i_servicioLugar}

    Precio: ${i_precio}
    
    Descuento Total: ${i_descuentoTotal}
    
    Precio con Descuento: ${i_precioTotal}
    
    Saldo a Financiar: ${i_saldoFinanciar}
    `)
}



function i_change1(){
    i_service_name = document.i_services.i_service_name[document.i_services.i_service_name.selectedIndex].value;
    
    new_opt = eval("i_opt_" + i_service_name);
    num_opt = new_opt.length;

    document.i_services.i_places.length = num_opt;
    for(let i = 0; i < num_opt; i++){
        document.i_services.i_places.options[i].value = [i];
        document.i_services.i_places.options[i].text = new_opt[i];
    }
        
    i_lugar = document.i_services.i_places[document.i_services.i_places.selectedIndex].text;
    i_lugarValue = document.i_services.i_places[document.i_services.i_places.selectedIndex].value;

    i_servicio = document.i_services.i_service_name[document.i_services.i_service_name.selectedIndex].text;

    // document.i_services.namepdf.value = `Servicio-${servicio}`;
    // pdfname = document.i_services.namepdf.value;
    // document.preview_title_form.preview_title.value = pdfname;

    i_servicioLugar = i_servicio + i_lugarValue

    prueba()
}

function i_place(){
    i_lugar = document.i_services.i_places[document.i_services.i_places.selectedIndex].text;
    i_servicio = document.i_services.i_service_name[document.i_services.i_service_name.selectedIndex].text;

    i_lugarValue = document.i_services.i_places[document.i_services.i_places.selectedIndex].value;
    i_servicioLugar = i_servicio + i_lugarValue

    prueba()
}

function i_brand_function() {
    if (i_servicio == "Brillante" || i_servicio == "Esmeralda" || i_servicio == "Deluxe" || i_servicio == "Especial" || i_servicio == "Preferencial") {
        i_brand = "La Auxiliadora"
    } else {
        i_brand = "Capillas Memoriales"
    }

    prueba()
}

function i_precio_function() {
    if (i_servicioLugar == "Jardineras0"){
        i_precio = 22000.00.toFixed(2)
    } else if (i_servicioLugar == "Jardineras1") {
        i_precio = 16500.00.toFixed(2)
    } else if (i_servicioLugar == "Jardineras2") {
        i_precio = 14000.00.toFixed(2)
    } else if (i_servicioLugar == "Jardineras3") {
        i_precio = 22000.00.toFixed(2)
    } else if (i_servicioLugar == "Jardineras4") {
        i_precio = 17000.00.toFixed(2)
    } else if (i_servicioLugar == "Jardineras5") {
        i_precio = 13000.00.toFixed(2)
    } else if (i_servicioLugar == "Jardineras6") {
        i_precio = 10000.00.toFixed(2)
    } else if (i_servicioLugar == "Jardineras7") {
        i_precio = 17000.00.toFixed(2)
    } else if (i_servicioLugar == "Lotes0") {
        i_precio = 12000.00.toFixed(2)
    } else if (i_servicioLugar == "Lotes1") {
        i_precio = 6400.00.toFixed(2)
    } else if (i_servicioLugar == "Lotes2") {
        i_precio = 9500.00.toFixed(2)
    } else if (i_servicioLugar == "Lotes3") {
        i_precio = 5150.00.toFixed(2)
    } else if (i_servicioLugar == "Lotes4") {
        i_precio = 8500.00.toFixed(2)
    } else if (i_servicioLugar == "Lotes5") {
        i_precio = 4500.00.toFixed(2)
    } else if (i_servicioLugar == "Lotes6") {
        i_precio = 3800.00.toFixed(2)
    } else if (i_servicioLugar == "Lotes7") {
        i_precio = 3100.00.toFixed(2)
    }

    if (integralChecked.checked) {
        precioYprecio = (parseFloat(precio) + parseFloat(i_precio)).toFixed(2)
    }
}

function i_descuento_function() {
    i_descuentoPorcentaje = document.i_services.i_descuento[document.i_services.i_descuento.selectedIndex].value;
    i_descuento = (i_precio * i_descuentoPorcentaje) / 100

    i_precioDescuento = i_precio - i_descuento 

    i_descuento2Value = document.i_services.i_descuento2[document.i_services.i_descuento2.selectedIndex].value;

    if (i_descuento2Value == 0) {
        i_descuento2 = 0
    } else {
        i_descuento2 = ((i_precioDescuento * i_descuento2Value) / 100)
    }

    i_descuentoTotal = (i_descuento + i_descuento2).toFixed(2)

    i_precioTotal = (i_precioDescuento - i_descuento2).toFixed(2)

    prueba()
}

// function prima_function() {
//     prima = document.i_services.i_prima[document.i_services.i_prima.selectedIndex].value;
//     resultadoPrima = (precioTotal * prima) / 100
//     resultadoPrima = resultadoPrima.toFixed(2)

//     saldoFinanciar = (precioTotal - resultadoPrima).toFixed(2)

//     ano1 = (saldoFinanciar * 0.09228).toFixed(2)
//     ano2 = (saldoFinanciar * 0.05053).toFixed(2)
//     ano3 = (saldoFinanciar * 0.03678).toFixed(2)
//     ano4 = (saldoFinanciar * 0.03003).toFixed(2)
//     ano5 = (saldoFinanciar * 0.02608).toFixed(2)

//     prueba()
// }


// function namepdf2() {
//     pdfname = document.i_services.namepdf.value;
//     document.preview_title_form.preview_title.value = pdfname;

//     prueba()
// }

// function previewChange() {
//     document.preview_form.servicio_preview.value = servicio;
//     document.preview_form.precio_preview.value = precio;
//     document.preview_form.descuento_preview.value = descuentoTotal;
//     document.preview_form.especial_preview.value = precioTotal;
//     document.preview_form.prima_preview.value = resultadoPrima;
//     document.preview_form.financiar_preview.value = saldoFinanciar;
//     document.preview_form.ano1.value = ano1;
//     document.preview_form.ano2.value = ano2;
//     document.preview_form.ano3.value = ano3;
//     document.preview_form.ano4.value = ano4;
//     document.preview_form.ano5.value = ano5;
//     document.preview_form.cantidadpdf.value = cantidadValor;

//     previewform()
// }

// function previewform() {
//     serviciopdf = document.preview_form.servicio_preview.value;
//     preciopdf = document.preview_form.precio_preview.value;
//     descuentopdf = document.preview_form.descuento_preview.value;
//     especialpdf = document.preview_form.especial_preview.value;
//     primapdf = document.preview_form.prima_preview.value;
//     financiarpdf = document.preview_form.financiar_preview.value;
//     ano1pdf = document.preview_form.ano1.value;
//     ano2pdf = document.preview_form.ano2.value;
//     ano3pdf = document.preview_form.ano3.value;
//     ano4pdf = document.preview_form.ano4.value;
//     ano5pdf = document.preview_form.ano5.value;
//     cantidadPdf = document.preview_form.cantidadpdf.value;
// }

// function previewNombre() {
//     clientName = document.preview_form.client_name.value

//     if (clientName.length == 0) {
//         clientpdf = false;
//     } else {
//         clientpdf = true;
//     }
// }

function i_cantidadFunction() {
    cantidadValor = document.i_services.i_cantidad.value;
    if (cantidadValor == 0) {
        cantidadValor = 1
    }
    prueba()
}

function i_multiplicacion() {
    i_precio_function()
    i_precio = (i_precio * cantidadValor).toFixed(2)
    prueba()
}

let windowLength = window.innerWidth

let integralBox = document.getElementById("integral-box");
let integralOptions = document.getElementById("integral-options");

window.addEventListener("resize", function(){
    windowLength = window.innerWidth
    if (windowLength < 910) {
        if (integralChecked.checked) {
            integralBox.style.display = "flex"
            integralOptions.style.display = "block"
        } else {
            integralBox.style.display = "flex"
            integralOptions.style.display = "none"
        }
    } else {
        if (integralChecked.checked) {
            integralBox.style.display = "block"
            integralOptions.style.display = "block"
        } else {
            integralBox.style.display = "inline-block"
            integralOptions.style.display = "none"
        }
    }
})

let icreatepdf = document.box.i_createpdf

function integral() {
    windowLength = window.innerWidth
    if (windowLength < 910) {
        if (integralChecked.checked) {
            integralBox.style.display = "flex"
            integralOptions.style.display = "block"
        } else {
            integralBox.style.display = "flex"
            integralOptions.style.display = "none"
        }
    } else {
        if (integralChecked.checked) {
            integralBox.style.display = "block"
            integralOptions.style.display = "block"
        } else {
            integralBox.style.display = "inline-block"
            integralOptions.style.display = "none"
        }
    }

    prueba()

    if (integralChecked.checked) {
        icreatepdf.setAttribute("onclick", "i_createPDF()")
    } else {
        icreatepdf.setAttribute("onclick", "createPDF()")
    }
}

function integralChecking() {
    if (integralChecked.checked) {
        precioYprecio = (parseFloat(precio) + parseFloat(i_precio)).toFixed(2)
        
        descuentoYdescuento = (parseFloat(descuentoTotal) + parseFloat(i_descuentoTotal)).toFixed(2)

        precioIntegral = (parseFloat(precioTotal) + parseFloat(i_precioTotal)).toFixed(2)
    }

    if (integralChecked.checked) {
        resultadoPrima = ((precioIntegral * prima) / 100) + mantenimientoAnual
        resultadoPrima = resultadoPrima.toFixed(2)
    } else {
        resultadoPrima = ((precioTotal * prima) / 100).toFixed(2)
    }

    if (integralChecked.checked) {
        saldoFinanciar = ((precioIntegral - resultadoPrima) + mantenimientoAnual).toFixed(2)
    } else {
        saldoFinanciar = (precioTotal - resultadoPrima).toFixed(2)
    }

    if (integralChecked.checked) {
        ano1 = ((saldoFinanciar / 12) + mantenimientoAnual).toFixed(2)
    ano2 = ((saldoFinanciar * 0.05053) + mantenimientoAnual).toFixed(2)
    ano3 = ((saldoFinanciar * 0.03678) + mantenimientoAnual).toFixed(2)
    ano4 = ((saldoFinanciar * 0.03003) + mantenimientoAnual).toFixed(2)
    ano5 = ((saldoFinanciar * 0.02608) + mantenimientoAnual).toFixed(2)
    ano6 = ((saldoFinanciar * 0.02352) + mantenimientoAnual).toFixed(2)
    ano7 = ((saldoFinanciar * 0.02176) + mantenimientoAnual).toFixed(2)
    ano8 = ((saldoFinanciar * 0.02049) + mantenimientoAnual).toFixed(2)
    ano9 = ((saldoFinanciar * 0.01955) + mantenimientoAnual).toFixed(2)
    ano10 = ((saldoFinanciar * 0.01883) + mantenimientoAnual).toFixed(2)
    } else {
        ano1 = (saldoFinanciar / 12).toFixed(2)
    ano2 = (saldoFinanciar * 0.05053).toFixed(2)
    ano3 = (saldoFinanciar * 0.03678).toFixed(2)
    ano4 = (saldoFinanciar * 0.03003).toFixed(2)
    ano5 = (saldoFinanciar * 0.02608).toFixed(2)
    ano6 = (saldoFinanciar * 0.02352).toFixed(2)
    ano7 = (saldoFinanciar * 0.02176).toFixed(2)
    ano8 = (saldoFinanciar * 0.02049).toFixed(2)
    ano9 = (saldoFinanciar * 0.01955).toFixed(2)
    ano10 = (saldoFinanciar * 0.01883).toFixed(2)
    }
}
