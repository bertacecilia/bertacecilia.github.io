// Valores declarados e inicializados, con cambios por delante.
let opt_0 = ["San Salvador", "Santa Tecla"];
let opt_1 = ["San Salvador", "Santa Tecla"];
let opt_2 = ["San Salvador", "Santa Tecla", "Santa Ana", "Sonsonate"];
let opt_3 = ["San Salvador", "Santa Tecla", "Santa Ana", "Sonsonate"];
let opt_4 = ["San Salvador", "Santa Tecla", "Santa Ana", "Sonsonate"];

let opt_5 = ["San Salvador"];
let opt_6 = ["San Salvador"];
let opt_7 = ["San Salvador", "Soyapango"];
let opt_8 = ["San Salvador", "Soyapango"];
let opt_9 = ["San Salvador", "Soyapango"];

let lugar = "San Salvador"
let lugarValue = 0
let servicio = "Brillante"
let servicioLugar = servicio + lugarValue

let prima = 5
let descuento = 0.00.toFixed(2)
let descuento2 = 0.00.toFixed(2)
let descuentoTotal = 0.00.toFixed(2)
let descuentoYdescuento = 0.00.toFixed(2)
let precio = 4500.00.toFixed(2)
let resultadoPrima = 225.00.toFixed(2)
let precioTotal = 4500.00.toFixed(2)
let saldoFinanciar = 4225.00.toFixed(2)

let descuentoPorcentaje = 0;
let descuento2Value = 0;

let brand = "La Auxiliadora"
let pdfname = "Servicio-Brillante"

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
    if (servicio == "Brillante" || servicio == "Esmeralda" || servicio == "Deluxe" || servicio == "Especial" || servicio == "Preferencial") {
        brand = "La Auxiliadora"
    } else {
        brand = "Capillas Memoriales"
    }

    prueba()
}

function precio_function() {
    if (servicioLugar == "Brillante0"){
        precio = 4500.00.toFixed(2)
    } else if (servicioLugar == "Brillante1") {
        precio = 4200.00.toFixed(2)
    } else if (servicioLugar == "Esmeralda0") {
        precio = 3750.00.toFixed(2)
    } else if (servicioLugar == "Esmeralda1") {
        precio = 3400.00.toFixed(2)
    } else if (servicioLugar == "Deluxe0") {
        precio = 2900.00.toFixed(2)
    } else if (servicioLugar == "Deluxe1") {
        precio = 2600.00.toFixed(2)
    } else if (servicioLugar == "Deluxe2") {
        precio = 2075.00.toFixed(2)
    } else if (servicioLugar == "Deluxe3") {
        precio = 2075.00.toFixed(2)
    } else if (servicioLugar == "Especial0") {
        precio = 2250.00.toFixed(2)
    } else if (servicioLugar == "Especial1") {
        precio = 1950.00.toFixed(2)
    } else if (servicioLugar == "Especial2") {
        precio = 1500.00.toFixed(2)
    } else if (servicioLugar == "Especial3") {
        precio = 1500.00.toFixed(2)
    } else if (servicioLugar == "Preferencial0") {
        precio = 1600.00.toFixed(2)
    } else if (servicioLugar == "Preferencial1") {
        precio = 1300.00.toFixed(2)
    } else if (servicioLugar == "Preferencial2") {
        precio = 970.00.toFixed(2)
    } else if (servicioLugar == "Preferencial3") {
        precio = 970.00.toFixed(2)
    } else if (servicioLugar == "Mónaco0") {
        precio = 4900.00.toFixed(2)
    } else if (servicioLugar == "Diamond0") {
        precio = 4200.00.toFixed(2)
    } else if (servicioLugar == "Elegance0") {
        precio = 3500.00.toFixed(2)
    } else if (servicioLugar == "Elegance1") {
        precio = 2300.00.toFixed(2)
    } else if (servicioLugar == "Esplendor0") {
        precio = 2750.00.toFixed(2)
    } else if (servicioLugar == "Esplendor1") {
        precio = 1700.00.toFixed(2)
    } else if (servicioLugar == "Estrella0") {
        precio = 2100.00.toFixed(2)
    } else if (servicioLugar == "Estrella1") {
        precio = 1100.00.toFixed(2)
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

    prueba()
}


function namepdf2() {
    pdfname = document.services.namepdf.value;
    document.preview_title_form.preview_title.value = pdfname;

    prueba()
}

function previewChange() {
    document.preview_form.servicio_preview.value = document.services.service_name.options[document.services.service_name.selectedIndex].text; 
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