



const apiUrl = "http://localhost:3000/api/produtos";

async function buscarEExibirProdutos() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Erro na rede: ${response.status}`);
        }
        const produtos = await response.json();
        renderizarProdutos(produtos);
    } catch (error) {
        console.error("Não foi possível buscar os produtos:", error);
    }
}

const containerCards = document.querySelector(".produtos-destaques");
const renderizarProdutos = (produtos) => {
    if (!containerCards) {
        console.error("Elemento .produtos-destaques não encontrado.");
        return;
    }

    containerCards.innerHTML = "";

    produtos.forEach(produto => {
        const meuCard = `
            <div class="card">
                <a href="/pages/tela-do-produto.html?id=${produto.id}" class="link-imagem">
                    <img src="${produto.imagem}" alt="${produto.nome}" />
                </a>
                <div class="conteudo-inferior-card">
                    <a href="/pages/tela-do-produto.html?id=${produto.id}" class="title-card">
                        ${produto.nome}
                    </a>
                    <div class="preco-botao">
                        <h4>R$ ${produto.preco.toFixed(2)}</h4>
                        <a href="/pages/tela-do-produto.html?id=${produto.id}" class="btn-add-carrinho">
                            <i class="fa-solid fa-cart-plus"></i>
                        </a>
                    </div>
                    <p>Frete grátis</p>
                </div>
            </div>`;
            containerCards.innerHTML += meuCard;
        });
    };

// Chama a função para iniciar o carregamento dos produtos
buscarEExibirProdutos();