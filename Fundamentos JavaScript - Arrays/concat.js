const arrayOriginal = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat = arrayOriginal.concat("André", "Fernanda")

console.log(arrayConcat)
console.log(arrayOriginal)

//o JavaScript concatena o array principal e os números passados como parâmetro para criar outro array, mantendo o original sem alterações.//

const arrayOriginal2 = ["Maria", "Carlos", "Eduardo", "Samanta"]
const arrayConcat2 = arrayOriginal2.concat(["André", "Fernanda"], ["Ricardo", "Ana"], ["Marcelo", "Bia"])

console.log(arrayConcat2)
console.log(arrayOriginal2)

//Podemos passar mais de um array como parâmetro para que seus elementos sejam concatenados em um único array, junto com o que está sendo chamado com o método (no caso, arrayOriginal.//

const arrayOriginal3 = [50, 60, 70]
const arrayConcat3 = arrayOriginal3.concat([80, [90, 100]])

console.log(arrayConcat3)
console.log(arrayOriginal3)

//Vimos anteriormente que, quando recebe um array como parâmetro, concat() vai concatenar apenas os elementos. Porém, este método não extrai os elementos do array de forma recursiva; ou seja, não vai extrair os elementos de arrays que estejam “aninhados”. Dessa forma, 80 foi extraído do array com sucesso, porém 90 e 100 não, o método considerou [90, 100] como um único elemento.//

//concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.//