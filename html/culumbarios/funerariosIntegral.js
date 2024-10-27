function i_createPDF(){
    const doc = new jsPDF();
    doc.addImage(imgData2, 5, 145, 195, 140)

    if (brand == "Bella-Vista") {
        doc.addImage(imgData1, 30, 10, 150, 60)
        doc.addImage(imgData3, 10, 70, 95, 70)
        doc.addImage(imgData4, 105, 70, 95, 70)
    } else {
        doc.addImage(imgData1, 10, 15, 190, 120)
    }

    doc.addPage("a4","p")
    doc.addImage(imgLogo, logoStart, 3, logoWidth, 25)

    doc.addImage(cuadros, 50, 54, 115, 122.5)

    if (clientpdf == true){
        doc.text(`Cliente: ${clientName}`, 15, 21)
        doc.text(`Cliente:`, 15, 21) 
        doc.text(`Cliente:`, 15, 21)
        doc.text(`Cliente:`, 15, 21)

        doc.line(15, 23, 36 + (clientName.length * 2.8), 23)
    }
    
    doc.text(`Columbario`, 61.4, 60.4);
    doc.text(`Columbario`, 61.4, 60.4);
    doc.text(`Columbario`, 61.4, 60.4);
    doc.text(`Columbario`, 61.4, 60.4);

    doc.text(`Servicio Funerario`, 110.2, 60.4);
    doc.text(`Servicio Funerario`, 110.2, 60.4);
    doc.text(`Servicio Funerario`, 110.2, 60.4);
    doc.text(`Servicio Funerario`, 110.2, 60.4);

    
    doc.text(`Precio Columbario`, 54.87, 66.98);
    doc.text(`Precio Columbario`, 54.87, 66.98);
    doc.text(`Precio Columbario`, 54.87, 66.98);
    doc.text(`Precio Columbario`, 54.87, 66.98);
    
    doc.text(`$ ${preciopdf.toString()}`, 54.87, 73);
    
    doc.text(`Precio Servicio`, 114.2, 66.98);
    doc.text(`Precio Servicio`, 114.2, 66.98);
    doc.text(`Precio Servicio`, 114.2, 66.98);
    doc.text(`Precio Servicio`, 114.2, 66.98);

    doc.text(`$ ${i_preciopdf.toString()}`, 114.2, 73);
    
    doc.text(`Precio Total`, 53, 79.6);
    doc.text(`Precio Total`, 53, 79.6);
    doc.text(`Precio Total`, 53, 79.6);
    doc.text(`Precio Total`, 53, 79.6);

    doc.text(`$ ${precioYpreciopdf.toString()}`, 130, 79.6);

    doc.text(`Descuento Especial`, 53, 86.4);
    doc.text(`Descuento Especial`, 53, 86.4);
    doc.text(`Descuento Especial`, 53, 86.4);
    doc.text(`Descuento Especial`, 53, 86.4);
    doc.text(`$ ${descuentopdf.toString()}`, 130, 86.53);

    doc.text(`Precio Especial`, 53, 93.2);
    doc.text(`Precio Especial`, 53, 93.2);
    doc.text(`Precio Especial`, 53, 93.2);
    doc.text(`Precio Especial`, 53, 93.2);
    doc.text(`$ ${especialpdf.toString()}`, 130, 93.2);

    doc.text(`Prima`, 53, 102.2);
    doc.text(`Prima`, 53, 102.2);
    doc.text(`Prima`, 53, 102.2);
    doc.text(`Prima`, 53, 102.2); 
    doc.text(`$ ${primapdf.toString()}`, 130, 102.2);
    doc.text(`${prima.toString()}% =`, 108, 102.2);

    doc.text(`Saldo a Financiar`, 53, 109.3);
    doc.text(`Saldo a Financiar`, 53, 109.3);
    doc.text(`Saldo a Financiar`, 53, 109.3);
    doc.text(`Saldo a Financiar`, 53, 109.3);
    doc.text(`$ ${financiarpdf.toString()}`, 130, 109.3);

    doc.text(`Plan de Pago`, 60.5, 116.8);
    doc.text(`Plan de Pago`, 60.5, 116.8);
    doc.text(`Plan de Pago`, 60.5, 116.8);
    doc.text(`Plan de Pago`, 60.5, 116.8);

    doc.text(`1 año`, 70, 122.1);
    doc.text(`1 año`, 70, 122.1);
    doc.text(`1 año`, 70, 122.1);
    doc.text(`1 año`, 70, 122.1);
    doc.text(`1 año`, 70, 122.1);
    doc.text(`$ ${ano1pdf.toString()}`, 130, 122.1);

    doc.text(`2 año`, 70, 128.7);
    doc.text(`2 año`, 70, 128.7);
    doc.text(`2 año`, 70, 128.7);
    doc.text(`2 año`, 70, 128.7);
    doc.text(`2 año`, 70, 128.7);
    doc.text(`$ ${ano2pdf.toString()}`, 130, 128.7);

    doc.text(`3 año`, 70, 134.3);
    doc.text(`3 año`, 70, 134.3);
    doc.text(`3 año`, 70, 134.3);
    doc.text(`3 año`, 70, 134.3);
    doc.text(`3 año`, 70, 134.3);
    doc.text(`$ ${ano3pdf.toString()}`, 130, 134.3);

    doc.text(`4 año`, 70, 139.9);
    doc.text(`4 año`, 70, 139.9);
    doc.text(`4 año`, 70, 139.9);
    doc.text(`4 año`, 70, 139.9);
    doc.text(`4 año`, 70, 139.9);
    doc.text(`$ ${ano4pdf.toString()}`, 130, 139.9);

    doc.text(`5 año`, 70, 145.5);
    doc.text(`5 año`, 70, 145.5);
    doc.text(`5 año`, 70, 145.5);
    doc.text(`5 año`, 70, 145.5);
    doc.text(`5 año`, 70, 145.5);
    doc.text(`$ ${ano5pdf.toString()}`, 130, 145.5);

    doc.text(`6 año`, 70, 151.1);
    doc.text(`6 año`, 70, 151.1);
    doc.text(`6 año`, 70, 151.1);
    doc.text(`6 año`, 70, 151.1);
    doc.text(`6 año`, 70, 151.1);
    doc.text(`$ ${ano6pdf.toString()}`, 130, 151.1);

    doc.text(`7 años`, 69.7, 156.7);
    doc.text(`7 años`, 69.7, 156.7);
    doc.text(`7 años`, 69.7, 156.7);
    doc.text(`7 años`, 69.7, 156.7);
    doc.text(`7 años`, 69.7, 156.7);
    doc.text(`$ ${ano7pdf.toString()}`, 130, 156.7);

    doc.text(`8 años`, 69.7, 162.3);
    doc.text(`8 años`, 69.7, 162.3);
    doc.text(`8 años`, 69.7, 162.3);
    doc.text(`8 años`, 69.7, 162.3);
    doc.text(`8 años`, 69.7, 162.3);
    doc.text(`$ ${ano8pdf.toString()}`, 130, 162.3);

    doc.text(`9 años`, 69.7, 167.9);
    doc.text(`9 años`, 69.7, 167.9);
    doc.text(`9 años`, 69.7, 167.9);
    doc.text(`9 años`, 69.7, 167.9);
    doc.text(`9 años`, 69.7, 167.9);
    doc.text(`$ ${ano9pdf.toString()}`, 130, 167.9);

    doc.text(`10 años`, 69, 173.5);
    doc.text(`10 años`, 69, 173.5);
    doc.text(`10 años`, 69, 173.5);
    doc.text(`10 años`, 69, 173.5);
    doc.text(`10 años`, 69, 173.5);
    doc.text(`$ ${ano10pdf.toString()}`, 130, 173.5);

    doc.text(`Asesora: Cecilia Alfaro`, 40, 198);
    doc.text(`Asesora:`, 40, 198);
    doc.text(`Asesora:`, 40, 198);
    doc.text(`Asesora:`, 40, 198);
    doc.text(`Contacto: 7695-2624`, 40, 204);
    doc.text(`Contacto:`, 40, 204);
    doc.text(`Contacto:`, 40, 204);
    doc.text(`Contacto:`, 40, 204);

    doc.save(pdfname);
}