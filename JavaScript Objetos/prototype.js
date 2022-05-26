//É através da propriedade prototype que podemos manipular o protótipo de um objeto e adicionar propriedades e funções como no código abaixo:

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
   }
   ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

// através da propriedade prototype que acessamos o protótipo de um objeto para manipulá-lo, podendo adicionar propriedades e funções. Novos objetos criados herdarão essas características e comportamentos diretos do protótipo.

//Existe um protótipo associado ao uso de objetos literais no JavaScript para a herança de atributos e funções já definidos.

//Alternativa correta! Muito bem! Quase todo objeto em Javascript tem associado a ele um segundo objeto, seu protótipo, que lhe confere uma série de atributos e funções.