let marca = ["Crescent","Milwaukee","Crescent","Milwaukee","Crescent","Milwaukee","Crescent","Milwaukee","Crescent","Milwaukee","Milwaukee","Crescent","Milwaukee","Crescent","Milwaukee","Crescent","Milwaukee","Crescent",]
let fecha = ["12 de enero de 2003","10 de enero de 2010","12 de enero de 2013","10 de enero de 2050","12 de enero de 2003","10 de enero de 2010","12 de enero de 2003","10 de enero de 2010","12 de enero de 2003","10 de enero de 2010","12 de enero de 2003","10 de enero de 2010","12 de enero de 2013","10 de enero de 2050","12 de enero de 2003","10 de enero de 2010","12 de enero de 2003","10 de enero de 2010","12 de enero de 2003"]

let form = document.querySelector(".form")
let fragment = document.createDocumentFragment()

for(let i = 0; i <= 15; i++){
    let container = document.createElement("DIV");
    container.classList.add("container");
    
    let containerImg = document.createElement("DIV");
    containerImg.classList.add("container__img");
    let img = document.createElement("IMG");
    img.setAttribute("src","../../Images/descarga.jpg");
    containerImg.appendChild(img);
    container.appendChild(containerImg);
    
    let containerInfo = document.createElement("DIV");
    containerInfo.classList.add("container__info");
    
    let h3 = document.createElement("H3");
    h3.innerHTML = "Información";
    containerInfo.appendChild(h3);
    
    let p = document.createElement("P");
    p.innerHTML = `<b>Marca:</b> ${marca[i]}<br><b>Fecha de creación:</b> ${fecha[i]}`;
    containerInfo.appendChild(p);
    
    let input = document.createElement("INPUT");
    input.setAttribute("type","radio");
    input.setAttribute("name","radio");
    input.setAttribute("required","a");
    input.setAttribute("id",`radio${i}`);
    input.classList.add("radio");
    containerInfo.appendChild(input)
    
    let labelDiv = document.createElement("DIV")
    
    labelDiv.classList.add("centrar")
    let label = document.createElement("label")
    label.setAttribute("for",`radio${i}`)
    label.classList.add("label")
    labelDiv.appendChild(label)
    containerInfo.appendChild(labelDiv)
    
    container.appendChild(containerInfo);
    fragment.appendChild(container)
}
form.appendChild(fragment)

