const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

const guerreiro1 = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)

const guerreiro2 = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro2)

const mago = {
    nome: "Gandalf",
    classe: "mago"
}
const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const ranger = {
    nome: "Legolas",
    classe: "ranger"
}

const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)
