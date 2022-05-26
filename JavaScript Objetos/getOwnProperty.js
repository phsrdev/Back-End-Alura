const catalogo = {
    "editora": "Casa do Código",
    "catalogo": [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    }
]}

console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))

//{
//value: 'Casa do Código',
//writable: true,
//enumerable: true,
//configurable: true
//}