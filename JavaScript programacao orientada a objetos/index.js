import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User('Juliana', 'j@j.com', '2021-01-01')
// console.log(novoUser.exibirInfos())

// const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01')
// console.log(novoAdmin.nome)
// novoAdmin.nome = ''
// console.log(novoAdmin.nome)

const novoDocente = new Docente('Pedro', 'p@p.com', '2021-01-01')
console.log(novoDocente.exibirInfos())