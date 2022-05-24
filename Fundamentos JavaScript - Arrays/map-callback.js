const arrayNums = [1, 2, 3, 4]
function multiplicaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)

//O resultado no terminal deve ser [ 10, 20, 30, 40 ]

//Para o JavaScript, qualquer função que seja chamada como argumento de outra é considerada uma função callback, não apenas em caso de métodos.