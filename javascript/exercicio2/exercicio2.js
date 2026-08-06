//classe 
class aluno {
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    //Metodo
    aprender() {
        console.log(`O aluno ${this.nome} está aprendendo.`);
    }

    estudar() {
        console.log(`O(A) aluno(a) ${this.nome} está estudando para o curso de ${this.curso}.`);
    }

    apresentar() {
        console.log(`O aluno ${this.nome} tem ${this.idade} anos, está matriculado no curso de ${this.curso} e sua matrícula é ${this.matricula}.`);

    }
}

//objeto
const aluno1 = new aluno("João", 20, "Engenharia", "12345");

const aluno2 = new aluno("Maria", 22, "Medicina", "67890");

const aluno3 = new aluno("Pedro", 19, "Direito", "54321");

console.log("----------------------");
console.log("Informações do Aluno 1: ");
console.log("-", aluno1.nome);
console.log("-", aluno1.idade);
console.log("-", aluno1.curso);
console.log("-", aluno1.matricula);
console.log("----------------------");

console.log("----------------------");
console.log("Informações do Aluno 2: ");
console.log("-", aluno2.nome);
console.log("-", aluno2.idade);
console.log("-", aluno2.curso);
console.log("-", aluno2.matricula);
console.log("----------------------");

console.log("----------------------");
console.log("Informações do Aluno 3: ");
console.log("-", aluno3.nome);
console.log("-", aluno3.idade);
console.log("-", aluno3.curso);
console.log("-", aluno3.matricula);
console.log("----------------------");

aluno1.apresentar();
aluno2.estudar();
aluno3.aprender();