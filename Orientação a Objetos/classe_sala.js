class Sala {
    constructor(identificacao, mesa = 1, porta = 1, luz_quantidade = 1, luz_acessa = false, extintor = 1, 
                ar_condicionado = false, projetor = 1, tomada = 1, computador = 1, janela = 2, alunos = 0) {
                    this.identificacao = identificacao;
                    this.mesa = mesa;
                    this.porta = porta;
                    this.luz_quantidade = luz_quantidade;
                    this.luz_acessa = luz_acessa;
                    this.extintor = extintor;
                    this.ar_condicionado = ar_condicionado;
                    this.projetor = projetor;
                    this.tomada = tomada;
                    this.computador = computador;
                    this.janela = janela;
                    this.alunos = alunos
                }
    toString = function () {
        return `A sala de aula ${this.identificacao} está com ${this.alunos} alunos no momento. Sua luz está ${this.luz_acessa === true ? 'acesa' : 'apagada'}`
    }
}
const _305 = new Sala("Lab-305", 26, 1, 16, true, 1, 50, 2 , 101, 46, 2, 30)
console.log(_305)
console.log(_305.toString())