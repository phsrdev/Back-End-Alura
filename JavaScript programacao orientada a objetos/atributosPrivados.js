//Existem algumas formas de fazer um atributo se comportar como privado. Vamos ver alguns exemplos, começando por uma classe totalmente pública:

class User {
 role = '';

 constructor(nome) {
   this.nome = nome;
   console.log(`Criado novo usuário: ${nome}` );
 }
}

// criar o usuário
let novoUser = new User('Pedro');

// modificar o role
novoUser.role = 'admin';
console.log(novoUser.role) // admin

//Agora vamos “proteger” as propriedades nome e role, marcando com o prefixo _ e também modificando um pouco a estrutura da classe:

class User {
 _role = '';

 set role(tipoRole) {
   if (tipoRole !== 'admin') {
     tipoRole = 'estudante'
   }
   this._role = tipoRole
 }

 get role() {
   return this._role
 }

 constructor(nome) {
   this._nome = nome;
 }
}

//Ao criarmos a classe, condicionamos o acesso aos getters e setters. Ao criarmos a instância e executarmos os métodos:

// criar o usuário
let novoUser = new User('Pedro');

// modificar o role
novoUser.role = 'admin'; // acessando via setter
console.log(novoUser.role) // admin

// tentar incluir um role não existente
novoUser.role = 'gerente';
console.log(novoUser.role) // estudante

//Propriedades do tipo “apenas leitura” (read-only)

//A partir do momento em que usamos getters ou setters em uma classe, as operações ficam dependentes entre si. Ou seja, uma classe que utiliza getters para acessar propriedades vai precisar necessariamente de setters para modificá-las. Por exemplo:

class User {
  constructor(nome) {
   this._nome = nome
 }

 get nome(){
   return this._nome
 }
}

//Acima, criamos uma classe com apenas um construtor para receber um valor para a propriedade nome e um getter para nome.

//Vamos instanciar a classe e tentar atualizar nome:

// criar o usuário
let novoUser = new User('Pedro');
console.log(novoUser.nome) //usando o getter

novoUser.nome = 'Juliana'
console.log(novoUser.nome) //não é modificado, continua 'Pedro'

//O setter não foi implementado, então a propriedade não é modificada.

//Usando métodos

//É possível emular os getters e setters com funções. As funções são mais flexíveis do que get/set (podem aceitar argumentos diferentes, por exemplo).

class User {
 _nome = '';

 setNome(nome) {
   this._nome = nome;
 }

 getNome() {
   return this._nome;
 }
}

//Nesse caso, suprimimos o construtor e passamos toda a responsabilidade para setName(). Vamos executar:

const novoUser = new User()
novoUser.setNome('Pedro');
console.log(novoUser.getNome()); //Pedro

//A convenção do prefixo _ para atributos privados têm sido usada há muito tempo e, apesar da funcionalidade de atributos privados com # já ter sido implementada, você ainda pode encontrar a forma anterior com frequência.