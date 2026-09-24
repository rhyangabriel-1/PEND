const botaoPesquisar = document.getElementById("btnPesquisar");
const resultado = document.getElementById("resultado");
const contador = document.getElementById("contador");

botaoPesquisar.addEventListener("click", buscarNoticias);

document
.getElementById("campoPesquisa")
.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        buscarNoticias();
    }

});

async function buscarNoticias(){

    const pesquisa =
    document.getElementById("campoPesquisa").value.trim();

    resultado.innerHTML = "";
    contador.innerHTML = "";

    if(pesquisa === ""){

        alert("Digite um assunto para pesquisar.");
        return;
    }

    resultado.innerHTML =
    "<h2>Carregando notícias...</h2>";

    try{

        const resposta = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?search=${pesquisa}`
        );

        const dados = await resposta.json();

        resultado.innerHTML = "";

        if(dados.results.length === 0){

            resultado.innerHTML =
            "<h2>Nenhuma notícia encontrada.</h2>";

            return;
        }

        contador.innerHTML =
        `Total de notícias encontradas: ${dados.results.length}`;

        dados.results.forEach(noticia => {

            const card =
            document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `

                <img src="${noticia.image_url}">

                <div class="conteudo">

                    <h2>${noticia.title}</h2>

                    <p>
                        ${noticia.summary.substring(0,200)}...
                    </p>

                    <p class="data">
                        ${new Date(
                        noticia.published_at
                        ).toLocaleDateString("pt-BR")}
                    </p>

                    <div class="botoes">

                        <a
                        href="${noticia.url}"
                        target="_blank"
                        class="lerMais">
                        Ler Mais
                        </a>

                        <button class="remover">
                        Remover
                        </button>

                    </div>

                </div>
            `;

            const botaoRemover =
            card.querySelector(".remover");

            botaoRemover.addEventListener("click", () => {

                card.remove();

                const cardsRestantes =
                document.querySelectorAll(".card").length;

                contador.innerHTML =
                `Total de notícias encontradas: ${cardsRestantes}`;

            });

            resultado.appendChild(card);

        });

    }catch(erro){

        resultado.innerHTML = `
            <h2>
                Erro ao carregar as notícias.
            </h2>
        `;

        console.error(erro);
    }
}