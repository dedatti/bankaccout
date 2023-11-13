let saldo = 1000
let maiorValorInserido = 0
let somaValoresInseridos = 0
let totalTransacoes = 0
let continuar = false

do {
    const nome = prompt("Digite seu nome:")
    const cpf = prompt("Digite seu CPF:")
    const valor = Number(prompt("Digite o valor da operacao: "))
    const operacao = prompt("Qual operacao deseja fazer? (Saque/Deposito)")

    if (valor < 0) {
        console.log("Valor indisponivel. A transacao nao foi realizada.")
    } else if (operacao == "Saque" && valor > saldo) {
        console.log("Saldo Insuficiente. A transacao nao foi realizada.")
    } else if (operacao == "Saque") {
        console.log(`Ola ${nome} de CPF (${cpf}), seu saldo atual e R$${saldo}.`)
        saldo -= valor
        totalTransacoes++
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        console.log(`Transacao realizada com sucesso. Seu saldo atual e R$${saldo}.`)
    } else { 
        console.log(`Ola, ${nome} de CPF (${cpf}), seu saldo atual e R$${saldo}.`)
        saldo += valor
        totalTransacoes++
        somaValoresInseridos += valor
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        console.log(`Transacao realizada com sucesso. Seu saldo atual e R$${saldo}.`)
    }

    const opcao = prompt("Deseja continuar? (Aperte 1 para continuar, 2 para encerrar):")
    if (opcao === "1") {
        continuar = true
    } else if (opcao === "2") {
        continuar = false
    } else {
        console.log("Opcao invalida. Programa encerrado.")
        continuar = false
    }


}   while (continuar)

console.log(`Saldo final: R$${saldo}`)
console.log(`Maior valor inserido: R$${maiorValorInserido}`)
console.log(`Media dos valores inseridos: R$${(somaValoresInseridos / totalTransacoes)}`)

    
