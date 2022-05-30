//Uma factory function (“função fábrica”) é como chamamos, em JavaScript, uma função que retorna um objeto. Exemplo de factory function:

function criaUser(nome, email) {
    return {
      nome,
      email,
      exibeInfos() {
        return `${nome}, ${email}`
      }
    }
}

//Veja que, não se trata de um objeto literal mas sim uma função que retorna (através da palavra-chave return) um objeto.

//A função acima, quando executada com os parâmetros necessário, vai retornar um objeto com duas propriedades (nome e email) e um método interno (exibeInfos()):

const newUser1 = criaUser('Pedro', 'p@p.com')
console.log(newUser1) // {nome: 'Pedro', email: 'p@p.com', exibeInfos: ƒ}
console.log(newUser1.exibeInfos()) // Pedro, p@p.com

//As factory functions são diferentes das funções construtoras. Veja um exemplo de função construtora:

function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos() {
      return `${nome}, ${email}`
    }
}

//As funções construtoras devem ser chamadas com o operador new para criar instâncias do objeto User:

const newUser2 = new User('Juliana', 'j@j.com')
console.log(newUser2) //User {nome: 'Juliana',email: 'j@j.com',exibeInfos: [Function (anonymous)]}
console.log(newUser2.exibeInfos()) //Juliana, j@j.com

//O retorno no console é praticamente o mesmo, com exceção que agora exibeInfos() é uma função anônima e o objeto é explicitamente uma instância de User

//No caso da factory function não há perda de contexto na execução dos métodos internos.