const body = document.querySelector("body");
const container = document.querySelector("#container");
const box = document.querySelectorAll(".box");
const interface2 = document.querySelector("#interface2");
const labelEmp= document.querySelector("#lab-emp");
const btnAgende = document.querySelector("#agende");
const interface3= document.querySelector("#interface3");
const boxinf3 = document.querySelectorAll(".box-inf3");
const hora = document.querySelectorAll(".hora");
const interface4 = document.querySelector("#interface4");
const h4pedidos = document.querySelectorAll(".h4-info");
const btnConfirmar = document.querySelector("#btn-confirmar");
const interface5 = document.querySelector("#interface5");


let lavagem, horario, local, telefone;
lavagem = ""; horario = ""; local = ""; telefone = "";


document.addEventListener('DOMContentLoaded', function() {

box.forEach((nbox) =>{

    nbox.addEventListener("click", function(){

        box[0].style.display = "none";
        box[1].style.display = "none";
        box[2].style.display = "none";
        box[3].style.display = "none";
        

        interface2.style.display = "grid";
        container.style.gridTemplateColumns = "1fr";
        container.style.padding ="0px";
        labelEmp.innerHTML = nbox.innerHTML;
        labelEmp.style.display = "grid";
        lavagem = nbox.innerHTML;   
        container.style.height = "100%";
        container.style.width = "100%";
        container.style.margin = "0px 0px";
        body.style.backgroundImage = "none";
        body.style.height = "100vh";
        container.style.boxShadow = "none";
    })
})

//Abaixo os comandos da interface2
btnAgende.addEventListener("click", function(){
    interface2.style.display = "none";
    interface3.style.display = "grid";
})





//Abaixo interface 3
hora.forEach((horinha) =>{

horinha.addEventListener("click",function(){
    horario = horinha.innerHTML;
    interface3.style.display="none";
    interface4.style.display="grid";
    h4pedidos[0].innerHTML+=" "+ lavagem;
    h4pedidos[1].innerHTML+=" "+ horario;
    h4pedidos[2].innerHTML+="Cep:13216000 <br> Rua: Avenida São João <br>Bairro: Vila Joana <br>Cidade: Jundiaí <br>Estado: SP"
    container.style.gridTemplateRows = "1fr 2fr";
})
})

btnConfirmar.addEventListener("click", function(){
    interface4.style.display = "none";
    interface5.style.display = "grid";
})




});