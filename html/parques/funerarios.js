function createPDF(){
    const doc = new jsPDF();
    doc.addImage(imgData2, 5, 145, 195, 140)

    doc.addImage(imgData1, 30, 10, 150, 60)
    doc.addImage(imgData3, 10, 70, 95, 70)
    doc.addImage(imgData4, 105, 70, 95, 70)

    doc.addPage("a4","p")
    doc.addImage(imgLogo, 160, 3, 40, 25)

    doc.addImage(cuadros, 45, 34, 115, 150)

    if (clientpdf == true){
        doc.text(`Cliente: ${clientName}`, 15, 21)
        doc.text(`Cliente:`, 15, 21)
        doc.text(`Cliente:`, 15, 21)
        doc.text(`Cliente:`, 15, 21)

        doc.line(15, 23, 36 + (clientName.length * 2.8), 23)
    }
    
    if (brand == "Jardineras") {
        doc.text(brand, 91, 42);
        doc.text(brand, 91, 42);
        doc.text(brand, 91, 42);
        doc.text(brand, 91, 42);
    } else {
        doc.text(brand, 99, 42);
        doc.text(brand, 99, 42);
        doc.text(brand, 99, 42);
        doc.text(brand, 99, 42);
    }

        doc.text(serviciopdf, 100 - serviciopdf.length, 50.6); 
        doc.text(serviciopdf, 100 - serviciopdf.length, 50.6);
        doc.text(serviciopdf, 100 - serviciopdf.length, 50.6);
        doc.text(serviciopdf, 100 - serviciopdf.length, 50.6);

    doc.text(`Precio de Lista`, 50, 59.7);
    doc.text(`Precio de Lista`, 50, 59.7);
    doc.text(`Precio de Lista`, 50, 59.7);
    doc.text(`Precio de Lista`, 50, 59.7);
    doc.text(`$ ${preciopdf.toString()}`, 127, 59.7);

    doc.text(`Descuento Especial`, 50, 67);
    doc.text(`Descuento Especial`, 50, 67);
    doc.text(`Descuento Especial`, 50, 67);
    doc.text(`Descuento Especial`, 50, 67);
    doc.text(`$ ${descuentopdf.toString()}`, 127, 67);

    doc.text(`Precio Especial`, 50, 75.4);
    doc.text(`Precio Especial`, 50, 75.4);
    doc.text(`Precio Especial`, 50, 75.4);
    doc.text(`Precio Especial`, 50, 75.4);
    doc.text(`$ ${especialpdf.toString()}`, 127, 75.4);

    doc.text(`Prima`, 50, 88);
    doc.text(`Prima`, 50, 88);
    doc.text(`Prima`, 50, 88);
    doc.text(`Prima`, 50, 88);
    doc.text(`$ ${primapdf.toString()}`, 127, 88);
    doc.text(`${prima.toString()}% =`, 105, 88);

    doc.text(`Saldo a Financiar`, 50, 96);
    doc.text(`Saldo a Financiar`, 50, 96);
    doc.text(`Saldo a Financiar`, 50, 96);
    doc.text(`Saldo a Financiar`, 50, 96);
    doc.text(`$ ${financiarpdf.toString()}`, 127, 96);

    doc.text(`Plan de Pago`, 57.5, 110.6);
    doc.text(`Plan de Pago`, 57.5, 110.6);
    doc.text(`Plan de Pago`, 57.5, 110.6);
    doc.text(`Plan de Pago`, 57.5, 110.6);

    doc.text(`1 año`, 67, 119);
    doc.text(`1 año`, 67, 119);
    doc.text(`1 año`, 67, 119);
    doc.text(`1 año`, 67, 119);
    doc.text(`1 año`, 67, 119);
    doc.text(`$ ${ano1pdf.toString()}`, 127, 119);

    doc.text(`2 años`, 66.7, 125.8);
    doc.text(`2 años`, 66.7, 125.8);
    doc.text(`2 años`, 66.7, 125.8);
    doc.text(`2 años`, 66.7, 125.8);
    doc.text(`2 años`, 66.7, 125.8);
    doc.text(`$ ${ano2pdf.toString()}`, 127, 125.8);

    doc.text(`3 años`, 66.7, 132.6);
    doc.text(`3 años`, 66.7, 132.6);
    doc.text(`3 años`, 66.7, 132.6);
    doc.text(`3 años`, 66.7, 132.6);
    doc.text(`3 años`, 66.7, 132.6);
    doc.text(`$ ${ano3pdf.toString()}`, 127, 132.6);

    doc.text(`4 años`, 66.7, 139.4);
    doc.text(`4 años`, 66.7, 139.4);
    doc.text(`4 años`, 66.7, 139.4);
    doc.text(`4 años`, 66.7, 139.4);
    doc.text(`4 años`, 66.7, 139.4);
    doc.text(`$ ${ano4pdf.toString()}`, 127, 139.4);

    doc.text(`5 años`, 66.7, 146.2);
    doc.text(`5 años`, 66.7, 146.2);
    doc.text(`5 años`, 66.7, 146.2);
    doc.text(`5 años`, 66.7, 146.2);
    doc.text(`5 años`, 66.7, 146.2);
    doc.text(`$ ${ano5pdf.toString()}`, 127, 146.2);

    doc.text(`6 años`, 66.7, 153);
    doc.text(`6 años`, 66.7, 153);
    doc.text(`6 años`, 66.7, 153);
    doc.text(`6 años`, 66.7, 153);
    doc.text(`6 años`, 66.7, 153);
    doc.text(`$ ${ano6pdf.toString()}`, 127, 153);

    doc.text(`7 años`, 66.7, 159.8);
    doc.text(`7 años`, 66.7, 159.8);
    doc.text(`7 años`, 66.7, 159.8);
    doc.text(`7 años`, 66.7, 159.8);
    doc.text(`7 años`, 66.7, 159.8);
    doc.text(`$ ${ano7pdf.toString()}`, 127, 159.8);

    doc.text(`8 años`, 66.7, 166.6);
    doc.text(`8 años`, 66.7, 166.6);
    doc.text(`8 años`, 66.7, 166.6);
    doc.text(`8 años`, 66.7, 166.6);
    doc.text(`8 años`, 66.7, 166.6);
    doc.text(`$ ${ano8pdf.toString()}`, 127, 166.6);

    doc.text(`9 años`, 66.7, 173.4);
    doc.text(`9 años`, 66.7, 173.4);
    doc.text(`9 años`, 66.7, 173.4);
    doc.text(`9 años`, 66.7, 173.4);
    doc.text(`9 años`, 66.7, 173.4);
    doc.text(`$ ${ano9pdf.toString()}`, 127, 173.4);

    doc.text(`10 años`, 65, 180.2);
    doc.text(`10 años`, 65, 180.2);
    doc.text(`10 años`, 65, 180.2);
    doc.text(`10 años`, 65, 180.2);
    doc.text(`10 años`, 65, 180.2);
    doc.text(`$ ${ano10pdf.toString()}`, 127, 180.2);

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