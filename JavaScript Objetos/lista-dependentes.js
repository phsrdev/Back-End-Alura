const cliente = {
  nome: 'Pedro',
  idade: 30,
  cpf: '12543652266',
  email: 'phsr@email.com',
  fones: [ '5591235498', '5521988743124' ],
  dependentes: [{
    nome: 'Juliana',
    parentesco: 'esposa',
    dataNasc: '20/05/1986'
  }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)