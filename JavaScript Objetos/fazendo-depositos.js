const cliente = {
  nome: 'Pedro',
  idade: 30,
  cpf: '12543652266',
  email: 'phsr@email.com',
  fones: [ '5591235498', '5521988743124' ],
  dependentes: [
    {
      nome: 'Juliana',
      parentesco: 'esposa',
      dataNasc: '20/05/1986' },
    {
      nome: 'Samia Maria',
      parentesco: 'filha',
      dataNasc: '04/01/2014'
    }
  ],
  saldo:100,
  depositar:function(valor){
    this.saldo += valor
  }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)