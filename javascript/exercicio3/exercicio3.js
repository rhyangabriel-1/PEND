//classe
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    //Metodo
    vender() {
        if (this.estoque > 0) {
            this.estoque--;
            console.log(`Produto ${this.nome} vendido. Estoque restante: ${this.estoque}`);
        } else {
            console.log(`Produto ${this.nome} está fora de estoque.`);
        }
    }

    repor(quantidade) {
        this.estoque += quantidade;
        console.log(`Produto ${this.nome} reposto. Novo estoque: ${this.estoque}`);
    }

    alterarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`Preço do produto ${this.nome} alterado para R$${this.preco.toFixed(2)}`);
    }

}

const produto1 = new Produto("Camiseta", 29.99, 100);

const produto2 = new Produto("Calça Jeans", 79.99, 50);

const produto3 = new Produto("Tênis", 199.99, 25);

console.log("----------------------");
console.log("Informações do Produto 1: ");
console.log("-", produto1.nome);
console.log("-", produto1.preco);
console.log("-", produto1.estoque);
console.log("----------------------");

console.log("Informações do Produto 2: ");
console.log("-", produto2.nome);
console.log("-", produto2.preco);
console.log("-", produto2.estoque);
console.log("----------------------");

console.log("Informações do Produto 3: ");
console.log("-", produto3.nome);
console.log("-", produto3.preco);
console.log("-", produto3.estoque);
console.log("----------------------");

produto1.vender();
produto2.repor(20);
produto3.alterarPreco(179.99);