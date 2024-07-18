class Veiculo {
    // Encapsulamento: proteger uma propriedade, definindo assim que ela não pode ser modificada após ser definida.
    #modelo
    constructor(velocidade = 0, modelo, cor, passageiros = 0) {
        this.velocidade = velocidade;
        this.#modelo = modelo;
        this.cor = cor;
        this.passageiros = passageiros;
    }
    toString = function() {
        return `O veículo está a ${this.velocidade} km/h e possui ${this.passageiros} passageiros.`
    }
    acelerar = function() {
        this.velocidade += 10;
        return `O veículo está a ${this.velocidade} km/h`
    }
    freiar = function() {
        this.velocidade > 0 ? this.velocidade -= 5 : true
        return `O veículo está a ${this.velocidade} km/h`

    }
}

// Exportando a classe para ser usada em outro arquivo
module.exports = Veiculo;