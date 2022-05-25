const cliente = {
  nome:"Pedro",
  idade:30,
  cpf:"12543652266",
  email:"phsr@email.com"
}

                //0     //1
const chaves = ["nome","idade","cpf","email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

console.log(cliente["conta"])