// Valores declarados e inicializados, con cambios por delante.
let opt_0 = ["Jardineras de 8", "Jardineras de 4"];
let opt_1 = ["Propiedades (AC)", "Propiedades (BC)","Pirineos 1"];
let opt_2 = ["Pergolas", "Pergolas 2 (1 y 4)", "Bella Vista"];

let lugar = "Jardineras de 8"
let lugarValue = 0
let servicio = "Jardineras"
let servicioLugar = servicio + lugarValue

let prima = 5
let descuento = 0.00.toFixed(2)
let descuento2 = 0.00.toFixed(2)
let descuentoTotal = 0.00.toFixed(2)
let precio = 22190.00.toFixed(2)
let resultadoPrima = 1195.00.toFixed(2)
let precioTotal = 22190.00.toFixed(2)
let saldoFinanciar = 20805.00.toFixed(2)

let descuentoPorcentaje = 0;
let descuento2Value = 0;

let brand = "Jardineras"
let pdfname = "Servicio-Jardineras"

let clientName = undefined
let clientpdf = false

let cantidadValor = 1

let mantenimientoAnual = 4

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
        precio = 22190.00.toFixed(2)
    } else if (servicioLugar == "Jardineras1") {
        precio = 17190.00.toFixed(2)
    } else if (servicioLugar == "Lotes0") {
        precio = 6590.00.toFixed(2)
    } else if (servicioLugar == "Lotes1") {
        precio = 12190.00.toFixed(2)
    } else if (servicioLugar == "Lotes2") {
        precio = 2100.00.toFixed(2)
    } else if (servicioLugar == "Mausoleos0") {
        precio = 2190.00.toFixed(2)
    } else if (servicioLugar == "Mausoleos1") {
        precio = 1900.00.toFixed(2)
    } else if (servicioLugar == "Mausoleos2") {
        precio = 1900.00.toFixed(2)
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
    resultadoPrima = ((precioTotal * prima) / 100) + mantenimientoAnual
    resultadoPrima = resultadoPrima.toFixed(2)

    saldoFinanciar = ((precioTotal - resultadoPrima) + mantenimientoAnual).toFixed(2)

    ano1 = ((saldoFinanciar / 12) + mantenimientoAnual).toFixed(2)
    ano2 = ((saldoFinanciar * 0.05250) + mantenimientoAnual).toFixed(2)
    ano3 = ((saldoFinanciar * 0.03884) + mantenimientoAnual).toFixed(2)
    ano4 = ((saldoFinanciar * 0.03219) + mantenimientoAnual).toFixed(2)
    ano5 = ((saldoFinanciar * 0.02833) + mantenimientoAnual).toFixed(2)
    ano6 = ((saldoFinanciar * 0.02587) + mantenimientoAnual).toFixed(2)
    ano7 = ((saldoFinanciar * 0.02420) + mantenimientoAnual).toFixed(2)
    ano8 = ((saldoFinanciar * 0.02302) + mantenimientoAnual).toFixed(2)
    ano9 = ((saldoFinanciar * 0.02216) + mantenimientoAnual).toFixed(2)
    ano10 = ((saldoFinanciar * 0.02153) + mantenimientoAnual).toFixed(2)


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
