function createPDF(){
    const doc = new jsPDF();
    doc.addImage(imgData1, 10, 15, 190, 120)
    doc.addImage(imgData2, 5, 145, 195, 140)

    doc.addPage("a4","p")
    doc.addImage(imgLogo, logoStart, 3, logoWidth, 25)

    doc.addImage(cuadros, 50, 55, 110, 120)

    if (clientpdf == true){
        doc.text(`Cliente: ${clientName}`, 15, 21)
        doc.text(`Cliente:`, 15, 21)
        doc.text(`Cliente:`, 15, 21)
        doc.text(`Cliente:`, 15, 21)

        doc.line(15, 23, 36 + (clientName.length * 2.8), 23)
    }
    
    if (brand == "La Auxiliadora") {
        doc.text(brand, 87, 62);
        doc.text(brand, 87, 62);
        doc.text(brand, 87, 62);
        doc.text(brand, 87, 62);
    } else {
        doc.text(brand, 82, 62);
        doc.text(brand, 82, 62);
        doc.text(brand, 82, 62);
        doc.text(brand, 82, 62);
    }

    if (serviciopdf == "Deluxe" || serviciopdf == "Mónaco") {
        doc.text(serviciopdf, 96, 72);
        doc.text(serviciopdf, 96, 72);
        doc.text(serviciopdf, 96, 72);
        doc.text(serviciopdf, 96, 72);
    } else if (serviciopdf == "Preferencial") {
        doc.text(serviciopdf, 90, 72);
        doc.text(serviciopdf, 90, 72);
        doc.text(serviciopdf, 90, 72);
        doc.text(serviciopdf, 90, 72);
    } else if (serviciopdf == "Especial" || serviciopdf == "Brillante" || serviciopdf == "Esplendor" || serviciopdf == "Estrella") {
        doc.text(serviciopdf, 94, 72);
        doc.text(serviciopdf, 94, 72);
        doc.text(serviciopdf, 94, 72);
        doc.text(serviciopdf, 94, 72);
    } else if (serviciopdf == "Diamond") {
        doc.text(serviciopdf, 93.5, 72);
        doc.text(serviciopdf, 93.5, 72);
        doc.text(serviciopdf, 93.5, 72);
        doc.text(serviciopdf, 93.5, 72);
    } else {
        doc.text(serviciopdf, 100 - serviciopdf.length, 72); 
        doc.text(serviciopdf, 100 - serviciopdf.length, 72);
        doc.text(serviciopdf, 100 - serviciopdf.length, 72);
        doc.text(serviciopdf, 100 - serviciopdf.length, 72);
    }

    doc.text(`Precio de Lista`, 53, 81);
    doc.text(`Precio de Lista`, 53, 81);
    doc.text(`Precio de Lista`, 53, 81);
    doc.text(`Precio de Lista`, 53, 81);
    doc.text(`$ ${preciopdf.toString()}`, 130, 81.2);

    doc.text(`Descuento Especial`, 53, 89);
    doc.text(`Descuento Especial`, 53, 89);
    doc.text(`Descuento Especial`, 53, 89);
    doc.text(`Descuento Especial`, 53, 89);
    doc.text(`$ ${descuentopdf.toString()}`, 130, 89);

    doc.text(`Precio Especial`, 53, 97.4);
    doc.text(`Precio Especial`, 53, 97.4);
    doc.text(`Precio Especial`, 53, 97.4);
    doc.text(`Precio Especial`, 53, 97.4);
    doc.text(`$ ${especialpdf.toString()}`, 130, 97.4);

    doc.text(`Prima`, 53, 111.6);
    doc.text(`Prima`, 53, 111.6);
    doc.text(`Prima`, 53, 111.6);
    doc.text(`Prima`, 53, 111.6);
    doc.text(`$ ${primapdf.toString()}`, 130, 111.6);
    doc.text(`${prima.toString()}% =`, 108, 111.6);

    doc.text(`Saldo a Financiar`, 53, 120);
    doc.text(`Saldo a Financiar`, 53, 120);
    doc.text(`Saldo a Financiar`, 53, 120);
    doc.text(`Saldo a Financiar`, 53, 120);
    doc.text(`$ ${financiarpdf.toString()}`, 130, 120);

    doc.text(`Plan de Pago`, 60.5, 135.5);
    doc.text(`Plan de Pago`, 60.5, 135.5);
    doc.text(`Plan de Pago`, 60.5, 135.5);
    doc.text(`Plan de Pago`, 60.5, 135.5);

    doc.text(`1 año`, 70, 143.6);
    doc.text(`1 año`, 70, 143.6);
    doc.text(`1 año`, 70, 143.6);
    doc.text(`1 año`, 70, 143.6);
    doc.text(`1 año`, 70, 143.6);
    doc.text(`$ ${ano1pdf.toString()}`, 130, 143.6);

    doc.text(`2 años`, 69.7, 150.4);
    doc.text(`2 años`, 69.7, 150.4);
    doc.text(`2 años`, 69.7, 150.4);
    doc.text(`2 años`, 69.7, 150.4);
    doc.text(`2 años`, 69.7, 150.4);
    doc.text(`$ ${ano2pdf.toString()}`, 130, 150.4);

    doc.text(`3 años`, 69.7, 157.2);
    doc.text(`3 años`, 69.7, 157.2);
    doc.text(`3 años`, 69.7, 157.2);
    doc.text(`3 años`, 69.7, 157.2);
    doc.text(`3 años`, 69.7, 157.2);
    doc.text(`$ ${ano3pdf.toString()}`, 130, 157.2);

    doc.text(`4 años`, 69.7, 164);
    doc.text(`4 años`, 69.7, 164);
    doc.text(`4 años`, 69.7, 164);
    doc.text(`4 años`, 69.7, 164);
    doc.text(`4 años`, 69.7, 164);
    doc.text(`$ ${ano4pdf.toString()}`, 130, 164);

    doc.text(`5 años`, 69.7, 170.8);
    doc.text(`5 años`, 69.7, 170.8);
    doc.text(`5 años`, 69.7, 170.8);
    doc.text(`5 años`, 69.7, 170.8);
    doc.text(`5 años`, 69.7, 170.8);
    doc.text(`$ ${ano5pdf.toString()}`, 130, 170.8);

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