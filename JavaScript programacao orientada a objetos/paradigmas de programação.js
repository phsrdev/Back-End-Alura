//Um exemplo que mostra o paradigma imperativo é a implementação da seguinte função que recebe um vetor e retorna outro vetor com cada um dos valores dobrado:

function dobra(vetor){
    let resultados = [];
    for (let i = 0; i < vetor.length ; i++){
        resultados.push(arr[i] * 2);
}
return resultados;
}

//Uma implementação declarativa do mesmo problema de dobrar os valores de um vetor pode ser feita da seguinte forma:

function dobra2(vetor){
    return vetor.map((item) => item * 2);
}

//No cotidiano temos diversos outros exemplos de afirmações que podem ser consideradas declarativas, como arquivos HTML:
//<h1> Programação Declarativa</h1>
//<p> Estou declarando como quero que o texto apareça, e não dizendo para o computador como renderizar um texto</p>

//Ou até mesmo as queries SQL, nas quais apenas dizemos qual resultado esperamos, sem especificar como a busca deve ser feita:

//SELECT * FROM Alunos WHERE Escola=’Alura’;