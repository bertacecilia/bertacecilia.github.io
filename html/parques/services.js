// Valores declarados e inicializados, con cambios por delante.
let opt_0 = ["Las Eternidades (8)", "La Entrada (8)", "Los Nuevos (8)", "Bella Vista (8)", "Las Eternidades (4)", "La Entrada (4)", "Los Nuevos (4)", "Bella Vista (4)"];
let opt_1 = ["Las Eternidades (BC)", "Las Eternidades (AC)", "La Entrada (BC)", "La Entrada (AC)", "Los Nuevos (BC)", "Los Nuevos (AC)", "Los Nuevos (AB)", "Los Nuevos (AA)"];


let lugar = "Las Eternidades (8)"
let lugarValue = 0
let servicio = "Jardineras"
let servicioLugar = servicio + lugarValue

let prima = 5
let descuento = 0.00.toFixed(2)
let descuento2 = 0.00.toFixed(2)
let descuentoTotal = 0.00.toFixed(2)
let precio = 22000.00.toFixed(2)
let resultadoPrima = 1100.00.toFixed(2)
let precioTotal = 22000.00.toFixed(2)
let saldoFinanciar = 20900.00.toFixed(2)

let descuentoPorcentaje = 0;
let descuento2Value = 0;

let brand = "Jardineras"
let pdfname = "Servicio-Jardineras"

let clientName = undefined
let clientpdf = false

let cantidadValor = 1

let mantenimientoAnual = 48

prima_function()
// PRUEBAS
function prueba() {
    previewChange()
    imgDatas()

    console.clear()
    console.log(`Empresa: ${brand} 
    Servicio: ${servicio}
    Lugar: ${lugar} 
    Precio: ${precio}
    Descuento Total: ${descuentoTotal}
    Precio con Descuento: ${precioTotal}
    Prima: ${resultadoPrima} 
    Valor Numerico: ${servicioLugar}
    Nombre del pdf: ${pdfname}
    
    Saldo a Financiar: ${saldoFinanciar}
    Año 1: ${ano1}
    Año 2: ${ano2}
    Año 3: ${ano3}
    Año 4: ${ano4}
    Año 5: ${ano5}
    Año 6: ${ano6}
    Año 7: ${ano7}
    Año 8: ${ano8}
    Año 9: ${ano9}
    Año 10: ${ano10}
    `)
}


prueba()

function change1(){
    service_name = document.services.service_name[document.services.service_name.selectedIndex].value;
    
    new_opt = eval("opt_" + service_name);
    num_opt = new_opt.length;

    document.services.places.length = num_opt;
    for(let i = 0; i < num_opt; i++){
        document.services.places.options[i].value = [i];
        document.services.places.options[i].text = new_opt[i];
    }
        
    lugar = document.services.places[document.services.places.selectedIndex].text;
    lugarValue = document.services.places[document.services.places.selectedIndex].value;

    servicio = document.services.service_name[document.services.service_name.selectedIndex].text;
    document.services.namepdf.value = `Servicio-${servicio}`;
    pdfname = document.services.namepdf.value;
    document.preview_title_form.preview_title.value = pdfname;

    servicioLugar = servicio + lugarValue

    prueba()
}

function place(){
    lugar = document.services.places[document.services.places.selectedIndex].text;
    servicio = document.services.service_name[document.services.service_name.selectedIndex].text;

    lugarValue = document.services.places[document.services.places.selectedIndex].value;
    servicioLugar = servicio + lugarValue

    prueba()
}

function brand_function() {
    if (servicio == "Jardineras"){
        brand = "Jardineras"
    } else {
        brand = "Lotes"
    }

    prueba()
}

function precio_function() {

    if (servicioLugar == "Jardineras0"){
        precio = 22000.00.toFixed(2)
    } else if (servicioLugar == "Jardineras1") {
        precio = 16500.00.toFixed(2)
    } else if (servicioLugar == "Jardineras2") {
        precio = 14000.00.toFixed(2)
    } else if (servicioLugar == "Jardineras3") {
        precio = 22000.00.toFixed(2)
    } else if (servicioLugar == "Jardineras4") {
        precio = 17000.00.toFixed(2)
    } else if (servicioLugar == "Jardineras5") {
        precio = 13000.00.toFixed(2)
    } else if (servicioLugar == "Jardineras6") {
        precio = 10000.00.toFixed(2)
    } else if (servicioLugar == "Jardineras7") {
        precio = 17000.00.toFixed(2)
    } else if (servicioLugar == "Lotes0") {
        precio = 12000.00.toFixed(2)
    } else if (servicioLugar == "Lotes1") {
        precio = 6400.00.toFixed(2)
    } else if (servicioLugar == "Lotes2") {
        precio = 9500.00.toFixed(2)
    } else if (servicioLugar == "Lotes3") {
        precio = 5150.00.toFixed(2)
    } else if (servicioLugar == "Lotes4") {
        precio = 8500.00.toFixed(2)
    } else if (servicioLugar == "Lotes5") {
        precio = 4500.00.toFixed(2)
    } else if (servicioLugar == "Lotes6") {
        precio = 3800.00.toFixed(2)
    } else if (servicioLugar == "Lotes7") {
        precio = 3100.00.toFixed(2)
    }
}

function descuento_function() {
    descuentoPorcentaje = document.services.descuento[document.services.descuento.selectedIndex].value;
    descuento = (precio * descuentoPorcentaje) / 100

    precioDescuento = precio - descuento 

    descuento2Value = document.services.descuento2[document.services.descuento2.selectedIndex].value;

    if (descuento2Value == 0) {
        descuento2 = 0
    } else {
        descuento2 = ((precioDescuento * descuento2Value) / 100)
    }

    descuentoTotal = (descuento + descuento2).toFixed(2)

    precioTotal = (precioDescuento - descuento2).toFixed(2)

    prueba()
}

function prima_function() {
    prima = document.services.prima[document.services.prima.selectedIndex].value;
    resultadoPrima = (precioTotal * prima) / 100
    resultadoPrima = resultadoPrima.toFixed(2)

    saldoFinanciar = (precioTotal - resultadoPrima).toFixed(2)

    ano1 = ((saldoFinanciar / 12) + mantenimientoAnual).toFixed(2)
    ano2 = ((saldoFinanciar * 0.05250) + (mantenimientoAnual * 2)).toFixed(2)
    ano3 = ((saldoFinanciar * 0.03884) + (mantenimientoAnual * 3)).toFixed(2)
    ano4 = ((saldoFinanciar * 0.03219) + (mantenimientoAnual * 4)).toFixed(2)
    ano5 = ((saldoFinanciar * 0.02833) + (mantenimientoAnual * 5)).toFixed(2)
    ano6 = ((saldoFinanciar * 0.02587) + (mantenimientoAnual * 6)).toFixed(2)
    ano7 = ((saldoFinanciar * 0.02420) + (mantenimientoAnual * 7)).toFixed(2)
    ano8 = ((saldoFinanciar * 0.02302) + (mantenimientoAnual * 8)).toFixed(2)
    ano9 = ((saldoFinanciar * 0.02216) + (mantenimientoAnual * 9)).toFixed(2)
    ano10 = ((saldoFinanciar * 0.02156) + (mantenimientoAnual * 10)).toFixed(2)


    prueba()
}


function namepdf2() {
    pdfname = document.services.namepdf.value;
    document.preview_title_form.preview_title.value = pdfname;

    prueba()
}

function previewChange() {
    document.preview_form.servicio_preview.value = lugar;
    document.preview_form.precio_preview.value = precio;
    document.preview_form.descuento_preview.value = descuentoTotal;
    document.preview_form.especial_preview.value = precioTotal;
    document.preview_form.prima_preview.value = resultadoPrima;
    document.preview_form.financiar_preview.value = saldoFinanciar;
    document.preview_form.ano1.value = ano1;
    document.preview_form.ano2.value = ano2;
    document.preview_form.ano3.value = ano3;
    document.preview_form.ano4.value = ano4;
    document.preview_form.ano5.value = ano5;

    document.preview_form.ano6.value = ano6;
    document.preview_form.ano7.value = ano7;
    document.preview_form.ano8.value = ano8;
    document.preview_form.ano9.value = ano9;
    document.preview_form.ano10.value = ano10;
    document.preview_form.cantidadpdf.value = cantidadValor;

    previewform()
}

function previewform() {
    serviciopdf = document.preview_form.servicio_preview.value;
    preciopdf = document.preview_form.precio_preview.value;
    descuentopdf = document.preview_form.descuento_preview.value;
    especialpdf = document.preview_form.especial_preview.value;
    primapdf = document.preview_form.prima_preview.value;
    financiarpdf = document.preview_form.financiar_preview.value;
    ano1pdf = document.preview_form.ano1.value;
    ano2pdf = document.preview_form.ano2.value;
    ano3pdf = document.preview_form.ano3.value;
    ano4pdf = document.preview_form.ano4.value;
    ano5pdf = document.preview_form.ano5.value;

    ano6pdf = document.preview_form.ano6.value;
    ano7pdf = document.preview_form.ano7.value;
    ano8pdf = document.preview_form.ano8.value;
    ano9pdf = document.preview_form.ano9.value;
    ano10pdf = document.preview_form.ano10.value;
    cantidadPdf = document.preview_form.cantidadpdf.value;
}

function previewNombre() {
    clientName = document.preview_form.client_name.value

    if (clientName.length == 0) {
        clientpdf = false;
    } else {
        clientpdf = true;
    }
}

function cantidadFunction() {
    cantidadValor = document.services.cantidad.value;
    if (cantidadValor == 0) {
        cantidadValor = 1
    }
    previewChange()
}

function multiplicacion() {
    precio_function()
    precio = (precio * cantidadValor).toFixed(2)
    previewChange()
    prueba()
}
