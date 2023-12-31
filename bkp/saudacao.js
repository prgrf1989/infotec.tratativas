
// NOME DA PESSOA
let nomeIdent = prompt('Qual o seu nome: ')

// HORARIO PARA SAUDAÇÃO
let saudIniFrase
let saudFimFrase

let diaHoje = new Date()
let horaAtual = diaHoje.getHours()

if(horaAtual >= 1 && horaAtual <= 11){
    saudIniFrase = `Bom dia, `
    saudFimFrase = `, tenha um bom dia.`

} else if(horaAtual >=12 && horaAtual <=17){
    saudIniFrase = `Boa tarde, `
    saudFimFrase = `, tenha uma boa tarde.`

} else {
    saudIniFrase = `Boa noite, `
    saudFimFrase = `, tenha uma boa noite.`

}

// MENSAGEM SAUDAÇÃO CABEÇALHO
document.querySelector("#saudacao-cabecalho").innerHTML = `${saudIniFrase} ${nomeIdent}`