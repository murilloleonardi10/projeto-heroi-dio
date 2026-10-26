
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

const heroi1 = new Heroi("Arthur", 30, "guerreiro");
const heroi2 = new Heroi("Merlin", 100, "mago");
const heroi3 = new Heroi("Bruce", 25, "monge");
const heroi4 = new Heroi("Hanzo", 28, "ninja");

const herois = [heroi1, heroi2, heroi3, heroi4];

for (const heroi of herois) {
    heroi.atacar();
}
