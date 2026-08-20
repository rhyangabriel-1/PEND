class Produto {
    constructor(nome, preço, categoria, desconto) {
        this.nome = nome;
        this.preço = preço;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        return this.preço - (this.preço * (this.desconto / 100));
    }

    exibirInformacoes() {
    const resultado = document.querySelector('#resultado');
    const precoFinal = this.aplicarDesconto();

    resultado.innerHTML = `
        <div>
            <p>Nome: ${this.nome}</p>
            <p>Preço: R$${precoFinal.toFixed(2)}</p>
            <p>Categoria: ${this.categoria}</p>
            <p>Desconto: ${this.desconto}%</p>
        </div>
    `;
    }
}

const produto = new Produto () ;
const nome = document.querySelector('#nome');
const preço = document.querySelector('#preço');
const categoria = document.querySelector('#categoria');
const desconto = document.querySelector('#desconto');
const botaoCadastrar = document.querySelector('#botaoCadastrar');

botaoCadastrar.addEventListener('click', function () {

    const novoProduto = new Produto(
        nome.value,
        parseFloat(preço.value),
        categoria.value,
        parseFloat(desconto.value)
    );

    novoProduto.exibirInformacoes();
    novoProduto.aplicarDesconto();
    localStorage.setItem("produto", JSON.stringify(novoProduto));
});

const dados = localStorage.getItem("produto");

if (dados) {

    const produtoSalvo = JSON.parse(dados);

    const produto = new Produto(
        produtoSalvo.nome,
        produtoSalvo.preço,
        produtoSalvo.categoria,
        produtoSalvo.desconto
    );

    produto.exibirInformacoes();
}