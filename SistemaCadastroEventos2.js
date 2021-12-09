//Cadastro da data do evento
dataEvento = 10/12/2021
let = dataInscricao
if(dataInscricao < dataEvento) {
    console.log("Cadastrar Participantes")
} else {
    console.log("Cadastro não permitido")
}

//Análise da idade do participante 
//Idade = DataIncscricao - DataNascimento
let idade = DataIncscricao - DataNascimento
if(idade >= 18) {
    console.log("Permitir cadastro")
} else { 
    console.log("Alerta: Cadastro não permitido pela idade")
}

//Lista de palestrantes
const listadePalestrantes = [0,1,2,3,4]

// Análise da quantidade de participantes
var listadeParticipantes = [0,1,2,3,4,...99] 
if(listadeParticipantes <= 100 ) {
    console.log("Permitir cadastro")
} else {
    console.log("Alerta: Cadastro não permitido Limite excedido")
}