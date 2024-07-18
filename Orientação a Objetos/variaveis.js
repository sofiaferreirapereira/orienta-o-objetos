// Cada propriedade do objeto "fazenda" possui um tipo de variável possível de ser usado

var fazenda = {
    cavalos: 7,
    raca_cachorro: "Pastor Alemão",
    possui_baia: true,
    animais_estimacao: {
        gato: "viralata",
        cachorro: "Golden",
    },
    aves: ["Galinha", "Pato", "Ema"],
    exibir: function() {
        const mensagem = `A raça dos cachorros que temos na fazenda é ${this.raca_cachorro} e temos ${this.aves} por aqui também :)`
        return mensagem
    },
    porcos: null,
    gado: undefined,
    apresentacao: function () {
        const mensage = "Objeto que possui as informações de uma fazenda." 
        return mensage
    },
    aumentaQuantidadeCavalo: function () {
        this.cavalos += 1
        return true
    },
    diminuiQuantidadeCavalo: function () {
        this.cavalos -= 1
        return true
    },
    ordena_aves: function () {
        return this.aves.sort()
    }

}
// para chamar a função
console.log(fazenda.exibir())

// para modificar a propriedade do objeto; 
fazenda.cavalos = 13;

console.log(fazenda.ordena_aves())