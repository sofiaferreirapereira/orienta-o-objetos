// Objeto indefinido: parametros
class Sala {
    constructor(parametros) {
                    this.identificacao = parametros.identificacao;
                    this.mesa = parametros.mesa || 1;
                    this.porta = parametros.porta || 1;
                    this.luz_quantidade = parametros.luz_quantidade || 1;
                    this.luz_acessa = parametros.luz_acessa || true;
                    this.extintor = parametros.extintor || 1;
                    this.ar_condicionado = parametros.ar_condicionado || false;
                    this.projetor = parametros.projetor || 1;
                    this.tomada = parametros.tomada || 1;
                    this.computador = parametros.computador || 1;
                    this.janela = parametros.janela || 2;
                    this.alunos = parametros.alunos;
                }
    toString = function () {
        return `A sala de aula ${this.identificacao} está com ${this.alunos} alunos no momento. Sua luz está ${this.luz_acessa === true ? 'acesa' : 'apagada'}`
    }
    entraAluno = function () {
        this.alunos += 1
        console.log(`Tem ${alunos} na sala`)
        return
    }
    saiAluno = function () {
        this.alunos -= 1;
        return `Tem ${alunos} na sala`
       
    }

}
const _305 = new Sala(identificacao = "Lab-305", luz_quantidade = 16, computador = 46, alunos = 26)
console.log(_305.toString())
console.log(_305.entraAluno())
console.log(_305.saiAluno())