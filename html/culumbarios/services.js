// Valores declarados e inicializados, con cambios por delante.
let opt_0 = ["Familiar Definida", "Familiar Futuro", "Standar Definida", "Standar Futuro"];
let opt_1 = ["Familiar (MóC) Futuro", "Obra de Arte Definida", "Standar (MóC) Futuro", "Standar Sup Definida", "Standar Sup Futuro", "Standar Ónix Definida", "Familiar Ónix Definida", "Standar (MóC) Definida", "Familiar (MóC) Definida"];

let lugar = "0"
let lugarValue = 0
let servicio = "Bella-Vista"
let servicioLugar = servicio + lugarValue

let prima = 5
let descuento = 0.00.toFixed(2)
let descuento2 = 0.00.toFixed(2)
let descuentoTotal = 0.00.toFixed(2)
let descuentoYdescuento = 0.00.toFixed(2)
let precio = 2850.00.toFixed(2)
let resultadoPrima = 225.00.toFixed(2)
let precioTotal = 2850.00.toFixed(2)
let saldoFinanciar = 2707.50.toFixed(2)

let descuentoPorcentaje = 0;
let descuento2Value = 0;


let brand = "Bella-Vista"
let pdfname = "Familiar Definida"

let clientName = undefined
let clientpdf = false

let cantidadValor = 1

let precioYprecio = 7350.00.toFixed(2)
let precioIntegral = 7350.00.toFixed(2)

prima_function()

// PRUEBAS
function prueba() {
    integralChecking()
    previewChange()
    imgDatas()

    console.clear()

    i_prueba()

    console.log(`Empresa: ${brand} 
    Servicio: ${servicio}
    Lugar: ${lugar} 
    Valor Numerico: ${servicioLugar}
    Nombre del pdf: ${pdfname}

    Precio: ${precio}

    Descuento Total: ${descuentoTotal}

    Precio con Descuento: ${precioTotal}

    -Prima: ${resultadoPrima} 
    
    -Saldo a Financiar: ${saldoFinanciar}

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

    

    Integral

    Precio mas Precio ${precioYprecio}

    Descuento mas Descuento: ${descuentoYdescuento}
    
    Precio con Descuentos: ${precioIntegral}
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
    document.services.namepdf.value = lugar;
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
    if (servicio == "Bella-Vista") {
        brand = "Bella-Vista"
    } else {
        brand = "Hogar de las Memorias"
    }

    prueba()
}

function precio_function() {
    if (servicioLugar == "Bella-Vista0"){
        precio = 2850.00.toFixed(2)
    } else if (servicioLugar == "Bella-Vista1") {
        precio = 2450.00.toFixed(2)
    } else if (servicioLugar == "Bella-Vista2") {
        precio = 2300.00.toFixed(2)
    } else if (servicioLugar == "Bella-Vista3") {
        precio = 1450.00.toFixed(2)
    } else if (servicioLugar == "Hogar-Memorias0") {
        precio = 3500.00.toFixed(2)
    } else if (servicioLugar == "Hogar-Memorias1") {
        precio = 16500.00.toFixed(2)
    } else if (servicioLugar == "Hogar-Memorias2") {
        precio = 2075.00.toFixed(2)
    } else if (servicioLugar == "Hogar-Memorias3") {
        precio = 3700.00.toFixed(2)
    } else if (servicioLugar == "Hogar-Memorias4") {
        precio = 3100.00.toFixed(2)
    } else if (servicioLugar == "Hogar-Memorias5") {
        precio = 3600.00.toFixed(2)
    } else if (servicioLugar == "Hogar-Memorias6") {
        precio = 5200.00.toFixed(2)
    } else if (servicioLugar == "Hogar-Memorias7") {
        precio = 3250.00.toFixed(2)
    } else if (servicioLugar == "Hogar-Memorias8") {
        precio = 4100.00.toFixed(2)
    }

    prueba()
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

    if (integralChecked.checked) {
        resultadoPrima = ((precioIntegral * prima) / 100).toFixed(2)
    } else {
        resultadoPrima = ((precioTotal * prima) / 100).toFixed(2)
    }

    if (integralChecked.checked) {
        saldoFinanciar = (precioIntegral - resultadoPrima).toFixed(2)
    } else {
        saldoFinanciar = (precioTotal - resultadoPrima).toFixed(2)
    }

    if (integralChecked.checked) {
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
    } else {
        ano1 = (saldoFinanciar / 12).toFixed(2)
        ano2 = (saldoFinanciar * 0.05250).toFixed(2)
        ano3 = (saldoFinanciar * 0.03884).toFixed(2)
        ano4 = (saldoFinanciar * 0.03219).toFixed(2)
        ano5 = (saldoFinanciar * 0.02833).toFixed(2)
        ano6 = (saldoFinanciar * 0.02587).toFixed(2)
        ano7 = (saldoFinanciar * 0.02420).toFixed(2)
        ano8 = (saldoFinanciar * 0.02302).toFixed(2)
        ano9 = (saldoFinanciar * 0.02216).toFixed(2)
        ano10 = (saldoFinanciar * 0.02153).toFixed(2)
    }

    prueba()
}


function namepdf2() {
    pdfname = document.services.namepdf.value;
    document.preview_title_form.preview_title.value = pdfname;

    prueba()
}

function previewChange() {
    document.preview_form.servicio_preview.value = document.services.places.options[document.services.places.selectedIndex].text; 
    document.preview_form.precio_preview.value = precio;

    if (integralChecked.checked) {
        document.preview_form.descuento_preview.value = descuentoYdescuento;
    } else {
        document.preview_form.descuento_preview.value = descuentoTotal;
    }

    if (integralChecked.checked) {
        document.preview_form.especial_preview.value = precioIntegral;
    } else {
        document.preview_form.especial_preview.value = precioTotal;
    }

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

    if (integralChecked.checked) {
        document.i_services.i_servicioPrecio.value = i_precio;
        document.i_services.i_totalIntegral.value = precioYprecio;
    }

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

    if (integralChecked.checked) {
        i_preciopdf = document.i_services.i_servicioPrecio.value;
        precioYpreciopdf = document.i_services.i_totalIntegral.value;
    }
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
