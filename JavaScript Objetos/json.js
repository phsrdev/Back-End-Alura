//JSON é um formato criado para transferência de dados, sendo assim é necessário convertê-lo para um objeto JavaScript para que os dados possam ser utilizados em um programa. Para isso, existem dois métodos nativos:

//JSON.parse(): converte JSON para um objeto JavaScript;
//JSON.stringify(): converte um objeto JavaScript para o formato JSON.

//Por exemplo, podemos converter um objeto de livro para o JSON:

const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
})
   
console.log(jsonLivro)

//O resultado é um string JSON:

//{"id":50,"titulo":"Primeiros Passos com NodeJS","autor":"João Rubens","categoria":"programação","versoes":["ebook","impresso"]}

//Para fazer o processo inverso:

const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)

//O resultado é um objeto JavaScript:

//{id: 50, titulo: 'Primeiros Passos com NodeJS', autor: 'João Rubens', categoria: 'programação', versoes: [ 'ebook', 'impresso' ]}

//O processo de converter estruturas de dados em sequências de bytes ou caracteres. como no caso do JSON, é chamado de serialização (ou marshaling em algumas linguagens como Go).