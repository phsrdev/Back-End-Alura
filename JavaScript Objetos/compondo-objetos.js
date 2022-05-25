const cliente = {
  nome:"Pedro",
  idade:30,
  cpf:"12543652266",
  email:"phsr@email.com",
  fones:["5591235498","5521988743124"]
}

cliente.dependentes = {
    nome:"Juliana",
    parentesco:"esposa",
    dataNasc:"20/05/1986"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)