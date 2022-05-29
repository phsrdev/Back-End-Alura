let dataEHora = Date() // utilizando a chamada de função diretamente
console.log(dataEHora) // Sun May 29 2022 19:52:07 GMT-0300 (Horário Padrão de Brasília)
console.log(typeof dataEHora) // string

let dataEHora2 = new Date() // utilizando o construtor do objeto Date
console.log(dataEHora2) // Sun May 29 2022 19:52:07 GMT-0300 (Horário Padrão de Brasília)
console.log(typeof dataEHora2) // object

//A informação então recuperada é a mesma mas os tipos são diferentes.

//A razão por trás desse comportamento é que, quando utilizamos um construtor, também temos acesso a todos os métodos do objeto Date. Podemos ver melhor essa diferença nos exemplos a seguir:

let dataComConstrutor = new Date()
let data1 = dataComConstrutor.getDate()
console.log(data1) //29

//Acima, utilizamos o método getDate(), que já existe em qualquer objeto criado a partir de Date(), para obter o dia do mês.

let dataFuncao = Date()
let data2 = dataFuncao.getDate()
//TypeError: dataFuncao.getDate is not a function

//Já no exemplo acima, vemos que uma data gerada através da chamada da função Date() diretamente não pode acessar os demais métodos do objeto Date, ao passo que ao gerarmos uma nova instância desse objeto é possível acessar todos os métodos definidos dentro deste objeto, como por exemplo getDate().