function Cliente(nome,cpf,email,saldo){
    this.nome =nome
    this.cpf=cpf
    this.email =email
    this.saldo=saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const pedro = new Cliente("André","1254359542","phsr@email.com",100)

console.log(pedro)