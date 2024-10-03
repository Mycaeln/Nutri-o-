function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2); // Calcula o IMC e arredonda para 2 casas decimais
}

function atualizarIMC() {
    const pacientes = document.querySelectorAll('.paciente');
    pacientes.forEach(paciente => {
        const peso = parseFloat(paciente.querySelector('.info-peso').textContent);
        const altura = parseFloat(paciente.querySelector('.info-altura').textContent);
        const imc = calcularIMC(peso, altura);
        paciente.querySelector('.info-imc').textContent = imc; // Atualiza o IMC na tabela
    });
}

// Chama a função para atualizar os IMCs na tabela ao carregar a página
atualizarIMC();
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lucas Nutrição";

var paciente = document.querySelector("#primeiro-paciente"); // Fixed the selector ID
var tdPeso = paciente.querySelector(".info-peso"); // Fixed the capitalization
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura"); // Added the missing dot
var altura = parseFloat(tdAltura.textContent); // No need to redeclare "altura"

console.log("Peso:", peso);
console.log("Altura:", altura);