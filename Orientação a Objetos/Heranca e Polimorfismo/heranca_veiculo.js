// Importando a classe Veiculo no arquivo 
const Veiculo = require('./classe_veiculo')

class Moto extends Veiculo {
    constructor(cilindrada, ano, velocidade, modelo, cor, passageiros) {
        super(velocidade, modelo, cor, passageiros)
        this.cilindrada = cilindrada;
        this.ano = ano;
    }
}

// const ninja = new Moto(500, 2021, 150, 'Ninja', 'azul', 1)
// console.log(ninja)
// ninja.acelerar()
// ninja.acelerar()
// console.log(ninja.toString())

class Navio extends Veiculo {
    constructor(botes, carga = false, velocidade, modelo, cor, passageiros) {
        super(velocidade, modelo, cor, passageiros)
        this.botes = botes;
        this.carga = carga;
    }
    exibir = function() {
        return `O navio possui ${this.botes} botes e ${this.carga === true ? 'possui' : 'não possui'} cargas.`
    }
    // Polimorfismo: reescrever um método da classe pai, na classe filho. é necessário que os dois tenham o mesmo nome
    acelerar = function() {
        this.velocidade += 2
        return `O veículo acelerou e está a ${this.velocidade} km/h`
    }
}
const navio = new Navio(20, true, 60, "sei lá", "branca", 420)
console.log(navio)
navio.acelerar()
console.log(navio.freiar())
console.log(navio.exibir())

console.log(navio)