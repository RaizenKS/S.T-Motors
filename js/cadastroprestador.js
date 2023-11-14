document.addEventListener("DOMContentLoaded", function () {
    // Referência ao botão de confirmação
    const confirmButton = document.getElementById("confirm");

    // Manipulador de clique no botão
    confirmButton.addEventListener("click", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Captura dos dados do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const endereco = document.getElementById("endereco").value;
        const city = document.getElementById("city").value;
        const cnpj = document.getElementById("CNPJ").value;
        const tel = document.getElementById("tel").value;
        const state = document.getElementById("state").value;
        const cep = document.getElementById("cep").value;
        
        // Captura dos valores dos checkboxes
        const washComplete = document.getElementById("wash-complete").checked;
        // Você pode capturar outros valores de checkbox da mesma maneira

        // Exemplo de exibição dos dados no console
        console.log("Nome Completo: " + name);
        console.log("E-mail: " + email);
        console.log("Endereço: " + endereco);
        console.log("Cidade: " + city);
        console.log("CNPJ: " + cnpj);
        console.log("Telefone: " + tel);
        console.log("Estado: " + state);
        console.log("CEP: " + cep);
        console.log("Lavagem Completa do Carro: " + washComplete);
        // Você pode exibir outros valores de checkbox da mesma maneira

        // Aqui você pode enviar os dados para o servidor ou realizar outras ações
    });
});
