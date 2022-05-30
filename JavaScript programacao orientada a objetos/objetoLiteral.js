const user = {
  nome: "Pedro",
  email: "p@p.com",
  nascimento: "1992/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function() {
    console.log(this.nome, this.email)
  }
}

const admin = {
  nome: "Juliana",
  email: "j@j.com",
  role: "admin",
  criarCurso() {
    console.log('curso criado!')
  }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()






