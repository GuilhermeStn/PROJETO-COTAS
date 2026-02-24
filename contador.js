//function juros(nome,valor,rendimento,quantidade){
    console.log("calculadora de juros compostos")
    console.log(nome);
    console.log(valor);
    console.log(rendimento);
    console.log(quantidade);
    if (quantidade==0){
        quantidade = 1 
        console.log("Addc uma cota pra simular o rendimento")
    }
    console.log("faremos a conta de quantas contas você precisa , para que o rendimento compre outra cota")
    console.log("                                  ")
    /// calcular o rendimento de acordo com a quantidade de cotas do mess
    var rendimento_valor = rendimento * quantidade 
    console.log("rendimento atual de R$: " + rendimento_valor)
    if (rendimento_valor < valor){
         console.log("rendimento atual de R$: " + rendimento_valor, "menor doque o valor da cota de :R$ " +valor )
         while (rendimento_valor < valor){
             quantidade = quantidade + 1  // addc uma cota a mais 
             console.log("Com a quantidade de " + quantidade ,"cotas")
             rendimento_valor = rendimento * quantidade
             console.log(" rendimento de R$ " + rendimento_valor.toFixed(2))
             var valor_investido = quantidade * valor
             console.log("valor investido nas cotas R$:" + valor_investido.toFixed(2))
         }
        }
//}
//juros("KNCR11", 106.24,1.20,10)


function jurr(){
    alert("oi")
    var nome_fundo = document.querySelector("input");

    alert(nome_fundo.value)
    var valor_compra = document.getElementById("dados_valor")

    alert(valor_compra.value)
    var rendimento = document.getElementById("rendimento")

    alert(rendimento.value)
    var cotas = document.getElementById("cotas")

    alert(cotas.value)


    var juros = rendimento.value * cotas.value
    alert(juros)
    
    var conteudo = document.querySelector("mostrar");
    conteudo.innerHTML = "<h2>rendimento de: </h2>"+juros;

}
 