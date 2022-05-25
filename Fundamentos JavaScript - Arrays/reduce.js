const numeros = [43, 50, 65, 12]

//const soma = numeros.reduce((acum, atual) => atual + acum, 0)

//Caso você tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessários.

//const soma = numeros.reduce(function (acum, atual) {return atual + acum}, 0)

//Uma terceira forma de reescrever seria escrevendo a função callback fora do reduce():

function operacaoNumerica(acum, atual) {
    return atual + acum
}
   
const soma = numeros.reduce(operacaoNumerica, 0)

console.log(soma) //170

//O reduce() roda o loop no array “por baixo dos panos”, executando para cada elemento a instrução passada na função operacaoNumerica.