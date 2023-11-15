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
let h6 = document.querySelector("h6");
const textbox1 = "A lavagem simples em um lava-jato envolve molhar o veículo, aplicar sabão para soltar a sujeira, esfregar e escovar para remover manchas, enxaguar para remover o sabão e secar para evitar manchas de água. Detalhes finais, como aplicação de produtos para brilho, podem ser incluídos antes da inspeção final e entrega ao cliente.";
const textbox2 = "Descubra a eficácia da lavagem a vapor, uma abordagem inovadora que vai além da limpeza convencional. Nossos serviços destacam-se ao usar vapor para eliminar sujeiras, germes e odores, proporcionando um ambiente mais saudável. Garantimos resultados impecáveis sem danificar superfícies delicadas, oferecendo um serviço personalizado que atende às suas necessidades.";
const textbox3 = "Renove seu veículo com a higienização especializada, uma abordagem que vai além da limpeza tradicional. Nossos serviços destacam-se ao utilizar técnicas avançadas para eliminar sujeiras, germes e odores, proporcionando um interior impecável e saudável. Escolha a excelência da higienização automotiva para um interior imaculado e eleve o padrão de limpeza do seu veiculo.";
const textbox4 = "Proporcione ao seu veículo um ar mais puro com nossos serviços de purificação de ar automotivo. Vá além da simples limpeza, eliminando odores e partículas prejudiciais. Utilizamos tecnologia avançada para garantir um interior mais fresco e saudável. Nossos serviços personalizados adaptam-se às suas necessidades, assegurando um ambiente agradável em cada viagem. Escolha a excelência da purificação de ar para carros e eleve a qualidade do ar no seu veículo.";


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
        if(nbox.innerHTML === "Lavagem Simples"){h6.innerHTML= textbox1}
        if(nbox.innerHTML === "Lavagem a vapor"){h6.innerHTML= textbox2}
        if(nbox.innerHTML === "Higienização"){h6.innerHTML= textbox3}
        if(nbox.innerHTML === "Purificação de ar"){h6.innerHTML= textbox4}

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
    body.style.height = "130vh"
})
})

btnConfirmar.addEventListener("click", function(){
    interface4.style.display = "none";
    interface5.style.display = "grid";
})




});