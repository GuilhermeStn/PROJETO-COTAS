// teste de pegar os dados dos fundos 

window.alert("Olá Mundo!")


const btn = document.getElementById("submit-btn");
btn.addEventListener("click", function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const nomeFundo = document.getElementById("Nome-fundo").value; 
    console.log(`Nome do Fundo: ${nomeFundo}`);
} ); 


