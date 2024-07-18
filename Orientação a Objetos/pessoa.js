// Objeto com um objeto de propriedade
var pessoa = { 
    nome: "Sofia",
    idade: 18,
    cor_cabelo: "castanho claro",
    nacionalidade: "Brasil",
    endereco: {
        rua: "Av. Itamar",
        bairro: "Centro"
    }
}

// console.log(pessoa)
console.log(pessoa.cor_cabelo)
console.log(pessoa['nacionalidade']) // outro modo de acessar a informação do objeto